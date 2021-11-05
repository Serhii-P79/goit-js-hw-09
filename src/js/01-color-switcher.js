import '../sass/main.scss';
import { getRandomHexColor } from './function/function.js';

// console.log(getRandomHexColor());
const ref = {
  body: document.body,
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerChangeColorBackgroundId = null;
ref.stopBtn.setAttribute('disabled', 'disabled');

ref.startBtn.addEventListener('click', () => {
  ref.startBtn.setAttribute('disabled', 'disabled');
  ref.stopBtn.removeAttribute('disabled');

  ref.body.style.backgroundColor = getRandomHexColor();

  timerChangeColorBackgroundId = setInterval(() => {
    ref.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

ref.stopBtn.addEventListener('click', () => {
  ref.stopBtn.setAttribute('disabled', 'disabled');
  ref.startBtn.removeAttribute('disabled');

  clearInterval(timerChangeColorBackgroundId);
});
