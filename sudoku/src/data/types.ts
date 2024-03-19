type Move = {
  cell: string;
  value: string;
};

export type Puzzle = {
  question: string[];
  answer: string[];
};

export type Board = {
  boardWidth: 4|6|9;
  rowWidth: 2|3;
  columnWidth: 2|3;
  areRelatedCellsHighlighted: boolean;
  areRelatedButtonsHighlighted: boolean;
  isTimerEnabled: boolean;
  isUndoEnabled: boolean;
  moves: Move[];
};

export type Time = {
  minutes: number;
  seconds: number;
  asString: Function;
  incrementTime: Function;
};
