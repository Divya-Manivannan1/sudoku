import { Board } from "../data/types";

export const createBoardObject = (url: string): Board => {
  const searchParams = new URLSearchParams(url);
  let bWidth: 4 | 6 | 9 = 4,
    rWidth: 2 | 3 = 2,
    cWidth: 2 | 3 = 2;

  switch (searchParams.get("board-size")) {
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
    areRelatedCellsHighlighted: searchParams.has("highlight-cells"),
    areRelatedButtonsHighlighted: searchParams.has("highlight-buttons"),
    isTimerEnabled: searchParams.has("timer"),
  };

  return boardObj;
};
