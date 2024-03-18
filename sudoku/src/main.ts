import "./style.scss";

import { answer, puzzle } from "./data/puzzles";
import { Board } from "./data/types";

import { displayButtons } from "./functions/displayButtons";
import { displayCells } from "./functions/displayBoard";
import { displayPuzzle } from "./functions/displayPuzzle";
import { handleBoardClickEvent } from "./functions/handleBoardClickEvent";
import { handleButtonClickEvent } from "./functions/handleButtonClickEvent";

const buttons = document.querySelector<HTMLElement>(".game__buttons");
const board = document.querySelector<HTMLElement>(".game__board");

if (!buttons || !board) {
  throw new Error("Problem with querry selector");
}

export const boardObj: Board = {
  boardWidth: 4,
  boardHeight: 4,
  rowWidth: 2,
  columnWidth: 2,
  areRelatedCellsHighlighted: true,
  areRelatedButtonsHighlighted: true,
  isUndoEnabled: false,
  moves: [],
};

displayButtons(buttons, boardObj.columnWidth * boardObj.rowWidth);
displayCells(board, boardObj);
displayPuzzle(board, puzzle, boardObj.boardWidth);

let cell: HTMLElement;
board.addEventListener(
  "click",
  (e): HTMLElement => (cell = handleBoardClickEvent(e, boardObj))
);
buttons.addEventListener("click", (e: Event) =>
  handleButtonClickEvent(e, cell, answer)
);
