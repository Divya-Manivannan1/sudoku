import { Board } from "../data/types";
import { findPossibleInputs } from "./findPossibleInputs";
import { highlightReleventButtons } from "./highlightReleventButtons";
import { highlightReleventTiles } from "./highlightReleventTiles";

export const handleBoardClickEvent = (
  event: Event,
  boardObj: Board
): HTMLElement => {
  const { areRelatedCellsHighlighted, areRelatedButtonsHighlighted } = boardObj;
  const cell = event.target as HTMLElement;
  const board = event.currentTarget as HTMLElement;
  const buttons = board.nextElementSibling?.nextElementSibling as HTMLElement;

  //highlights the relevent row, col and block
  if (areRelatedCellsHighlighted)
    highlightReleventTiles(board.children, cell, boardObj);

  //highlight the selected tile
  cell.classList.add("mainHighlight");
  cell.classList.remove("secondaryHighlight");

  //checking if the cell contains the puzzle question
  if (areRelatedButtonsHighlighted) {
    //find the posible inputs for the cell
    const possibleValues = findPossibleInputs(board.children, cell);

    highlightReleventButtons(buttons.children, possibleValues);
  }

  return cell;
};
