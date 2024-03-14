import "./style.scss";
import { displayButtons } from "./functions/displayButtons";
import { displayCells } from "./functions/displayBoard";

const buttons = document.querySelector<HTMLElement>(".game__buttons");
const board = document.querySelector<HTMLElement>(".game__board");

if (!buttons || !board) {
  throw new Error("Problem with querry selector");
}

displayButtons(buttons, 4);
displayCells(board, 4, 4, 2, 2);