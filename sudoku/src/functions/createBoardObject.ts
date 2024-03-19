import { Board } from "../data/types";

export const createBoardObject = (): Board => {
  const url: string = document.URL;
  let bWidth: number = 0,
    bHeight: number = 0,
    rWidth: number = 0,
    cWidth: number = 0;
  let tempStrings: string[] = url.split("board-size=");
  console.table(tempStrings);
  switch (tempStrings[1][0]) {
    case "4":
      bWidth = bHeight = 4;
      rWidth = cWidth = 2;
      break;
    case "6":
      bWidth = bHeight = 6;
      rWidth = 2;
      cWidth = 3;
      break;
    case "9":
      bWidth = bHeight = 9;
      rWidth = cWidth = 3;
      break;
  }

  const boardObj: Board = {
    boardWidth: bWidth,
    boardHeight: bHeight,
    rowWidth: rWidth,
    columnWidth: cWidth,
    areRelatedCellsHighlighted: tempStrings[1].includes("highlight-cells"),
    areRelatedButtonsHighlighted: tempStrings[1].includes("highlight-buttons"),
    isTimerEnabled: tempStrings[1].includes("timer"),
    isUndoEnabled: false,
    moves: [],
  };

  return boardObj;
};
