export const handleBoardClickEvent = (
  event: Event,
  rowWidth: number,
  columnWidth: number
): void => {
  const cell = event.target as HTMLElement;
  const board = event.currentTarget as HTMLElement;
  const [row, col] = cell.id.split(":");
  const blockCol: number = Math.ceil(+col / rowWidth);
  const blockRow: number = Math.ceil(+row / columnWidth);
  console.log(blockRow);
  for (const tile of board.children) {
    const [i, j] = tile.id.split(":");
    tile.classList.remove("secondaryHighlight", "mainHighlight");
    if (i == row && j == col) {
      tile.classList.add("mainHighlight");
    } else if (i == row || j == col) {
      tile.classList.add("secondaryHighlight");
    } else if (
      +i < blockRow * rowWidth &&
      +i > (blockRow - 1) * rowWidth &&
      +j < blockCol * columnWidth &&
      +j > (blockCol - 1) * columnWidth
    ) {
      tile.classList.add("secondaryHighlight");
    }
  }
};
