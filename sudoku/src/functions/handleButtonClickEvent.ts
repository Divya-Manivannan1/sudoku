import {verifyIfBoardIsSolved} from "./verifyIfBoardIsSolved";
import { congratulations } from "./congratulations";


export const handleButtonClickEvent = (
  event: Event,
  cell: HTMLElement,
  answer: string[]
) => {
  const button = event.target as HTMLElement;
  if (!button.classList.contains("disabled")) {
    cell.textContent = button.textContent as string;
    const [row, col] = cell.id.split(":");
    if (answer[+row - 1][+col - 1] == button.textContent) {
      cell.classList.remove("wrong");
      if(verifyIfBoardIsSolved(cell.parentElement as HTMLElement)){
       congratulations(cell.parentElement as HTMLElement);
      }
    } else cell.classList.add("wrong");
  }
};
