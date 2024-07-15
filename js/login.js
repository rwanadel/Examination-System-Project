document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const userArr = JSON.parse(localStorage.getItem("usersData"));

    const foundUser = userArr.find((user) => user.email === email);

    if (!foundUser) {
      alert("No registered user found.");
    } else if (foundUser.password !== password) {
      alert("Invalid password.");
    } else {
      window.location.replace("exam.html");
    }
  });
