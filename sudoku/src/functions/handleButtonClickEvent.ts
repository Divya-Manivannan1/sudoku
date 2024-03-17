export const handleButtonClickEvent = (
  event: Event,
  cell: HTMLElement,
  answer: string[]
) => {
  const button = event.target as HTMLElement;
  if (!button.classList.contains("disabled")) {
    cell.textContent = button.textContent as string;
    const [row, col] = cell.id.split(":");
    answer[+row - 1][+col - 1] == button.textContent
      ? cell.classList.remove("wrong")
      : cell.classList.add("wrong");
  }
};
