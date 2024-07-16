document.addEventListener("DOMContentLoaded", function () {
  localStorage.removeItem("startTime");
});

let score = localStorage.getItem("score");
let scorePercentage = ((score / 10) * 100).toFixed(1);

function handleExamSuccess(score, scorePercentage) {
  document
    .getElementById("resultImage")
    .setAttribute("src", "../assets/freepik-export-20240715163542Z9ZD.jpeg");


  document.getElementById("resultMessege").textContent =
    "Nice job, you passed!";

  document.getElementById("percentageSpan").textContent = `${scorePercentage}%`;

  document.getElementById("pointsSpan").textContent = `${score}`;
}

function handleExamFail(score, scorePercentage) {
  document
    .getElementById("resultImage")
    .setAttribute("src", "../assets/icons/x-circle-fill.png");

  document.getElementById("resultMessege").textContent =
    "Sorry, you didn't pass";

  document.getElementById("percentageSpan").textContent = `${scorePercentage}%`;

  document.getElementById("pointsSpan").textContent = `${score}`;
}

if (score > 6) {
  handleExamSuccess(score, scorePercentage);
} else {
  handleExamFail(score, scorePercentage);
}
