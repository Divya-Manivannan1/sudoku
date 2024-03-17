export const displayPuzzle = (
  board: HTMLElement,
  puzzle: string[],
  boardWidth: number
): void => {
  const cells = board.childNodes;
  let i: number = 0,
    j: number = 0;
  for (const cell of cells) {
    let textNode = document.createTextNode("Hello World");
    puzzle[i][j] != `-` ? (textNode.data = puzzle[i][j]) : (textNode.data = "");
    cell.appendChild(textNode);
    j++;
    if (j == boardWidth) {
      i++;
      j = 0;
    }
  }
  console.log(cells);
};
