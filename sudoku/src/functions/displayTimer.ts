import { time } from "../data/timerObj";

export const displayTimer = (
  features: HTMLElement,
  isTimerEnabled: boolean
) => {
  const timer = document.createElement("div");

  if (isTimerEnabled) {
    timer.innerHTML = `<time>${time.asString()}</time>`;
    features.appendChild(timer);
    setInterval(() => {
      time.incrementTime();
      timer.innerHTML = `<time>${time.asString()}</time>`;
    }, 1000);
  }
};
