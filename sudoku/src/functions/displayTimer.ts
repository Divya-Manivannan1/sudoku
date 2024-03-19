const incrementTime =()=>{

}

export const displayTimer = (
  features: HTMLElement,
  isTimerEnabled: boolean
) => {
  if (isTimerEnabled) {
    const timer = document.createElement("div");
      setInterval(incrementTime, 1000);

    features.appendChild(timer);
  }
};
