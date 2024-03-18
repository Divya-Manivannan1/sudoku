type Move = {
  cell: string;
  value: string;
};

export type Board = {
  boardWidth: number;
  boardHeight: number;
  rowWidth: number;
  columnWidth: number;
  areRelatedCellsHighlighted: boolean;
  areRelatedButtonsHighlighted: boolean;
  isUndoEnabled: boolean;
  moves: Move[];
};
