import { Board } from "../data/types";

export function displayBoard(board: HTMLElement, boardObj: Board) {
  const { boardWidth, rowWidth, columnWidth } = boardObj;
  for (let row = 1; row <= boardWidth; row++) {
    for (let col = 1; col <= boardWidth; col++) {
      const cell = document.createElement("div");
      cell.id = `${row}:${col}`;
      cell.classList.add("game__cell--tile", "game__cell");
      if (col % columnWidth == 1) {
        cell.classList.add("game__cell--left-border");
      } else if (col % columnWidth == 0) {
        cell.classList.add("game__cell--right-border");
      }
      if (row % rowWidth == 1) {
        cell.classList.add("game__cell--top-border");
      } else if (row % rowWidth == 0) {
        cell.classList.add("game__cell--bottom-border");
      }
      board.appendChild(cell);
    }
  }
  board.classList.add(`width${boardObj.boardWidth}`);
}
