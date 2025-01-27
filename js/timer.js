import calcScore from "./calcScore.js";
import { arrQuestion, selectedAnswers, score } from "./main.js";
document.addEventListener("DOMContentLoaded", function () {
  const examDuration = 25; // 5 minutes

  const timerBar = document.getElementById("timer-bar");

  let startTime = localStorage.getItem("startTime");
  if (!startTime) {
    startTime = Date.now();
    localStorage.setItem("startTime", startTime);
  }

  function updateTimer() {
    // Calculate elapsed time in seconds
    const elapsedTime = (Date.now() - startTime) / 1000;

    const remainingTime = examDuration - elapsedTime;

    const widthPercentage = (elapsedTime / examDuration) * 100;

    timerBar.style.width = widthPercentage + "%";

    // Check if the time is up
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      calcScore(arrQuestion, selectedAnswers, score);
      location.replace("result/result.html");
    }
  }

  // Update the timer every second
  const timerInterval = setInterval(updateTimer, 1000);
});
