import { verifyIfBoardIsSolved } from "./verifyIfBoardIsSolved";
import { congratulations } from "./congratulations";
import { findPossibleInputs } from "./findPossibleInputs";
import { highlightReleventButtons } from "./highlightReleventButtons";

export const handleButtonClickEvent = (
  event: Event,
  cell: HTMLElement,
  answer: string[]
) => {
  const button = event.target as HTMLElement;
  if (cell.textContent != "" && !cell.classList.contains("wrong")) return;
  if (!button.classList.contains("disabled")) {
    cell.textContent = button.textContent as string;
    const [row, col] = cell.id.split(":");
    if (answer[+row - 1][+col - 1] == button.textContent) {
      cell.classList.remove("wrong");
      if (verifyIfBoardIsSolved(cell.parentElement as HTMLElement)) {
        congratulations(cell.parentElement as HTMLElement);
      }
    } else cell.classList.add("wrong");
  }

  //find the posible inputs for the cell
  const possibleValues = findPossibleInputs(
    cell.parentElement?.children as HTMLCollection,
    cell
  );
  highlightReleventButtons(
    cell.parentElement?.nextElementSibling?.nextElementSibling
      ?.children as HTMLCollection,
    possibleValues
  );
};
