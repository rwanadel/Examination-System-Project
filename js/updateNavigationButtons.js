export default function updateNavigationButtons(
  currentQuestionIndex,
  arrQuestion,
  nextButton,
  previosButton
) {
  if (currentQuestionIndex === arrQuestion.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline";
  }

  if (currentQuestionIndex === 0) {
    previosButton.style.display = "none";
  } else {
    previosButton.style.display = "inline";
  }
}
