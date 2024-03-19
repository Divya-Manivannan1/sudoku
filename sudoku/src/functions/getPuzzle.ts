import { puzzle4, puzzle6, puzzle9 } from "../data/puzzles";
import { Puzzle } from "../data/types";

export const getPuzzle = (size: 4 | 6 | 9): Puzzle => {
  let puzzle: Puzzle;
  switch (size) {
    case 4:
      puzzle = puzzle4;
      break;
    case 6:
      puzzle = puzzle6;
      break;
    case 9:
      puzzle = puzzle9;
      break;
  }
  return puzzle;
};
