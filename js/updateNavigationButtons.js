export default function updateNavigationButtons(
  currentQuestionIndex,
  arrQuestion,
  nextButton,
  previosButton
) {
  if (currentQuestionIndex == arrQuestion.length - 1) {
    nextButton.style.visibility = "hidden";
  } else {
    nextButton.style.visibility = "visible";
  }

  if (currentQuestionIndex == 0) {
    previosButton.style.visibility = "hidden";
  } else {
    previosButton.style.visibility = "visible";
  }
}
