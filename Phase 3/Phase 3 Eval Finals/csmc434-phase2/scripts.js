"use strict";
if(window.localStorage.getItem('calGoal') == null){
    window.localStorage.setItem('calGoal', '2000');
}
if(window.localStorage.getItem('calTotal') == null){
    window.localStorage.setItem('calTotal', '0');
}
if(window.localStorage.getItem('foodList') == null){
    window.localStorage.setItem('foodList', '');
}
if(window.localStorage.getItem('weightList') == null){
    window.localStorage.setItem('weightList', '');
}
if(window.localStorage.getItem('waterGoal') == null){
    window.localStorage.setItem('waterGoal', '100');
}
if(window.localStorage.getItem('waterTotal') == null){
    window.localStorage.setItem('waterTotal', '0');
}


////////////////////////////////////////////////////////////////////////Dashboard Functions
function loadDashboard() {
    console.log(localStorage.getItem('foodList'));
    location.href='dashboard.html';
} 
function onLoadDashBoard() {
    if(localStorage.getItem('profileName') != null){
        document.getElementById('nameDisplay').innerHTML = "Welcome "+localStorage.getItem('profileName');
    }

    let x = parseInt(localStorage.getItem('calGoal'))-parseInt(localStorage.getItem('calTotal'));
    if(x <= 0){
        document.getElementById('calorieChart').style.backgroundImage=`conic-gradient(#d9514e ${0}deg, lightblue ${0}deg)`;
        document.getElementById("calTot").innerHTML = `<p>0</p>`;
    } else {
        document.getElementById("calTot").innerHTML = `<p>${x}</p>`;
        let prop = (localStorage.getItem('calGoal')-localStorage.getItem('calTotal'))/localStorage.getItem('calGoal');
        console.log('Prop' + prop)
        document.getElementById('calorieChart').style.backgroundImage=`conic-gradient(#d9514e ${(360*(prop))}deg, lightblue ${(360*(prop))}deg)`;
    }
    
    

    let w = parseInt(localStorage.getItem('waterGoal'))-parseInt(localStorage.getItem('waterTotal'));
    if(w <= 0){
        document.getElementById('waterChart').style.backgroundImage=`conic-gradient(#d9514e ${0}deg, lightblue ${0}deg)`;
        document.getElementById("waterTot").innerHTML = `<p>0</p>`;
    } else {
        document.getElementById("waterTot").innerHTML = `<p>${w}</p>`;
        let prop2 = (localStorage.getItem('waterGoal')-localStorage.getItem('waterTotal'))/localStorage.getItem('waterGoal');
        console.log('Prop2: ' + prop2)
        document.getElementById('waterChart').style.backgroundImage=`conic-gradient(#d9514e ${(360*(prop2))}deg, lightblue ${(360*(prop2))}deg)`;
    }
    
    
    if(localStorage.getItem('profileWeight') == null || localStorage.getItem('profileTargetWeight') == null){
        document.getElementById('weightProgressMessage').innerHTML = "Please update your personal information in the Profile Tab!";
        document.getElementById("userWeight").value = localStorage.getItem('profileWeight');
    } else {
        if(parseInt(localStorage.getItem('profileWeight')) > parseInt(localStorage.getItem('profileTargetWeight'))){
            document.getElementById('weightProgress').value = localStorage.getItem('profileTargetWeight');
            document.getElementById('weightProgress').max = localStorage.getItem('profileWeight');
            const toLose = parseInt(localStorage.getItem('profileWeight')) - parseInt(localStorage.getItem('profileTargetWeight'));
            if(toLose != 1){
                document.getElementById('weightProgressMessage').innerHTML = 
                "You need to lose " + toLose + " pounds to reach your target weight of " + localStorage.getItem('profileTargetWeight') + " pounds, keep it up!";
            } else {
                document.getElementById('weightProgressMessage').innerHTML = 
                "You need to lose 1 pound to reach your target weight of " + localStorage.getItem('profileTargetWeight') + " pounds, almost there!";
            }
        } else if(parseInt(localStorage.getItem('profileWeight')) < parseInt(localStorage.getItem('profileTargetWeight'))){
            document.getElementById('weightProgress').value = localStorage.getItem('profileWeight');
            document.getElementById('weightProgress').max = localStorage.getItem('profileTargetWeight');
            const toGain = parseInt(localStorage.getItem('profileTargetWeight')) - parseInt(localStorage.getItem('profileWeight'));
            if(toGain != 1){
                document.getElementById('weightProgressMessage').innerHTML = 
                "You need to gain " + toGain + " pounds to reach your target weight of " + localStorage.getItem('profileTargetWeight') + " pounds, keep it up!";
            } else {
                document.getElementById('weightProgressMessage').innerHTML = 
                "You need to gain 1 pound to reach your target weight of " + localStorage.getItem('profileTargetWeight') + " pounds, almost there!";   
            }
        } else {
            document.getElementById('weightProgress').value = localStorage.getItem('profileTargetWeight');
            document.getElementById('weightProgress').max = localStorage.getItem('profileWeight');
            document.getElementById('weightProgressMessage').innerHTML = 
            "You have reached your weight goal of " + localStorage.getItem('profileWeight') + ", Congratulations! Great Work!";
        }
        
    }


    let points = window.localStorage.getItem('weightList').split(",");
    //canvas width:466px, height:300
    let gap = Math.round(466/points.length);
    let xcoord = 10;
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    
    ctx.moveTo(10, points[0]);
    for(let i=1;i<points.length;i++){
        console.log("Points: "+points)
        ctx.lineTo(xcoord+gap,300-points[i]);
        xcoord += gap;
    }
    ctx.stroke();
}



////////////////////////////////////////////////////////////////////////Culinary Functions
function loadCulinary() {
    location.href='culinary.html';
}
function enterFood(){ 
    if(document.getElementById("foodName").value === "" || document.getElementById("calories").value === "" || isNaN(document.getElementById("calories").value)){

    } else {
        let name = document.getElementById("foodName").value;
        let cals = document.getElementById("calories").value;
        let list = localStorage.getItem('foodList');
        let str = `,<li>${name}: ${cals} &nbsp&nbsp <span class="xOut" onclick="removeFood(this)">&#x2715</span></li>`

        //Update foodList in Storage
        localStorage.setItem('foodList',list.concat(str));
        localStorage.setItem('calTotal', (parseInt(localStorage.getItem('calTotal'))+parseInt(cals)))
        refreshList();

        //Update Local Storage
        document.getElementById('calGoal').innerHTML = localStorage.getItem('calGoal')
        document.getElementById('calTotal').innerHTML = localStorage.getItem('calTotal')
        document.getElementById('calLeft').innerHTML = localStorage.getItem('calGoal') - localStorage.getItem('calTotal')
    }
}

function removeFood(x){
    console.log(x.parentElement.innerHTML.split(":")[1].split(" ")[1]);
    let calories = x.parentElement.innerHTML.split(":")[1].split(" ")[1];
    window.localStorage.setItem('calTotal',window.localStorage.getItem('calTotal')-calories);
    
    document.getElementById('calTotal').innerHTML = localStorage.getItem('calTotal')
    document.getElementById('calLeft').innerHTML = localStorage.getItem('calGoal') - localStorage.getItem('calTotal')

    x.parentElement.remove()
    window.localStorage.setItem('foodList',document.getElementById('foodList').innerHTML)
}

function refreshList() {
    let arr = localStorage.getItem('foodList').split(',');
    let x = ""
    for (let i=0; i<arr.length;i++){
        x = x+arr[i];
    }
    document.getElementById("foodList").innerHTML = x;
    document.getElementById('calGoal').innerHTML = localStorage.getItem('calGoal')
    document.getElementById('calTotal').innerHTML = localStorage.getItem('calTotal')

    document.getElementById('waterGoal').innerHTML = localStorage.getItem('waterGoal')
    document.getElementById('waterTotal').innerHTML = localStorage.getItem('waterTotal')

    let i = parseInt(window.localStorage.getItem('calGoal'));
    let j = parseInt(window.localStorage.getItem('calTotal'));
    if((i-j) === 0){
        document.getElementById('calLeft').innerHTML = "You Have Reached Your Goal";
    } else if ((i-j) < 0) {
        document.getElementById('calLeft').innerHTML = "You Have Exceeded Your Goal";
    } else {
        document.getElementById('calLeft').innerHTML = (i-j);
    }


    let w = parseInt(window.localStorage.getItem('waterGoal'));
    let z = parseInt(window.localStorage.getItem('waterTotal'));
    if((w-z) === 0){
        document.getElementById('waterLeft').innerHTML = "You Have Reached Your Goal";
    } else if ((w-z) < 0) {
        document.getElementById('waterLeft').innerHTML = "You Have Exceeded Your Goal";
    } else {
        document.getElementById('waterLeft').innerHTML = (w-z);
    }
}

function enterWater() {
    let w = parseInt(window.localStorage.getItem('waterGoal'));
    let x = parseInt(window.localStorage.getItem('waterTotal'));
    let y = parseInt(document.getElementById('water').value);
    window.localStorage.setItem('waterTotal',(x+y));
    let z = parseInt(window.localStorage.getItem('waterTotal'));

    
    //Update Page
    document.getElementById('waterTotal').innerHTML = parseInt(localStorage.getItem('waterTotal'));
    if((w-z) === 0){
        console.log("Hit Water")
        document.getElementById('waterLeft').innerHTML = "You Have Reached Your Goal";
    } else if ((w-z) < 0) {
        console.log("Exceeded Water")
        document.getElementById('waterLeft').innerHTML = "You Have Exceeded Your Goal";
    } else {
        console.log("Need Water")
        document.getElementById('waterLeft').innerHTML = localStorage.getItem('waterGoal') - localStorage.getItem('waterTotal');
    }
}


////////////////////////////////////////////////////////////////////////Fitness Functions
function loadFitness() {
    location.href='fitness.html';
}


function mentalHealthRecs(){
    if(document.getElementById('mentalHealthSelection').value == 'happy'){
        document.getElementById('mentalHealthMessage').innerHTML = "That's great to hear!";
    } else if(document.getElementById('mentalHealthSelection').value == 'anxious'){
        document.getElementById('mentalHealthMessage').innerHTML = "Take 15 minutes to do some meditation.";
    } else if(document.getElementById('mentalHealthSelection').value == 'veryStressed') {
        document.getElementById('mentalHealthMessage').innerHTML = "We're sorry to hear that! Please set aside 30 minutes for deep breathing to relieve stress";
    }                     
}



////////////////////////////////////////////////////////////////////////Profile Functions
function loadProfileUserInfo() {
    if(localStorage.getItem('profileName') != null){
        document.getElementById('nameDisplay').innerHTML = localStorage.getItem('profileName');
        document.getElementById("userName").value = localStorage.getItem('profileName');
    }
    if(localStorage.getItem('profileAge') != null){
        document.getElementById("userAge").value = localStorage.getItem('profileAge');
    }
    if(localStorage.getItem('profileHeight') != null){
        document.getElementById("userHeight").value = localStorage.getItem('profileHeight');
    }
    if(localStorage.getItem('profileWeight') != null){
        document.getElementById("userWeight").value = localStorage.getItem('profileWeight');
    }
    if(localStorage.getItem('profileTargetWeight') != null){
        document.getElementById("userTargetWeight").value = localStorage.getItem('profileTargetWeight');
    }
    if(localStorage.getItem('profileGender') != null){
        document.getElementById("userGender").value = localStorage.getItem('profileGender');
    }
    if(localStorage.getItem('activityLevel') != null){
        document.getElementById("activity").value = localStorage.getItem('activityLevel');
    }
    if(localStorage.getItem('profileBMI') != null){
        document.getElementById("userBMI").value = localStorage.getItem('profileBMI');
    }
}

function saveProfileInfo(){
    if(document.getElementById('userAge').value == "" || document.getElementById('userHeight').value == "" || document.getElementById('userWeight').value == "" || document.getElementById('userTargetWeight').value == "" || document.getElementById('userGender').value === "Select Gender" || document.getElementById('activity').value === "Select Activity Level"){
        document.getElementById('successMessage').innerHTML = "Please Fill In All Sections";
        window.setTimeout(() => {
            document.getElementById('successMessage').innerHTML = "";
        }, 2000);
    } else {
        localStorage.setItem('profileName', document.getElementById('userName').value);
        localStorage.setItem('profileAge', document.getElementById('userAge').value);
        localStorage.setItem('profileHeight', document.getElementById('userHeight').value);
        localStorage.setItem('profileWeight', document.getElementById('userWeight').value);
        localStorage.setItem('profileTargetWeight', document.getElementById('userTargetWeight').value);
        localStorage.setItem('profileGender', document.getElementById('userGender').value);
        localStorage.setItem('activityLevel', document.getElementById('activity').value);
        document.getElementById('successMessage').innerHTML = "Information Saved!";
        window.setTimeout(() => {
            document.getElementById('successMessage').innerHTML = "";
        }, 2000);

        document.getElementById('nameDisplay').innerHTML = document.getElementById('userName').value;


        let x = window.localStorage.getItem('weightList').split(",");
        let prevWeight = x[x.length-1];

        if(prevWeight === "" ||prevWeight !== document.getElementById('userWeight').value){
            let weightList = window.localStorage.getItem('weightList');
            if(weightList === ""){
                weightList = `${document.getElementById('userWeight').value}`;
            } else {
                weightList = weightList + `,${document.getElementById('userWeight').value}`;
            }
            window.localStorage.setItem('weightList',weightList);
        }
        
        //Using Harris-Benedict Formula For BMI Calculation
        let BMR = 0;
        if(document.getElementById('userGender').value === 'Female'){
            BMR = 66.5 + (13.8*(document.getElementById('userWeight').value/2.20462)) + (5*(document.getElementById('userHeight').value/2.54)) - (6.8*document.getElementById('userAge').value); 
        } else {
            BMR = 655.1 + (9.6*(document.getElementById('userWeight').value/2.20462)) + (1.9*(document.getElementById('userHeight').value/2.54)) - (4.7*document.getElementById('userAge').value); 
        }

        let calories = 0
        if(document.getElementById('activity').value === 'light'){
            calories = BMR*1.2;
        } else if(document.getElementById('activity').value === 'moderate'){
            calories = BMR*1.3;
        } else if(document.getElementById('activity').value === 'very'){
            calories = BMR*1.4;
        }
        
        if(document.getElementById('userTargetWeight').value < document.getElementById('userWeight').value){
            calories = calories*0.9;
        } else if(document.getElementById('userTargetWeight').value > document.getElementById('userWeight').value) {
            calories = calories+500;
        }

        window.localStorage.setItem('calGoal',`${Math.round(calories)}`);


        let bmi = (window.localStorage.getItem('profileWeight')/(window.localStorage.getItem('profileHeight')*window.localStorage.getItem('profileHeight')))*703;
        bmi = Math.round(bmi)
        window.localStorage.setItem('profileBMI',bmi);
        document.getElementById('userBMI').value = bmi;


        //Water Intake Calculations
        //Let x = weight * 0.5
        //Water Intake = x + ((exercise minutes/30) * 12)
        let w = localStorage.getItem('profileWeight') * 0.5;
        let waterIntake = 0;
        if(localStorage.getItem('activityLevel') == "light"){
            waterIntake = w + ((0.5)*12);
        } else if(localStorage.getItem('activityLevel') == "moderate") {
            waterIntake = w + ((1)*12);
        } else {
            waterIntake = w + ((2)*12);
        }
        localStorage.setItem('waterGoal', waterIntake);

    }

    
}

function loadProfile() {
    location.href='profile.html';
}