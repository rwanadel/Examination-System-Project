import Question from "./questioncClass.js";
import Answer from "./answersClass.js";

let q1=new Question("what is your name ?",
   [ new Answer("undifend ",false),
    new Answer("rwan ",true),
    new Answer("undifend ",false),
    new Answer("non ",false)
   ],1
);

console.log(q1);
