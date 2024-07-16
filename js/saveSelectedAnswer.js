// Function to save the selected answer for the current question
function saveSelectedAnswer(questionNumber, selectedAnswers) {
  const selectedRadio = document.querySelector(
    `input[name="question${questionNumber}"]:checked`
  );

  if (selectedRadio) {
    selectedAnswers[questionNumber] = selectedRadio.value;
  }
}
export default saveSelectedAnswer;
