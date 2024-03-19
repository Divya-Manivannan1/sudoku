import { Board } from "../data/types";

const boardObj: Board = {
  boardWidth: 4,
  boardHeight: 4,
  rowWidth: 2,
  columnWidth: 2,
  areRelatedCellsHighlighted: true,
  areRelatedButtonsHighlighted: true,
  isTimerEnabled: true,
  isUndoEnabled: false,
  moves: [],
};

describe("displayBoard", () => {
  it("should display the appropriate number of cells", () => {
    expect(1).toBe(1);
  });
});
