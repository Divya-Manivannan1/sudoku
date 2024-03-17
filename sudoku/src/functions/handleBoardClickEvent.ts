export const handleBoardClickEvent = (
  event: Event,
  rowWidth: number,
  columnWidth: number
): void => {
  const cell = event.target as HTMLElement;
  const board = event.currentTarget as HTMLElement;
  const buttons = board.nextElementSibling?.nextElementSibling as HTMLElement;
  const [row, col] = cell.id.split(":");
  const blockCol: number = Math.ceil(+col / rowWidth);
  const blockRow: number = Math.ceil(+row / columnWidth);

  //highlights the relevent row, col and block
  for (const tile of board.children) {
    const [i, j] = tile.id.split(":");
    tile.classList.remove("secondaryHighlight", "mainHighlight");
    if (i == row && j == col) {
      tile.classList.add("mainHighlight");
    } else if (i == row || j == col) {
      tile.classList.add("secondaryHighlight");
    } else if (
      +i < blockRow * rowWidth &&
      +i > (blockRow - 1) * rowWidth &&
      +j < blockCol * columnWidth &&
      +j > (blockCol - 1) * columnWidth
    ) {
      tile.classList.add("secondaryHighlight");
    }
  }

  //find the posible inputs for the cell
  let possibleValues: string[] = [];
  for (let n: number = 1; n <= rowWidth * columnWidth; n++) {
    possibleValues.push(`${n}`);
  }

  for (const tile of board.children) {
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

  //disabling all the buttons and displaying the relevent buttons
  for (const button of buttons.children) {
    possibleValues.includes(button.textContent as string)
      ? button.classList.remove("disabled")
      : button.classList.add("disabled");
  }
};
