import { findPossibleInputs } from "./findPossibleInputs";
import { highlightReleventButtons } from "./highlightReleventButtons";

export const handleBoardClickEvent = (
  event: Event,
  rowWidth: number,
  columnWidth: number
): HTMLElement => {
  const cell = event.target as HTMLElement;
  const board = event.currentTarget as HTMLElement;
  const buttons = board.nextElementSibling?.nextElementSibling as HTMLElement;
  const [row, col] = cell.id.split(":");
  const blockCol: number = Math.ceil(+col / rowWidth);
  const blockRow: number = Math.ceil(+row / columnWidth);

  //highlights the relevent row, col and block
  for (const tile of board.children) {
    const [i, j] = tile.id.split(":");
    tile.classList.remove("secondaryHighlight", "mainHighlight");
    if (i == row && j == col) {
      tile.classList.add("mainHighlight");
    } else if (
      i == row ||
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

  //checking if the cell contains the puzzle question
  if (!cell.classList.contains("question")) {
    //find the posible inputs for the cell
    const possibleValues = findPossibleInputs(
      board.children,
      row,
      col,
      rowWidth,
      columnWidth
    );

    highlightReleventButtons(buttons.children, possibleValues);
  }

  return cell;
};
