export const congratulations = (board: HTMLElement): void => {
  const congrats = board.previousElementSibling as HTMLElement;
  const buttons = board.nextElementSibling?.nextElementSibling as HTMLElement;
  /*  if(myTimer.length > 0){clearInterval(myTimer);
  congrats.getElementsByClassName("timer") = time.asString;} */
  congrats.style.display = "flex";
  buttons.style.display = "none";
  for (const cell of Array.from(board.children)) {
    cell.classList.remove("mainHighlight");
    cell.classList.remove("secondaryHighlight");
  }
};
