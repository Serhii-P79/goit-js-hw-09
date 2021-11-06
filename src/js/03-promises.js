import '../sass/main.scss';
import { startPromise } from './function/function.js';

const ref = {
  formStartPromise: document.querySelector('.form'),
};

ref.formStartPromise.addEventListener('submit', e => {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  startPromise({
    startDelay: Number(delay.value),
    stepDelay: Number(step.value),
    count: Number(amount.value),
  });
});
