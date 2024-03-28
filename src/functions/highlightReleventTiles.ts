import { Board } from "../data/types";

export const highlightReleventTiles = (
  cell: HTMLElement,
  boardObj: Board
): void => {
  const tiles = cell.parentElement?.children as HTMLCollection;
  const { rowWidth, columnWidth } = boardObj;
  const [row, col] = cell.id.split(":");
  const blockCol: number = Math.ceil(+col / rowWidth);
  const blockRow: number = Math.ceil(+row / columnWidth);

  for (const tile of Array.from(tiles)) {
    const [i, j] = tile.id.split(":");
    tile.classList.remove("secondaryHighlight", "mainHighlight");
    if (
      j == col ||
      i == row ||
      (+i <= blockRow * rowWidth &&
        +i > (blockRow - 1) * rowWidth &&
        +j <= blockCol * columnWidth &&
        +j > (blockCol - 1) * columnWidth)
    ) {
      tile.classList.add("secondaryHighlight");
    } else if (!(cell.classList.contains("wrong") || cell.textContent == "")) {
      if (tile.textContent == cell.textContent)
        tile.classList.add("mainHighlight");
    }
  }
  cell.classList.add("mainHighlight");
  cell.classList.remove("secondaryHighlight");
};
