import { displayTimer } from "./displayTimer";

export const congratulations = (board: HTMLElement): void => {
  const congrats = board.previousElementSibling as HTMLElement;
  const fearutes = board.nextElementSibling as HTMLElement;
  const buttons = board.nextElementSibling?.nextElementSibling as HTMLElement;
  /*  if(myTimer.length > 0){clearInterval(myTimer);
  congrats.getElementsByClassName("timer") = time.asString;} */
  congrats.style.display = "flex";
  displayTimer(congrats, true, true);
  congrats.innerHTML += `<a href="index.html" class="congratulations__button">
          Back to homepage</a
        >`;
  fearutes.style.display = "none";
  buttons.style.display = "none";
  for (const cell of Array.from(board.children)) {
    cell.classList.remove("mainHighlight");
    cell.classList.remove("secondaryHighlight");
  }
};
