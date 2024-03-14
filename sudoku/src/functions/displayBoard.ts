export function displayCells(
  board: HTMLElement,
  amountOfRows: number,
  amountOfColumns: number,
  rowLineAt: number,
  columnLineAt: number
) {
  for (let row = 1; row <= amountOfRows; row++) {
    for (let col = 1; col <= amountOfColumns; col++) {
      let cell = document.createElement("div");
      cell.id = `${row}:${col}`;
      cell.classList.add("game__cell--tile", "game__cell");
      if (col % columnLineAt == 1) {
        cell.classList.add("game__cell--left-border");
      } else if (col % columnLineAt == 0) {
        cell.classList.add("game__cell--right-border");
      }
      if (row % rowLineAt == 1) {
        cell.classList.add("game__cell--top-border");
      } else if (row % rowLineAt == 0) {
        cell.classList.add("game__cell--bottom-border");
      }
      board.style.width = `${amountOfColumns * 4 + 1}rem`;
      board.style.height = `${amountOfRows * 4 + 1}rem`;
      board.appendChild(cell);
    }
  }
}
