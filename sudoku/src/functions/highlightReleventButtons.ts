export const highlightReleventButtons = (
  buttonCollection: HTMLCollection,
  possibleValues: string[]
) => {
  //disabling all the buttons
  for (const button of buttonCollection) {
    button.classList.add("disabled");
  }

  //displaying the relevent buttons
  for (const button of buttonCollection) {
    if (possibleValues.includes(button.textContent as string))
      button.classList.remove("disabled");
  }
};
