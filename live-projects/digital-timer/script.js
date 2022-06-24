const hoursHtml = document.getElementById("hours");
const minutesHtml = document.getElementById("minutes");
const secondsHtml = document.getElementById("seconds");
const savedTimerHtml = document.querySelector(".saved-timer");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");
const btnSave = document.querySelector(".btn-save");

let second = 0;
let minute = 0;
let hour = 0;

let state = true;
let interval;

const addZero = function (value) {
  return value < 10 ? "0" + value : value;
};

const startTimer = function () {
  if (state) {
    state = false;
    btnStart.classList.add("btn-click");

    interval = setInterval(() => {
      second++;

      if (second == 60) {
        minute++;
        second = 0;
      }

      if (minute == 60) {
        hour++;
        minute = 0;
      }

      secondsHtml.innerHTML = addZero(second);
      minutesHtml.innerHTML = addZero(minute);
      hoursHtml.innerHTML = addZero(hour);
    }, 1000);
  }
};

const stopTimer = function () {
  btnStop.classList.add("btn-click");
  clearInterval(interval);
};

const resetTimer = function () {
  btnReset.classList.add("btn-click");
  clearInterval(interval);
  second = -1;
  minute = 0;
  hour = 0;
  state = !state;
  startTimer();
};

const saveTimer = function (
  _,
  hours = hoursHtml.innerHTML,
  minutes = minutesHtml.innerHTML,
  seconds = secondsHtml.innerHTML
) {
  btnSave.classList.add("btn-click");

  const newHtmlEl = document.createElement("div");
  newHtmlEl.innerHTML = `
  <span>${hours}</span> : <span>${minutes}</span> :
  <span>${seconds}</span>`;

  savedTimerHtml.appendChild(newHtmlEl);
};

btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);
btnSave.addEventListener("click", saveTimer);
