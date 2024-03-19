export function displayButtons(buttons: HTMLElement, amountOfButtons: number) {
  for (let i = 1; i <= amountOfButtons; i++) {
    const button = document.createElement("div");
    button.id = button.innerText = `${i}`;
    button.classList.add("game__cell--button", "game__cell", "disabled");
    buttons.style.width = `${amountOfButtons * 4 + 1}rem`;
    buttons.appendChild(button);
  }
}
