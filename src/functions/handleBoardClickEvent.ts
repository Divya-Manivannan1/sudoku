import { Board } from "../data/types";
import { findPossibleInputs } from "./findPossibleInputs";
import { highlightReleventButtons } from "./highlightReleventButtons";
import { highlightReleventTiles } from "./highlightReleventTiles";

export const handleBoardClickEvent = (
  event: Event,
  boardObj: Board
): HTMLElement => {
  const { areRelatedCellsHighlighted } = boardObj;
  const cell = event.target as HTMLElement;
  const board = event.currentTarget as HTMLElement;
  const buttons = board.nextElementSibling?.nextElementSibling as HTMLElement;

  //highlights the relevent row, col and block
  if (areRelatedCellsHighlighted) {
    highlightReleventTiles(cell, boardObj);
  } else {
    for (const tile of Array.from(board.children))
      tile.classList.remove("mainHighlight");
    cell.classList.add("mainHighlight");
  }
  //finding all possible values
  let possibleValues: string[] = findPossibleInputs(
    board.children,
    cell,
    boardObj
  );

  //disable unsuitable buttons
  highlightReleventButtons(buttons.children, possibleValues);

  return cell;
};
