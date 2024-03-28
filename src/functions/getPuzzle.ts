import { puzzle4, puzzle6, puzzle9 } from "../data/puzzles";
import { Puzzle } from "../data/types";

export const getPuzzle = (size: 4 | 6 | 9): Puzzle => {
  let puzzle: Puzzle;
  switch (size) {
    case 4:
      puzzle = puzzle4[Math.floor(Math.random() * puzzle4.length)];
      break;
    case 6:
      puzzle = puzzle6[Math.floor(Math.random() * puzzle6.length)];
      break;
    case 9:
      puzzle = puzzle9[Math.floor(Math.random() * puzzle9.length)];
      break;
  }
  return puzzle;
};
