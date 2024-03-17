export const findPossibleInputs = (
  tiles: HTMLCollection,
  row: string,
  col: string,
  rowWidth: number,
  columnWidth: number
): string[] => {

  let possibleValues: string[] = [];
  const blockCol: number = Math.ceil(+col / rowWidth);
  const blockRow: number = Math.ceil(+row / columnWidth);

  for (let n: number = 1; n <= rowWidth * columnWidth; n++) {
    possibleValues.push(`${n}`);
  }

  for (const tile of tiles) {
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
