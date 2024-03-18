export const verifyIfBoardIsSolved = (board: HTMLElement): boolean => {
  const cells: HTMLCollection = board.children;
  let isBoardSolved: boolean = true;
  for (const cell of cells) {
    if (cell.textContent == "" || cell.classList.contains("wrong"))
      isBoardSolved = false;
  }
  return isBoardSolved;
};
