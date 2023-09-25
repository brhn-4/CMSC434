$(document).ready(function() {
    var teachersData = [
        {
            profilePicture: './Images/golub.jpg',
            name: 'Evan Golub',
            facultyType: 'CS Faculty',
            title: 'Principal Lecturer',
            researchArea: 'Human Computer Interaction',
            officeNumber: 'IRB 1210',
            email: 'egolub@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~egolub/'
        },
        {
            profilePicture: './Images/kruskal.jpg',
            name: 'Clyde Kruskal',
            facultyType: 'CS Faculty',
            title: 'Associate Professor',
            researchArea: 'Algorithms and Theory',
            officeNumber: 'IRB 2240',
            email: 'kruskal@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~kruskal/'
        },
        {
            profilePicture: './Images/mount.png',
            name: 'David Mount',
            facultyType: 'CS Faculty',
            title: 'Professor & Associate Chair of Undergraduate Education',
            researchArea: 'Algorithms and Theory, Information Retrieval, and GIS',
            officeNumber: 'IRB 4162',
            email: 'mount@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~mount/'
        },
        {
            profilePicture: './Images/bahar.jpeg',
            name: 'Bahar Asgari',
            facultyType: 'CS Faculty',
            title: 'Assistant Professor',
            researchArea: ' Systems and Networking, High Performance and Scientific Computing',
            officeNumber: 'IRB 5148',
            email: 'bahar@umd.edu',
            website: 'https://www.cs.umd.edu/~bahar/'
        },
        {
            profilePicture: 'https://via.placeholder.com/50',
            name: 'Jane Smith',
            facultyType: 'Adjunct Faculty',
            title: 'Adjunct Lecturer',
            researchArea: 'Quantum Computing',
            officeNumber: 'IRB 7016',
            email: 'janesmith@example.com',
            website: 'https://www.example.com/janesmith'
        },
        
        
    ];

    var teachersTable = $('#teachersTable').DataTable({
        data: teachersData,
        columns: [
            { data: 'profilePicture', render: function(data, type, row) {
                return '<img src="' + data + '" alt="Profile Picture" width="50" height="50">';
            }},
            { data: 'name' },
            { data: 'facultyType' },
            { data: 'title' },
            { data: 'researchArea' },
            { data: 'officeNumber', render: function(data, type, row) {
                return '<a href=\'./map.html\'\>' + data + '</a>';
            }},
            { data: 'email' },
            { data: 'website', render: function(data, type, row) {
                return '<a href=\'' + data + '\'>'+data.slice(7) + '</a>';
            }}
        ]
    });

  
    $('#filterButton').on('click', function() {
        var name = $('#nameSearch').val().toLowerCase();
        var department = $('#departmentSearch').val().toLowerCase();
        teachersTable.search('').columns().search('').draw(); 
        if (name) {
            teachersTable.columns(1).search(name).draw();
        }
        if (department) {
            teachersTable.columns(4).search(researchArea).draw();
        }
    });
});