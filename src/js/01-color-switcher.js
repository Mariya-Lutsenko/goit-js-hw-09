

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const DELAY = 1000;
let timerId = null;
stopBtn.setAttribute('disabled', false);

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn () {
    startBtn.setAttribute('disabled', false);
    stopBtn.setAttribute('disabled', true);
    timerId = setInterval(() =>{
document.body.style.backgroundColor = getRandomHexColor();
    }, DELAY);
};



function onClickStopBtn () {
    clearInterval(timerId);
    startBtn.setAttribute('disabled', true);
    stopBtn.setAttribute('disabled', false);
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

