export default function calcScore(arrQuestion, selectedAnswers, score) {
  selectedAnswers.forEach((element, i) => {
    if (element == arrQuestion[i].correctAns) {
      score++;
    }
  });
  localStorage.setItem("score", score);
  console.log("score " + score);
}
