const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const getPadTime = (time) => time.toString().padStart(2, '0');

const createTimerAnimator = () => {
  let intervalId;
  return (secondsInNumber) => {
    let secondsLeft = secondsInNumber;

    intervalId = setInterval(() => {
      secondsLeft -= 1;
      if (secondsLeft <= 0) {
        clearInterval(intervalId);
        timerEl.textContent = '00:00:00';
        return;
      }

      const hours = getPadTime(Math.floor(secondsLeft / 3600));
      const minutes = getPadTime(Math.floor((secondsLeft % 3600) / 60));
      const seconds = getPadTime(secondsLeft % 60);

      timerEl.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const secondsInNumber = Number(inputEl.value);

  animateTimer(secondsInNumber);

  inputEl.value = '';
});
