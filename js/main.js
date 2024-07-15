import displayQuestion from "./displayQuestion.js";
import shuffle from "./shuffleQuestions.js";
// import updateBookmarkedQuestionsUI from "./updateBookmarkedQuestionsUI.js";
import updateNavigationButtons from "./updateNavigationButtons.js";
import updateMarkButton from "./updateMarkButton.js";
import calcScore from "./calcScore.js";
import generateQuestions from "./generateQuestions.js";

let fixedQuestionsArr = generateQuestions();
let bookmarkedQuestions = [];
let selectedAnswers = [];

let title = document.querySelector(".questionTitle");
let nextButton = document.getElementById("next-btn");
let previosButton = document.getElementById("prev-btn");
let markButton = document.getElementById("mark-btn");
let submitButton = document.getElementById("submit-btn");
let answersDiv = document.querySelector(".answers");
let markedQuestionDiv = document.querySelector(".marked-question-box");
let answerInputFields = document.getElementsByClassName("answer");
let questionNumber = document.querySelector(".question-number");
let currentQuestionIndex = 0;
let score = 0;

// Shuffle the questions
let arrQuestion;

// Check if the shuffled array is already stored in local storage
if (localStorage.getItem("shuffledQuestions")) {
  arrQuestion = JSON.parse(localStorage.getItem("shuffledQuestions"));
} else {
  arrQuestion = shuffle(fixedQuestionsArr);
  localStorage.setItem("shuffledQuestions", JSON.stringify(arrQuestion));
}

// display questions and answer
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

nextButton.addEventListener("click", function () {
  if (currentQuestionIndex < arrQuestion.length - 1) {
    currentQuestionIndex++;
    displayQuestion(
      currentQuestionIndex,
      arrQuestion,
      title,
      answersDiv,
      selectedAnswers,
      answerInputFields,
      questionNumber
    );
  }
  updateNavigationButtons(
    currentQuestionIndex,
    arrQuestion,
    nextButton,
    previosButton
  );
  updateMarkButton(bookmarkedQuestions, currentQuestionIndex, markButton);
  // console.log(answerInputFields);
});

// Event listener for previous button
previosButton.addEventListener("click", function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(
      currentQuestionIndex,
      arrQuestion,
      title,
      answersDiv,
      selectedAnswers,
      answerInputFields,
      questionNumber
    );
  }
  updateNavigationButtons(
    currentQuestionIndex,
    arrQuestion,
    nextButton,
    previosButton
  );
  updateMarkButton(bookmarkedQuestions, currentQuestionIndex, markButton);
});

markButton.addEventListener("click", function (e) {
  const currentIndex = e.target.getAttribute("data-index");

  if (bookmarkedQuestions.indexOf(currentIndex) > -1) {
    markButton.textContent = "Mark"; // Unmark the question if already bookmarked
    bookmarkedQuestions.splice(bookmarkedQuestions.indexOf(currentIndex), 1);
  } else if (bookmarkedQuestions.indexOf(currentIndex)) {
    markButton.textContent = "Unmark"; // Mark the question if not already bookmarked
    bookmarkedQuestions.push(currentIndex);
  }
  updateBookmarkedQuestionsUI(
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
  );
});

submitButton.addEventListener("click", function () {
  let usersArr = JSON.parse(localStorage.getItem("usersData"));
  localStorage.clear();
  localStorage.setItem("usersData", JSON.stringify(usersArr));

  calcScore(arrQuestion, selectedAnswers, score);
  location.replace("result/result.html");
});

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
