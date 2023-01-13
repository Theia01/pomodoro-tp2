let seconds = 0;
let minutes = 25;
const appendseconds = document.getElementById("seconds");
const appendminutes = document.getElementById("minutes");
let running = false;
let workingSession = true;

const btnStart = document.getElementById("button-start");
const btnStop = document.getElementById("button-stop");
const btnReset = document.getElementById("button-reset");
const title = document.getElementById("title-time");
const selectTimeSession = document.getElementById("session-time");
const selectTimeBreak = document.getElementById("break-time");
let minutesResetSession = 25;
let minutesResetBreak = 5;

const audioBell = document.getElementById("bell"); 

var Interval;

function start() {
  clearInterval(Interval);
  if (!running) {
    running = true;
    Interval = setInterval(startTimer, 1000);
    btnStart.innerHTML = "Pause"
  } else {
    running = false;
    btnStart.innerHTML = "Start"
  }
}

function reset() {
  workingSession = true;
  setSessionTime(minutesResetSession);
  btnReset.innerHTML = "Reset";
  title.innerHTML = "Session"
}

function breakSession() {
  workingSession = false;
  setSessionTime(minutesResetBreak)
  btnReset.innerHTML = "Skip";
  title.innerHTML = "Break"
}


function startTimer() {
  seconds--;
  seconds <= 9 ? appendseconds.innerHTML = "0" + seconds : appendseconds.innerHTML = seconds;
  
  if (seconds < 0) {
    minutes--;
    seconds = 59;
    appendseconds.innerHTML = seconds;
  }
  
  minutes <= 9 ? appendminutes.innerHTML = "0" +  minutes : appendminutes.innerHTML = minutes;
  
  if(minutes <= 0 && seconds <= 0) {
    audioBell.play()
    workingSession ? breakSession() : reset();
  }
}

function setSessionTime(_minutes) {
  clearInterval(Interval);
  running = false;
  
  seconds = 0;
  appendseconds.innerHTML = "00";
  
  minutes = Math.abs(_minutes);
  minutes <= 9 ? appendminutes.innerHTML = "0" + minutes : appendminutes.innerHTML = minutes;

  btnStart.innerHTML = "Start";
}


window.addEventListener('load',function(){
  btnStart.addEventListener("click", start);
  btnReset.addEventListener("click", reset);
  selectTimeSession.addEventListener("input", ()=>{
    if(selectTimeSession.value != 0){
      minutesResetSession = selectTimeSession.value;
      if(workingSession) setSessionTime(minutesResetSession)
    }
  });
  selectTimeBreak.addEventListener("input", ()=>{
    if(selectTimeBreak.value != 0){
      minutesResetBreak = selectTimeBreak.value;
      if(!workingSession) setSessionTime(minutesResetBreak) 
    }
  });
});