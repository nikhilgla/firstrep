
var clock = document.getElementById('clock');
var greeting  = document.getElementById('greet');
const name = document.getElementById('chName');
var todayDate = document.getElementById('date');

name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);

function updateTime(){
var time =  new Date();
var hours = time.getHours();
var min = time.getMinutes();
var seconds = time.getSeconds();
var amPm = hours>12?'PM':'AM';
var hour_t  = hours%12||12; 
var today = time.toDateString();
clock.innerHTML = `${addZero(hour_t)}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)} ${amPm}`;
todayDate.innerHTML = `${today}`;
if (hours >=20){
    document.body.style.backgroundImage = "url('../images/p17.jpg')";
    clock.style.color = "white";
    greeting.style.color = "white";
    greeting.innerHTML = 'Good Night';
}
else if(hours>=16 && hours<20){
    document.body.style.backgroundImage = "url('../images/p17.jpg')";
    clock.style.color = "white";
    greeting.style.color = "white";
    greeting.innerHTML = 'Good Evening';
}
else if(hours>=12 && hours<16){
    document.body.style.backgroundImage = "url('../images/p17.jpg')";
    clock.style.color = "black";
    greeting.style.color = "white";
    greeting.innerHTML = 'Good Afternoon';
}
else{
    document.body.style.backgroundImage = "url('../images/p17.jpg')";
    clock.style.color = "Black";
    greeting.style.color = "#E60A2F";
    greeting.innerHTML = 'Good Morning';
}

setTimeout(updateTime,1000);
}
updateTime();
getName();

function addZero(n){
    return parseInt(n)<10?'0'+n:n;
};

function setName(e){
    if (e.type === 'keypress'){
        if (e.keyCode === 13){
            localStorage.setItem("name",e.target.innerHTML);
            name.blur();
        }
    }
    else{
        localStorage.setItem("name",e.target.innerHTML);
    }

};

function getName(){
    if (localStorage.getItem('name') === null){
        name.innerHTML = 'Enter Name';
    }
    else{
        name.innerHTML = localStorage.getItem('name');
    }
}