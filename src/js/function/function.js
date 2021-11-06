export function getRandomHexColor() {
  let genColor = '';
  const regexp = /#[a-f0-9]{6}/gi;
  do {
    genColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } while (!regexp.test(genColor));
  return genColor;
}

export function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

export function dateOutput({ days, hours, minutes, seconds }, ref = {}) {
  days = addLeadingZero(days);
  hours = addLeadingZero(hours);
  minutes = addLeadingZero(minutes);
  seconds = addLeadingZero(seconds);

  ref.dataDays.innerHTML = days;
  ref.dataHours.innerHTML = hours;
  ref.dataMinutes.innerHTML = minutes;
  ref.dataSeconds.innerHTML = seconds;
}
