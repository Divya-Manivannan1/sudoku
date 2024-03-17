import "./style.scss";

import { puzzle } from "./data/puzzles";

import { displayButtons } from "./functions/displayButtons";
import { displayCells } from "./functions/displayBoard";
import { displayPuzzle } from "./functions/displayPuzzle";
import { handleBoardClickEvent } from "./functions/handleBoardClickEvent";

const buttons = document.querySelector<HTMLElement>(".game__buttons");
const board = document.querySelector<HTMLElement>(".game__board");

if (!buttons || !board) {
  throw new Error("Problem with querry selector");
}

displayButtons(buttons, 4);
displayCells(board, 4, 4, 2, 2);
displayPuzzle(board, puzzle, 4);

board.addEventListener("click", (e)=>handleBoardClickEvent(e,2,2));