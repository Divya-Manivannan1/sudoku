import { time } from "../data/timerObj";

export const displayTimer = (
  el: HTMLElement,
  isTimerEnabled: boolean,
  isBoardSolved: boolean
) => {
  const timer = document.createElement("div");
  timer.innerHTML = `<time>${time.asString()}</time>`;
  const timerClock = setInterval(() => {
    time.incrementTime();
    timer.innerHTML = `<time>${time.asString()}</time>`;
  }, 1000);
  if (isTimerEnabled || isBoardSolved) {
    el.appendChild(timer);
  }
  if (isBoardSolved) clearInterval(timerClock);
};
