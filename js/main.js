import displayQuestion from "./displayQuestion.js";
import shuffle from "./shuffleQuestions.js";
import updateBookmarkedQuestionsUI from "./updateBookmarkedQuestionsUI.js";
import updateNavigationButtons from "./updateNavigationButtons.js";
import updateMarkButton from "./updateMarkButton.js";
import calcScore from "./calcScore.js";
import generateQuestions from "./generateQuestions.js";

let fixedQuestionsArr = generateQuestions();
let bookmarkedQuestions = [];
export let selectedAnswers = [];

let title = document.querySelector(".questionTitle");
let nextButton = document.getElementById("next-btn");
let previosButton = document.getElementById("prev-btn");
let markButton = document.getElementById("mark-btn");
let submitButton = document.getElementById("submit-btn");
let answersDiv = document.querySelector(".answers");
let markedQuestionDiv = document.querySelector(".marked-question-box");
let answerInputFields = document.getElementsByClassName("answer");
let questionNumber = document.querySelector(".question-number");
export let score = 0;

let currentQuestionIndex = localStorage.getItem("currentQuestionIndex")
  ? parseInt(localStorage.getItem("currentQuestionIndex"))
  : 0;

// Shuffle the questions
export let arrQuestion;

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

nextButton.addEventListener("click", function (e) {
  currentQuestionIndex = parseInt(localStorage.getItem("currentQuestionIndex"));

  if (currentQuestionIndex < arrQuestion.length - 1) {
    currentQuestionIndex++;
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);

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
  toggleSubmitButton(currentQuestionIndex, arrQuestion.length);
  console.log(currentQuestionIndex);
});

// Event listener for previous button
previosButton.addEventListener("click", function () {
  currentQuestionIndex = parseInt(localStorage.getItem("currentQuestionIndex"));

  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);

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
  console.log(currentQuestionIndex);
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
    markButton,
    questionNumber
  );
});

function toggleSubmitButton(currentQuestionIndex, totalQuestions) {
  if (currentQuestionIndex === totalQuestions - 1) {
    submitButton.classList.remove("disabled-btn");
    submitButton.classList.add("submit-button");
  } else {
    submitButton.classList.remove("submit-button");
    submitButton.classList.add("disabled-btn");
  }
}

submitButton.addEventListener("click", function (e) {
  let currentQuestionIndex = getCurrentQuestionIndex();
  let totalQuestions = arrQuestion.length;
  if (currentQuestionIndex === totalQuestions - 1) {
    let usersArr = JSON.parse(localStorage.getItem("usersData"));
    localStorage.clear();
    localStorage.setItem("usersData", JSON.stringify(usersArr));

    calcScore(arrQuestion, selectedAnswers, score);
    location.replace("result/result.html");
  } else {
    e.preventDefault();
  }
});

function getCurrentQuestionIndex() {
  return parseInt(localStorage.getItem("currentQuestionIndex")) || 0;
}
