import '../sass/main.scss';
import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './function/function.js';

console.log(Notiflix);
console.log(flatpickr);

console.log(convertMs);

const options = {
  locale: Russian,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const ref = {
  datepickr: document.querySelector('#datetime-picker'),
};

flatpickr(ref.datepickr, options);
