import "./game-style.scss";

import { Board } from "./data/types";
import { displayButtons } from "./functions/displayButtons";
import { displayBoard } from "./functions/displayBoard";
import { displayPuzzle } from "./functions/displayPuzzle";
import { handleBoardClickEvent } from "./functions/handleBoardClickEvent";
import { handleButtonClickEvent } from "./functions/handleButtonClickEvent";
import { createBoardObject } from "./functions/createBoardObject";
import { displayTimer } from "./functions/displayTimer";
import { getPuzzle } from "./functions/getPuzzle";

//Seclecting the requred html elements
const buttons = document.querySelector<HTMLElement>(".game__buttons");
const board = document.querySelector<HTMLElement>(".game__board");
const features = document.querySelector<HTMLElement>(".game__feature");

//Null check
if (!buttons || !board || !features) {
  throw new Error("Problem with querry selector");
}

//Creating BoardObj based on the url.
const boardObj: Board = createBoardObject(document.URL);

//Dynamically grnerating the cells for the board and buttons
displayButtons(buttons, boardObj.columnWidth * boardObj.rowWidth);
displayBoard(board, boardObj);

//get a random puzzle from the stored data and display it.
const puzzle = getPuzzle(boardObj.boardWidth);
displayPuzzle(board, puzzle.question);

//start the timer, and if needed, display it running. Else display it at the congrats page
displayTimer(features, boardObj.isTimerEnabled, false);

//adding event listeners to the board and the buttons and using event deligation to find the exact cell
let cell: HTMLElement;
export const callOnBoardClick = (event: Event): HTMLElement =>
  (cell = handleBoardClickEvent(event, boardObj));
board.addEventListener("click", callOnBoardClick);
buttons.addEventListener("click", (e: Event) =>
  handleButtonClickEvent(e, cell, puzzle.answer, boardObj)
);
