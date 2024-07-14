import Question from "./questioncClass.js";
import Answer from "./answersClass.js";
import displayQuestion from "./displayQuestionFunction.js";
import shuffle from "./randoQuestion.js";
import updateBookmarkedQuestionsUI from "./updateBookmarkedQuestionsUI.js";
import updateNavigationButtons from "./updateNavigationButtons.js";
import updateMarkButton from "./updateMarkButton.js";
import calcScore from "./calcScore.js";

let q1 = new Question(
  "1-What is the correct syntax to print a message in the console in JavaScript?",
  [
    new Answer("A- console.print('Hello World!'); "),
    new Answer("console.log('Hello World!');"),
    new Answer("print.console('Hello World!'); "),
    new Answer("log.console('Hello World!'); "),
  ],
  1,
  "console.log('Hello World!');"
);

let q2 = new Question(
  "2-Which company developed JavaScript?",
  [
    new Answer("Microsoft "),
    new Answer("Google "),
    new Answer("Sun Microsystems "),
    new Answer("Netscape"),
  ],
  2,
  "Netscape"
);

let q3 = new Question(
  "3-Which of the following is the correct way to create a new array in JavaScript?",
  [
    new Answer("var colors = 'red', 'green', 'blue'; "),
    new Answer("var colors = ['red', 'green', 'blue'];"),
    new Answer("var colors = (1:'red', 2:'green', 3:'blue'); "),
    new Answer("var colors = {'red', 'green', 'blue'}; "),
  ],
  3,
  "var colors = ['red', 'green', 'blue'];"
);

let q4 = new Question(
  "4-How can you add a comment in JavaScript?",
  [
    new Answer("<!-- This is a comment --> "),
    new Answer("/* This is a comment */ "),
    new Answer("// This is a comment"),
    new Answer("** This is a comment ** "),
  ],
  4,
  "// This is a comment"
);

let q5 = new Question(
  " 5-What is the output of typeof NaN in JavaScript?",
  [
    new Answer("number"),
    new Answer("NaN "),
    new Answer("undefined "),
    new Answer("string "),
  ],
  5,
  "number"
);

let q6 = new Question(
  "6-Which method is used to round a number to the nearest integer in JavaScript? ",
  [
    new Answer("Math.ceil() "),
    new Answer("Math.round()"),
    new Answer("Math.floor() "),
    new Answer("Math.abs() "),
  ],
  6,
  "Math.round()"
);

let q7 = new Question(
  "7-Which of the following is not a JavaScript data type?",
  [
    new Answer("Undefined "),
    new Answer("Number"),
    new Answer("Boolean"),
    new Answer("Float"),
  ],
  7,
  "Float"
);

let q8 = new Question(
  "8-What will be the output of Boolean('false') in JavaScript?",
  [
    new Answer("true"),
    new Answer("false "),
    new Answer("undefined "),
    new Answer("null "),
  ],
  8,
  "true"
);

let q9 = new Question(
  "9-Which event occurs when the user clicks on an HTML element?",
  [
    new Answer("onmouseclick "),
    new Answer("onclick"),
    new Answer("onchange "),
    new Answer("onmouseover "),
  ],
  9,
  "onclick"
);

let q10 = new Question(
  "10-How do you declare a JavaScript variable?",
  [
    new Answer("var myVar;"),
    new Answer("variable myVar; "),
    new Answer("v myVar; "),
    new Answer("myVar var;"),
  ],
  10,
  "var myVar;"
);

let arrQuestion1 = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
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
  arrQuestion = shuffle(arrQuestion1);
  localStorage.setItem('shuffledQuestions', JSON.stringify(arrQuestion));
}

// Now you can pass shuffledQuestions to other functions
console.log(arrQuestion);

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

markButton.addEventListener("click", function () {
  const index = bookmarkedQuestions.indexOf(currentQuestionIndex);
  if (index > -1) {
    bookmarkedQuestions.splice(index, 1); // Unmark the question if already bookmarked
  } else {
    bookmarkedQuestions.push(currentQuestionIndex); // Mark the question if not already bookmarked
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
  updateMarkButton(bookmarkedQuestions, currentQuestionIndex, markButton);
});

submitButton.addEventListener("click", function () {
//localStorage.clear();
  calcScore(arrQuestion, selectedAnswers, score);
  location.replace("result/result.html");
});
