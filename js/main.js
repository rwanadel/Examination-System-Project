import displayQuestion from "./displayQuestionFunction.js";
import shuffle from "./randoQuestion.js";
import updateBookmarkedQuestionsUI from "./updateBookmarkedQuestionsUI.js";
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
let markedQuestionDiv = document.querySelector(".marked-question");
let answerInputFields = document.getElementsByClassName("answer");

let currentQuestionIndex = 0;
let score = 0;

// Shuffle the questions
let arrQuestion;

// Check if the shuffled array is already stored in local storage
if (localStorage.getItem('shuffledQuestions')) {
  arrQuestion = JSON.parse(localStorage.getItem('shuffledQuestions'));
} else {
  arrQuestion = shuffle(fixedQuestionsArr);
  localStorage.setItem('shuffledQuestions', JSON.stringify(arrQuestion));
}

// display questions and answer
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

nextButton.addEventListener("click", function () {
  if (currentQuestionIndex < arrQuestion.length - 1) {
    currentQuestionIndex++;
    displayQuestion(
      currentQuestionIndex,
      arrQuestion,
      title,
      answersDiv,
      selectedAnswers,
      answerInputFields
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
      answerInputFields
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
  const currentIndex = e.target.getAttribute('data-index');
  console.log(`currindex from markbtn ${currentIndex}`);

  if (bookmarkedQuestions.indexOf(currentIndex)>-1) {
    console.log('if111111');
    markButton.textContent = "Mark"; // Unmark the question if already bookmarked
    bookmarkedQuestions.splice(bookmarkedQuestions.indexOf(currentIndex), 1);
    console.log(bookmarkedQuestions)
  } else if (bookmarkedQuestions.indexOf(currentIndex)) {
    console.log('if2222222222');
    markButton.textContent = "Unmark"; // Mark the question if not already bookmarked
    bookmarkedQuestions.push(currentIndex);
    console.log(bookmarkedQuestions)
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
  )
});


submitButton.addEventListener("click", function () {
//localStorage.clear();
  calcScore(arrQuestion, selectedAnswers, score);
  location.replace("result/result.html");
});
