document.addEventListener("DOMContentLoaded", function () {
  // Duration of the exam in seconds
  const examDuration = 300; // 5 minutes

  // Reference to the timer bar element
  const timerBar = document.getElementById("timer-bar");

  // Start time
  const startTime = Date.now();

  // Function to update the timer bar
  function updateTimer() {
    // Calculate elapsed time in seconds
    const elapsedTime = (Date.now() - startTime) / 1000;

    // Calculate remaining time
    const remainingTime = examDuration - elapsedTime;

    // Calculate the width percentage
    const widthPercentage = (elapsedTime / examDuration) * 100;

    // Update the width of the timer bar
    timerBar.style.width = widthPercentage + "%";

    // Check if the time is up
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      // Add any additional actions when the exam ends
    }
  }

  // Update the timer every second
  const timerInterval = setInterval(updateTimer, 1000);
});
