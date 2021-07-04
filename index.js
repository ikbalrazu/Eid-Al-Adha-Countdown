
const eiduladha = "20 Jul 2021";

function countdown(){
    const eidday = new Date(eiduladha);
    const currentdate = new Date();
    const totaltime = (eidday- currentdate)/1000;
    const days = Math.floor(totaltime/3600/24);
    const hours = Math.floor((totaltime/3600) % 24);
    const min = Math.floor(totaltime/60) % 60;
    const sec = Math.floor(totaltime) % 60;
    const daydiv = document.getElementById("days").innerHTML=days;
    const hoursdiv = document.getElementById("hours").innerHTML=hours;
    const mindiv = document.getElementById("minutes").innerHTML=min;
    const secdiv = document.getElementById("seconds").innerHTML=sec;
    //console.log(eidday);
    //console.log(currentdate);
    //console.log(totaltime); 
    console.log(days,hours,minutes,sec);
}

countdown();
setInterval(countdown, 1000);