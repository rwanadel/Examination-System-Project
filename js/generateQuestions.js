import Question from "./Classes/Question.js";
import Answer from "./Classes/Answer.js";

export default function generateQuestions() {
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
  let arrQuestion = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
  return arrQuestion
}

