export const congratulations = (board: HTMLElement): void => {
  const congrats = board.previousElementSibling as HTMLElement;
  const buttons = board.nextElementSibling?.nextElementSibling as HTMLElement;
  congrats.style.display = "flex";
  buttons.style.display = "none";
  for (const cell of board.children) {
    cell.classList.remove("mainHighlight");
    cell.classList.remove("secondaryHighlight");
  }
};
