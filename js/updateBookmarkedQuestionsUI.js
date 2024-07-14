import displayQuestion from "./displayQuestionFunction.js";
import updateNavigationButtons from "./updateNavigationButtons.js";
import updateMarkButton from "./updateMarkButton.js";

function updateBookmarkedQuestionsUI(
  markedQuestionDiv,
  bookmarkedQuestions,
  currentQuestionIndex,
  arrQuestion,
  title,
  answersDiv,
  selectedAnswers,
  answerInputFields,
  nextButton,
  previosButton,
  markButton
) {
  markedQuestionDiv.innerHTML = "";
  bookmarkedQuestions.forEach((index) => {
    const questionElement = document.createElement("div");
    questionElement.textContent = ` Question : ${arrQuestion[index].number}`;
    questionElement.classList.add("btn", "btn-warning", "w-100", "my-2" );
    
    questionElement.addEventListener("click", function () {
      currentQuestionIndex = index;
      displayQuestion(
        currentQuestionIndex,
        arrQuestion,
        title,
        answersDiv,
        selectedAnswers,
        answerInputFields
      );
      updateNavigationButtons(
        currentQuestionIndex,
        arrQuestion,
        nextButton,
        previosButton
      );
      updateMarkButton(bookmarkedQuestions, currentQuestionIndex, markButton);
    });
    markedQuestionDiv.appendChild(questionElement);
  });
}

export default updateBookmarkedQuestionsUI;
