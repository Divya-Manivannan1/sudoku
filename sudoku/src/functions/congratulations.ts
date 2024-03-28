import { callOnBoardClick } from "../game";
import { displayTimer } from "./displayTimer";

export const congratulations = (
  board: HTMLElement,
  buttons: HTMLElement
): void => {
  const congrats = board.previousElementSibling as HTMLElement;
  const fearutes = board.nextElementSibling as HTMLElement;

  congrats.classList.remove("hide");
  displayTimer(congrats, true, true);
  congrats.innerHTML += `<a href="index.html" class="congratulations__button">
          Back to homepage</a
        >`;
  fearutes.classList.add("hide");
  buttons.classList.add("hide");
  for (const tile of Array.from(board.children)) {
    tile.classList.remove("secondaryHighlight", "mainHighlight");
  }
  board.removeEventListener("click", callOnBoardClick);
};
