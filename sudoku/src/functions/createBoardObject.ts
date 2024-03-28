import { Board } from "../data/types";

export const createBoardObject = (): Board => {
  const url: string = document.URL;
  let bWidth: 4 | 6 | 9 = 4,
    rWidth: 2 | 3 = 2,
    cWidth: 2 | 3 = 2;
  let tempStrings: string[] = url.split("board-size=");
  switch (tempStrings[1][0]) {
    case "6":
      bWidth = 6;
      cWidth = 3;
      break;
    case "9":
      bWidth = 9;
      rWidth = cWidth = 3;
      break;
  }

  const boardObj: Board = {
    boardWidth: bWidth,
    rowWidth: rWidth,
    columnWidth: cWidth,
    areRelatedCellsHighlighted: tempStrings[1].includes("highlight-cells"),
    areRelatedButtonsHighlighted: tempStrings[1].includes("highlight-buttons"),
    isTimerEnabled: tempStrings[1].includes("timer"),
  };

  return boardObj;
};
