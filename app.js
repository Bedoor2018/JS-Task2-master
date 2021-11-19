//Variables
let time=0;
let timerId=0;
let timerOut=true;
//Elements in a variable
const start=document.getElementById("start");
const reset=document.getElementById("reset");
const timer=document.getElementById("time-display");
//use this function to start the timer
function initClock(){
    timerOut=false;
    timerId=setInterval(()=>{
        time++;
        timerCount();
    },1000)
};
//this function update the timer values
function timerCount(){
const min=Math.floor(time/60);
const sec=time % 60;
if(sec<10){
    timer.innerHTML=min+":0"+sec;
}else{
    timer.innerHTML=min+":"+sec;
}
};
// stop and clear the timer
function stopClock(){
clearInterval(timerId);
};
reset.addEventListener("click",function(){
    stopClock();
    timerOut=true;
    time=0;
    timerCount();
});

// Start the timer
start.addEventListener("click",function(){
initClock();
});
