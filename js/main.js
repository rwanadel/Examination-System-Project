import Question from "./questioncClass.js";
import Answer from "./answersClass.js";
import displayQuestion from "./displayQuestionFunction.js";
import shuffle from "./randoQuestion.js";

let q1=new Question("1-What is the correct syntax to print a message in the console in JavaScript?",
   [ new Answer("console.print('Hello World!'); ",false),
    new Answer("console.log('Hello World!'); ",true),
    new Answer("print.console('Hello World!'); ",false),
    new Answer("log.console('Hello World!'); ",false)
   ],1
);

let q2=new Question("2-Which company developed JavaScript?",
   [ new Answer("Microsoft ",false),
    new Answer("Google ",false),
    new Answer("Sun Microsystems ",false),
    new Answer("Netscape ",true)
   ],2
);

let q3=new Question("3-Which of the following is the correct way to create a new array in JavaScript?",
   [ new Answer("var colors = 'red', 'green', 'blue'; ",false),
    new Answer("var colors = ['red', 'green', 'blue']; ",true),
    new Answer("var colors = (1:'red', 2:'green', 3:'blue'); ",false),
    new Answer("var colors = {'red', 'green', 'blue'}; ",false)
   ],3
);

let q4=new Question("4-How can you add a comment in JavaScript?",
   [ new Answer("<!-- This is a comment --> ",false),
    new Answer("/* This is a comment */ ",false),
    new Answer("// This is a comment ",true),
    new Answer("** This is a comment ** ",false)
   ],4
);

let q5=new Question(" 5-What is the output of typeof NaN in JavaScript?",
   [ new Answer("number ",true),
    new Answer("NaN ",false),
    new Answer("undefined ",false),
    new Answer("string ",false)
   ],5
);

let q6=new Question("6-Which method is used to round a number to the nearest integer in JavaScript? ",
   [ new Answer("Math.ceil() ",false),
    new Answer("Math.round() ",true),
    new Answer("Math.floor() ",false),
    new Answer("Math.abs() ",false)
   ],6
);

let q7=new Question("7-Which of the following is not a JavaScript data type?",
   [ new Answer("Undefined ",false),
    new Answer("Number ",false),
    new Answer("Boolean",false),
    new Answer("Float ",true)
   ],7
);

let q8=new Question("8-What will be the output of Boolean('false') in JavaScript?",
   [ new Answer("true ",true),
    new Answer("false ",false),
    new Answer("undefined ",false),
    new Answer("null ",false)
   ],8
);

let q9=new Question("9-Which event occurs when the user clicks on an HTML element?",
   [ new Answer("onmouseclick ",false),
    new Answer("onclick ",true),
    new Answer("onchange ",false),
    new Answer("onmouseover ",false)
   ],9
);

let q10=new Question("10-How do you declare a JavaScript variable?",
   [ new Answer("var myVar; ",true),
    new Answer("variable myVar; ",false),
    new Answer("v myVar; ",false),
    new Answer("myVar var;",false)
   ],10
);

let arrQuestion=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

let title=document.querySelector(".questionTitle");
let nextButton=document.getElementById("next-btn");
let previosButton=document.getElementById("prev-btn")
let answersDiv=document.querySelector(".answers")
let currentQuestionIndex = 0;

// Shuffle the questions
shuffle(arrQuestion);

// display questions and answer
displayQuestion(currentQuestionIndex, arrQuestion, title, answersDiv, previosButton);


nextButton.addEventListener("click", function() {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex, arrQuestion, title, answersDiv, previosButton);
});

previosButton.addEventListener("click",function(){
   if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      displayQuestion(currentQuestionIndex, arrQuestion, title, answersDiv, previosButton);
   }
});
// if (currentQuestionIndex === 0) {
//    previosButton.style.display = "none";
// }else{
//    previosButton.style.display = "block";
// }