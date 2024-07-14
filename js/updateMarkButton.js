export default function updateMarkButton(
  bookmarkedQuestions,
  currentQuestionIndex,
  markButton
) {
  const exist = bookmarkedQuestions.indexOf(currentQuestionIndex);
  if (exist > -1) {
    markButton.textContent = "Unmark";
  } else {
    markButton.textContent = "Mark";
  }
}
