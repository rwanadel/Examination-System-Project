function displayQuestion(
  currentQuestionIndex,
  arrQuestion,
  title,
  answersDiv,
  selectedAnswers,
  answerInputFields
) {
  if (currentQuestionIndex < arrQuestion.length && currentQuestionIndex >= 0) {
    title.innerHTML = arrQuestion[currentQuestionIndex];

    answersDiv.innerHTML = ""; // Clear previous answers

    // Generate and append radio buttons and labels for each answer
    arrQuestion[currentQuestionIndex].answersArr.forEach((answer, i) => {
      let answerId = `question${currentQuestionIndex}_answer${i}`;
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${currentQuestionIndex}`;
      radio.id = answerId;
      radio.value = answer;
      radio.setAttribute("class", "styled-radio");
      radio.classList.add("answer");
      if (localStorage.getItem(currentQuestionIndex) == radio.value) {
        radio.checked = true;
      }

      let label = document.createElement("label");
      label.setAttribute("class", "labelAnswer");
      label.htmlFor = answerId;
      label.textContent = answer;
      label.setAttribute("class", "styled-label");

      let div = document.createElement("div");
      div.setAttribute("class", "continerOfRadioAndLabel");

      div.appendChild(label);
      div.appendChild(radio);

      answersDiv.appendChild(div);

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
