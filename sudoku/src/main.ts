import "./style.scss";

import { answer, puzzle } from "./data/puzzles";
import { Board } from "./data/types";

import { displayButtons } from "./functions/displayButtons";
import { displayCells } from "./functions/displayBoard";
import { displayPuzzle } from "./functions/displayPuzzle";
import { handleBoardClickEvent } from "./functions/handleBoardClickEvent";
import { handleButtonClickEvent } from "./functions/handleButtonClickEvent";
import { createBoardObject } from "./functions/createBoardObject";

const buttons = document.querySelector<HTMLElement>(".game__buttons");
const board = document.querySelector<HTMLElement>(".game__board");

if (!buttons || !board) {
  throw new Error("Problem with querry selector");
}

const boardObj:Board = createBoardObject();
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
