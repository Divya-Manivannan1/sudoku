export const displayPuzzle = (board: HTMLElement, puzzle: string[]): void => {
  const cells = board.children;
  let i: number = 0,
    j: number = 0;
  for (const cell of Array.from(cells)) {
    if (puzzle[i][j] != "-") {
      cell.textContent = puzzle[i][j];
      cell.classList.add("question");
    } else {
      cell.textContent = "";
    }
    j++;
    if (j == puzzle[i].length) {
      i++;
      j = 0;
    }
  }
};
