export const highlightReleventButtons = (
  buttonCollection: HTMLCollection,
  possibleValues: string[]
) => {
  //disabling all the buttons
  for (const button of Array.from(buttonCollection)) {
    button.classList.add("disabled");
  }

  //displaying the relevent buttons
  for (const button of Array.from(buttonCollection)) {
    if (possibleValues.includes(button.textContent as string))
      button.classList.remove("disabled");
  }
};
