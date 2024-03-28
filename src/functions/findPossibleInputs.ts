import { Board } from "../data/types";

export const findPossibleInputs = (
  tiles: HTMLCollection,
  cell: HTMLElement,
  boardObj: Board
): string[] => {
  let possibleValues: string[] = [];
  const [row, col] = cell.id.split(":");
  const { rowWidth, columnWidth, areRelatedButtonsHighlighted } = boardObj;
  const blockCol: number = Math.ceil(+col / rowWidth);
  const blockRow: number = Math.ceil(+row / columnWidth);

  //all the buttons are disabled if the cell contains a question or correct answer
  if (cell.classList.contains("question")) return possibleValues;
  if (cell.textContent != "" && !cell.classList.contains("wrong"))
    return possibleValues;

  //all the digits are added as possiblile valiues
  for (let n: number = 1; n <= rowWidth * columnWidth; n++) {
    possibleValues.push(`${n}`);
  }

  //if user doesnt want to highlight: all values are returned
  if (!areRelatedButtonsHighlighted) return possibleValues;

  //all the cells and checked and some digits are eleminated as possible values.
  for (const tile of Array.from(tiles)) {
    let value: string = tile.textContent as string;
    if (value != "" && possibleValues.includes(value)) {
      const [i, j] = tile.id.split(":");
      if (
        i == row ||
        j == col ||
        (+i < blockRow * rowWidth &&
          +i > (blockRow - 1) * rowWidth &&
          +j < blockCol * columnWidth &&
          +j > (blockCol - 1) * columnWidth)
      ) {
        possibleValues.splice(possibleValues.indexOf(value), 1);
      }
    }
  }

  return possibleValues;
};
