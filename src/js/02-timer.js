import '../sass/main.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './function/function.js';
import { dateOutput } from './function/function.js';

const ref = {
  datepickr: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

const options = {
  notify: {
    position: 'center-center',
    // fontSize: '18px',
    // width: '400px',
  },
  flatpickr: {
    locale: Russian,
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const todayNow = new Date();
      if (selectedDates[0].getTime() <= todayNow.getTime()) {
        Notify.failure('Выберите дату больше текущей', options.notify);
        selectedDates[0] = todayNow;
      } else {
        countdownTimer.eventDate = selectedDates[0].getTime();
        ref.buttonStart.removeAttribute('disabled');
      }
    },
  },
};

const countdownTimer = {
  eventDate: null,
  timerId: null,
  start() {
    const todayNow = Date.now();
    dateOutput(convertMs(this.eventDate - todayNow), ref);
    this.timerId = setInterval(() => {
      const todayNow = new Date();
      let looseTime = this.eventDate - todayNow;
      if (looseTime <= 1) {
        this.stop();
        Notify.success('Время пришло', options.notify);
        ref.datepickr.removeAttribute('disabled');
      } else {
        dateOutput(convertMs(looseTime), ref);
      }
    }, 1000);
  },
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  },
};

flatpickr(ref.datepickr, options.flatpickr);

ref.buttonStart.setAttribute('disabled', 'disabled');

ref.buttonStart.addEventListener('click', () => {
  ref.buttonStart.setAttribute('disabled', 'disabled');
  countdownTimer.start();
  ref.datepickr.setAttribute('disabled', 'disabled');
});
