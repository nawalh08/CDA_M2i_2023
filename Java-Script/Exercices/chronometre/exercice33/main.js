// Minuteur
const departMinutes = 10

let temps = departMinutes * 60;
const timerElement = document.getElementById("timer");
let monTab = [];


function diminuerTemps() {
    let minutes = parseInt(temps / 60 ,10)
    let secondes = parseInt(temps % 60 ,10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    timerElement.innerText= `${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps-1;

}

setInterval(diminuerTemps, 1000)

// Chronomètre 
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
   
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
  
});

function displayTimer() {
  milliseconds += 10;
  seconds = milliseconds == 1000 ? (seconds + 1) % 60 : seconds;
  minutes = seconds == 0 && milliseconds == 0 ? (minutes + 1) % 60 : minutes;
  hours = minutes == 0 && seconds == 0 && milliseconds == 0 ? hours + 1 : hours;
  milliseconds = milliseconds == 1000 ? 0 : milliseconds;

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  let ms = String(milliseconds).padStart(3, "0");

  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000";
});