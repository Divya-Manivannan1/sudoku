import { verifyIfBoardIsSolved } from "./verifyIfBoardIsSolved";
import { congratulations } from "./congratulations";
import { findPossibleInputs } from "./findPossibleInputs";
import { highlightReleventButtons } from "./highlightReleventButtons";
import { highlightReleventTiles } from "./highlightReleventTiles";
import { Board } from "../data/types";

export const handleButtonClickEvent = (
  event: Event,
  cell: HTMLElement,
  answer: string[],
  boardObj: Board
) => {
  const button = event.target as HTMLElement;
  //returns if the cell has any content which is not wrong. i.e right answer or question
  if (cell.textContent != "" && !cell.classList.contains("wrong")) return;

  //return if button is disabled
  if (button.classList.contains("disabled")) return;

  //button value is added to the cell
  cell.textContent = button.textContent as string;

  //getting the cell index and comparing it with the answer
  const [row, col] = cell.id.split(":");
  if (answer[+row - 1][+col - 1] == button.textContent) {
    cell.classList.remove("wrong");
    //if an answer entered is correct, testing if the board is solved and displaying the congrats msg
    if (verifyIfBoardIsSolved(cell.parentElement as HTMLElement)) {
      congratulations(
        cell.parentElement as HTMLElement,
        button.parentElement as HTMLElement
      );
      return;
    }
    //disabling all the buttons and highlighting the relevent cells if the right answer is entered
    for (const num of Array.from(
      button.parentElement?.children as HTMLCollection
    )) {
      num.classList.add("disabled");
    }
    if (boardObj.areRelatedCellsHighlighted)
      highlightReleventTiles(cell, boardObj);
  } else cell.classList.add("wrong");
};
