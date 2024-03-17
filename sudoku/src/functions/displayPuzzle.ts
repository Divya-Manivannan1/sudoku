export const displayPuzzle = (
  board: HTMLElement,
  puzzle: string[],
  boardWidth: number
): void => {
  const cells = board.children;
  let i: number = 0,
    j: number = 0;
  for (const cell of cells) {
    if (puzzle[i][j] != `-`) {
      cell.textContent = puzzle[i][j];
      cell.classList.add("question")
    } else {
      cell.textContent = "";
    }
    j++;
    if (j == boardWidth) {
      i++;
      j = 0;
    }
  }
};
