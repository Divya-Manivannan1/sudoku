import { findPossibleInputs } from "./findPossibleInputs";
import { highlightReleventButtons } from "./highlightReleventButtons";
import { highlightReleventTiles } from "./highlightReleventTiles";

export const handleBoardClickEvent = (
  event: Event,
  rowWidth: number,
  columnWidth: number
): HTMLElement => {
  const cell = event.target as HTMLElement;
  const board = event.currentTarget as HTMLElement;
  const buttons = board.nextElementSibling?.nextElementSibling as HTMLElement;
  const [row, col] = cell.id.split(":");

  //highlights the relevent row, col and block
  highlightReleventTiles(board.children, cell, rowWidth, columnWidth);

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
