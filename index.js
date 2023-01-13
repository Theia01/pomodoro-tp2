let seconds = 0;
let minutes = 25;
const appendseconds = document.getElementById("seconds");
const appendminutes = document.getElementById("minutes");
let running = false;

const btnStart = document.getElementById("button-start");
const btnStop = document.getElementById("button-stop");
const btnReset = document.getElementById("button-reset");

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
  clearInterval(Interval);
  running = false;
  setSessionTime("00", "05")
  btnStart.innerHTML = "Start";
  btnReset.innerHTML = "Reset";
}

function breakSession() {
  clearInterval(Interval);
  running = false;
  setSessionTime("00", "01")
  btnStart.innerHTML = "Start";
  btnReset.innerHTML = "Skip";
}


function startTimer() {
  seconds--;
  if (seconds <= 9) appendseconds.innerHTML = "0" + seconds;

  if (seconds > 9) appendseconds.innerHTML = seconds;
  
  if (seconds < 0) {
    minutes--;
    seconds = 59;
    appendseconds.innerHTML = seconds;
  }
  
  if (minutes <= 9) appendminutes.innerHTML = "0" +  minutes;
  
  if (minutes > 9) appendminutes.innerHTML = minutes;
  
  if(minutes <= 0 && seconds <= 0) {
    audioBell.play()
    btnReset.innerHTML == "Skip" ? reset() : breakSession();
  }
}

function setSessionTime(minutes, seconds) {
  appendminutes.innerHTML = minutes;
  appendseconds.innerHTML = seconds;
  minutes = parseInt(minutes);
  seconds = parseInt(seconds);
}

window.addEventListener('load',function(){
  btnStart.addEventListener("click", start);
  btnReset.addEventListener("click", reset);
});