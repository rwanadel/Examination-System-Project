export default function   updateMarkButton(
  bookmarkedQuestions,
  currentQuestionIndex,
  markButton
) {
 
  let dataIndex= markButton.getAttribute('data-index')
  const exist = bookmarkedQuestions.includes(dataIndex);
  if (exist) {
    markButton.textContent = "Unmark";
  } else {
    markButton.textContent = "Mark";
  }
}
