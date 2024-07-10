let selectedAnswers = [];

function displayQuestion(index , arrQuestion, title, answersDiv, previosButton) {

    if (index < arrQuestion.length  && index >= 0) {
        title.innerHTML = arrQuestion[index];

        answersDiv.innerHTML = ""; // Clear previous answers

 // Generate and append radio buttons and labels for each answer
        arrQuestion[index].answersArr.forEach((answer, i) => {
            let answerId = `question${index}_answer${i}`;
            console.log(answerId)

            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question${index}`;
            radio.id = answerId;
            radio.value = answer.answerText;
            radio.setAttribute("class","styled-radio")


            let label = document.createElement("label");
            label.setAttribute("class","labelAnswer")
            label.htmlFor = answerId;
            label.textContent = answer;
            label.setAttribute("class","styled-label")

            let div=document.createElement("div")
            div.setAttribute("class","continerOfRadioAndLabel")

            div.appendChild(label);
            div.appendChild(radio);

            answersDiv.appendChild(div);
        });
        

        if (index === 0) {
            previosButton.style.display = "none";
       } else {
            previosButton.style.display = "inline-block";
       }
     }
   
 }

export default displayQuestion;