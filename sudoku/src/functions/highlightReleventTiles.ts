import { Board } from "../data/types";

export const highlightReleventTiles = (
  tiles: HTMLCollection,
  cell: HTMLElement,
  boardObj: Board
): void => {
  const { rowWidth, columnWidth } = boardObj;
  const [row, col] = cell.id.split(":");
  const blockCol: number = Math.ceil(+col / rowWidth);
  const blockRow: number = Math.ceil(+row / columnWidth);
  for (const tile of tiles) {
    const [i, j] = tile.id.split(":");
    tile.classList.remove("secondaryHighlight", "mainHighlight");
    if (
      j == col ||
      (+i <= blockRow * rowWidth &&
        +i > (blockRow - 1) * rowWidth &&
        +j <= blockCol * columnWidth &&
        +j > (blockCol - 1) * columnWidth)
    ) {
      tile.classList.add("secondaryHighlight");
    } else if (tile.textContent == cell.textContent && tile.textContent != "") {
      tile.classList.add("mainHighlight");
    }
  }
};
