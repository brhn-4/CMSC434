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
            profilePicture: './Images/amchilds.jpg',
            name: 'Andrew Childs',
            facultyType: 'CS Faculty',
            title: 'Co-director, Joint Center for Quantum Information and Computer Science (QuICS)',
            researchArea: 'Quantum Computing',
            officeNumber: 'IRB 5212',
            email: 'amchilds@cs.umd.edu',
            website: 'http://cs.umd.edu/~amchilds'
        },
        {
            profilePicture: './Images/head1.jpg',
            name: 'Xiaodi Wu',
            facultyType: 'CS Faculty',
            title: 'Assistant Professor',
            researchArea: 'Quantum Computing, Algorithms and Theory',
            officeNumber: 'IRB 5210',
            email: 'xwu@cs.umd.edu',
            website: 'https://www.cs.umd.edu/~xwu'
        },
        {
            profilePicture: './Images/yeung donald.jpg',
            name: 'Donald Yeung',
            facultyType: 'Affiliate Faculty',
            title: 'Affiliate Professor',
            researchArea: 'Computer Architecture',
            officeNumber: 'AVW 1327',
            email: 'yeung@glue.umd.edu',
            website: 'http://www.ece.umd.edu/~yeung/'
        },
        {
            profilePicture: './Images/Ming_Lin.jpg',
            name: 'Ming Lin',
            facultyType: 'CS Faculty',
            title: 'Professor',
            researchArea: 'AI and Robotics, Computer Vision and Machine Perception, Graphics Visualization and VR AR, High Performance and Scientific Computing, Human Computer Interaction',
            officeNumber: 'IRB 5162',
            email: 'lin@cs.umd.edu',
            website: 'https://www.cs.umd.edu/~lin'
        },
        {
            profilePicture: './Images/keleher.png',
            name: 'Pete Keleher',
            facultyType: 'CS Faculty',
            title: 'Associate Professor',
            researchArea: 'Systems and Networking, Cybersecurity and Cryptography',
            officeNumber: 'IRB 5146',
            email: 'keleher@cs.umd.edu',
            website: 'http://pete.kelehers.me'
        },
        {
            profilePicture: './Images/zcliu.jpg',
            name: 'Zhicheng Liut',
            facultyType: 'CS Faculty',
            title: 'Assistant Professor',
            researchArea: 'Human Computer Interaction, Machine Learning and Data Science',
            officeNumber: 'IRB 5202',
            email: 'leozcliu@umd.edu',
            website: 'https://www.zcliu.org'
        },
        {
            profilePicture: './Images/fur.jpg',
            name: 'Furong Huang',
            facultyType: 'CS Faculty',
            title: 'Assistant Professor',
            researchArea: 'Algorithms and Theory, AI and Robotics, Machine Learning and Data Science',
            officeNumber: 'IRB 4204',
            email: 'furongh@cs.umd.edu',
            website: 'http://furong-huang.com'
        },
        {
            profilePicture: './Images/DavidJacobs.jfif',
            name: 'David Jacobs',
            facultyType: 'CS Faculty',
            title: 'Professor',
            researchArea: 'AI and Robotics, Computer Vision and Machine Perception',
            officeNumber: 'IRB 4240',
            email: 'djacobs@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~djacobs'
        },
        {
            profilePicture: './Images/swiss.jpeg',
            name: 'Ian Miers',
            facultyType: 'CS Faculty',
            title: 'Assistant Professor',
            researchArea: 'Cybersecurity and Cryptography',
            officeNumber: 'IRB 5242',
            email: 'imiers@umd.edu',
            website: 'N/A'
        },
        {
            profilePicture: './Images/dana.png',
            name: 'Dana Nau',
            facultyType: 'CS Faculty',
            title: 'Professor',
            researchArea: 'Cybersecurity and Cryptography',
            officeNumber: 'IRB 4158',
            email: 'nau@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~nau/'
        },
        {
            profilePicture: './Images/dana.png',
            name: 'Dana Nau',
            facultyType: 'CS Faculty',
            title: 'Professor',
            researchArea: 'AI and Robotics',
            officeNumber: 'IRB 2210',
            email: 'nau@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~nau/'
        },
        {
            profilePicture: './Images/peng.png',
            name: 'Huaishu Peng',
            facultyType: 'CS Faculty',
            title: 'Assistant Professor',
            researchArea: 'Human Computer Interaction, IoT and Wearables Technology',
            officeNumber: 'IRB 4206',
            email: 'huaishu@cs.umd.edu',
            website: 'http://smartlab.cs.umd.edu'
        },
        {
            profilePicture: './Images/porter.jfif',
            name: 'Adam Porter',
            facultyType: 'CS Faculty',
            title: 'Professor, Fraunhofer Executive Director ',
            researchArea: 'Programming Languages and Software Engineering',
            officeNumber: 'IRB 5212',
            email: 'aporter@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~aporter/'
        },
        {
            profilePicture: './Images/pratap.jpg',
            name: 'Pratap Tokekar',
            facultyType: 'CS Faculty',
            title: 'Associate Professor',
            researchArea: 'AI and Robotics',
            officeNumber: 'IRB 3207',
            email: 'tokekar@umd.edu',
            website: 'http://tokekar.com/'
        },
        {
            profilePicture: './Images/justin.jpeg',
            name: 'Justin Wyss-Gallifent',
            facultyType: 'CS Faculty',
            title: 'Principal Lecturer',
            researchArea: 'N/A',
            officeNumber: 'IRB 2236',
            email: 'immortal@umd.edu',
            website: 'N/A'
        },
        {
            profilePicture: './Images/yoon.jpeg',
            name: 'Ilchul Yoon',
            facultyType: 'CS Faculty',
            title: 'Lecturer',
            researchArea: 'N/A',
            officeNumber: 'IRB 2246',
            email: 'iyoon@cs.umd.edu',
            website: 'N/A'
        },
        {
            profilePicture: './Images/zhou.jpg',
            name: 'Tianyi Zhou',
            facultyType: 'CS Faculty',
            title: 'Assistant Professor',
            researchArea: 'Machine Learning and Data Science, Natural Language Processing, AI and Robotics',
            officeNumber: 'IRB 4228',
            email: 'tianyi@umd.edu',
            website: 'https://tianyizhou.github.io/'
        },
        {
            profilePicture: './Images/cliff.jpg',
            name: 'Clifford Bakalian',
            facultyType: 'CS Faculty',
            title: 'Lecturer',
            researchArea: 'Programming Languages, Computer and Network Security',
            officeNumber: 'IRB 2238',
            email: 'cbakalia@umd.edu',
            website: 'https://www.cliffbakalian.dev'
        },
        {
            profilePicture: './Images/john.jpg',
            name: 'John Dickerson',
            facultyType: 'CS Faculty',
            title: 'Associate Professor',
            researchArea: 'AI and Robotics, Databases and Big Data',
            officeNumber: 'IRB 4128',
            email: 'john@cs.umd.edu',
            website: 'http://jpdickerson.com'
        },
        {
            profilePicture: './Images/fawzi.jpg',
            name: 'Fawzi Emad',
            facultyType: 'CS Faculty',
            title: 'Senior Lecturer',
            researchArea: 'N/A',
            officeNumber: 'IRB 2212',
            email: 'fpe@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~fpe/'
        },
        {
            profilePicture: './Images/fawzi.jpg',
            name: 'Fawzi Emad',
            facultyType: 'CS Faculty',
            title: 'Senior Lecturer',
            researchArea: 'N/A',
            officeNumber: 'IRB 2212',
            email: 'fpe@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~fpe/'
        },
        {
            profilePicture: './Images/vh.jpg',
            name: 'David Van Horn',
            facultyType: 'CS Faculty',
            title: 'Associate Professor',
            researchArea: 'Programming Languages and Software Engineering, Cybersecurity and Cryptography',
            officeNumber: 'IRB 5250',
            email: 'dvanhorn@cs.umd.edu',
            website: 'http://ter.ps/dvanhorn'
        },
        {
            profilePicture: './Images/bederson.jpg',
            name: 'Ben Bederson',
            facultyType: 'Emeritus Faculty',
            title: 'Professor Emeritus',
            researchArea: 'Human Computer Interaction',
            officeNumber: 'N/A',
            email: 'bederson@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~bederson/'
        },
        {
            profilePicture: './Images/lei.png',
            name: 'Leilani Battle',
            facultyType: 'Adjunct Faculty',
            title: 'Adjunct Assistant Professor',
            researchArea: 'Databases and Big Data, Human Computer Interaction, Machine Learning and Data Science',
            officeNumber: 'IRB 5148',
            email: 'leilani@cs.umd.edu',
            website: 'N/A'
        },
        {
            profilePicture: './Images/eun.png',
            name: 'Eun Kyoung Choe',
            facultyType: 'Affiliate Faculty',
            title: 'Affiliate Associate Professor',
            researchArea: 'Human Computer Interaction',
            officeNumber: 'N/A',
            email: 'choe@umd.edu',
            website: 'http://eunkyoungchoe.com/'
        },
        {
            profilePicture: './Images/marine.jpg',
            name: 'Marine Carpuat',
            facultyType: 'CS Faculty',
            title: 'Associate Professor',
            researchArea: 'AI and Robotics, Machine Learning and Data Science, Natural Language Processing',
            officeNumber: 'IRB 4130',
            email: 'marine@cs.umd.edu',
            website: 'http://www.cs.umd.edu/~marine'
        },
        
        

        
        
    ];

    var teachersTable = $('#teachersTable').DataTable({
        data: teachersData,
        columns: [
            { data: 'profilePicture',orderable: false, render: function(data, type, row) {
                return '<img src="' + data + '" alt="Profile Picture" width="50" height="50">';
            }},
            { data: 'name' },
            { data: 'facultyType', orderable:false },
            { data: 'title' },
            { data: 'researchArea' },
            { data: 'officeNumber',orderable:false, render: function(data, type, row) {
                return '<a href=\'./map.html\'\>' + data + '</a>';
            }},
            { data: 'email',orderable:false },
            { data: 'website',orderable:false, render: function(data, type, row) {
                return '<a href=\'' + data + '\'>'+data.slice(7) + '</a>';
            }}
        ]
    });

  

 
    $("#filterButton").on("click", function () {
        const nameSearch = $("#nameSearch").val().toLowerCase();
        const researchAreaSearch = $("#researchAreaSearch").val().toLowerCase();
    
        teachersTable.search("").draw();
        teachersTable.rows().every(function () {
            const rowData = this.data();
            const name = rowData.name ? rowData.name.toLowerCase() : '';
            const researchArea = rowData.researchArea ? rowData.researchArea.toLowerCase() : '';
    
            const nameMatch = name.includes(nameSearch);
            const researchAreaMatch = researchArea.includes(researchAreaSearch);
    
            if (!(nameMatch && researchAreaMatch)) {
                this.remove();
            }
        });
        teachersTable.draw();
    });
});
    
    
    
    
    
    