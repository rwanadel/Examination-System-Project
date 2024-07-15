import displayQuestion from "./displayQuestion.js";
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
  markButton,
  questionNumber
) {
  // let questionNumber = document.querySelector(".question-number");
  markedQuestionDiv.innerHTML = "";
  bookmarkedQuestions.forEach((index) => {
    index = +index;
    console.log(index);
    const questionElement = document.createElement("div");
    questionElement.textContent = `Question: ${arrQuestion[index].number}`;
    questionElement.classList.add("btn", "marked-button", "w-100", "my-2");
    questionElement.setAttribute("data-index", index);

    questionElement.addEventListener("click", function (e) {
      const dataIndex = e.target.getAttribute("data-index");
      console.log(dataIndex);
      markButton.setAttribute("data-index", dataIndex);
      currentQuestionIndex = dataIndex; // Update currentQuestionIndex first

      displayQuestion(
        currentQuestionIndex,
        arrQuestion,
        title,
        answersDiv,
        selectedAnswers,
        answerInputFields,
        questionNumber
      );
      updateNavigationButtons(
        currentQuestionIndex,
        arrQuestion,
        nextButton,
        previosButton
      );
      updateMarkButton(bookmarkedQuestions, currentQuestionIndex, markButton); // Then update the mark button
    });

    markedQuestionDiv.appendChild(questionElement);
  });
}

export default updateBookmarkedQuestionsUI;
