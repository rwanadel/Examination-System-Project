function displayQuestion(
  currentQuestionIndex,
  arrQuestion,
  title,
  answersDiv,
  selectedAnswers,
  answerInputFields,
  questionNumber
) {
  if (currentQuestionIndex < arrQuestion.length && currentQuestionIndex >= 0) {
    // Wrap the question title in a Bootstrap-styled element
    questionNumber.innerHTML=`Question: ${arrQuestion[currentQuestionIndex].number}`
    title.innerHTML = `<div class="mb-3"><h4">${arrQuestion[currentQuestionIndex].title}</h4></div>`;

    answersDiv.innerHTML = ""; // Clear previous answers

    // Generate and append radio buttons and labels for each answer
    arrQuestion[currentQuestionIndex].answersArr.forEach((answer, i) => {
      let answerId = `question${currentQuestionIndex}_answer${i}`;
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${currentQuestionIndex}`;
      radio.id = answerId;
      radio.value = answer.answer;
      radio.setAttribute("class", "styled-radio");
      radio.classList.add("answer", "form-check-input"); 

      // Check if the answer was previously selected
      if (localStorage.getItem(currentQuestionIndex) == radio.value) {
        radio.checked = true;
      }

      let label = document.createElement("label");
      label.setAttribute("class", "labelAnswer");
      label.htmlFor = answerId;
      label.textContent = answer.answer;
      label.setAttribute("class", "styled-label form-check-label"); 

      let div = document.createElement("div");
      div.setAttribute("class", "continerOfRadioAndLabel form-check mb-2 ps-5"); 

      div.appendChild(radio);
      div.appendChild(label);

      answersDiv.appendChild(div);

      div.addEventListener("click", () => {
        radio.checked = true;
        updateAnswersArray(
          currentQuestionIndex,
          selectedAnswers,
          answerInputFields
        );
      });
      // Add event listener to update selectedAnswers when a radio button is checked
      radio.addEventListener("change", () => {
        updateAnswersArray(
          currentQuestionIndex,
          selectedAnswers,
          answerInputFields
        );
      });
    });

    // Call updateAnswersArray after rendering the radio buttons
    updateAnswersArray(
      currentQuestionIndex,
      selectedAnswers,
      answerInputFields
    );
  }
}

function updateAnswersArray(
  currentQuestionIndex,
  selectedAnswers,
  answerInputFields
) {
  selectedAnswers[currentQuestionIndex] = null;
  for (let i = 0; i < answerInputFields.length; i++) {
    if (answerInputFields[i].checked) {
      selectedAnswers[currentQuestionIndex] = answerInputFields[i].value;
      console.log(selectedAnswers);
      localStorage.setItem(
        currentQuestionIndex,
        `${answerInputFields[i].value}`
      );
      break; // Exit loop once the checked answer is found
    }
  }
}

export default displayQuestion;
