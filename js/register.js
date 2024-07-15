import User from "./Classes/User.js";

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      alert(
        "Please Note that first name and last name should be Only charachters."
      );
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const user = new User(firstName, lastName, email, password);

    let usersArr = JSON.parse(localStorage.getItem("usersData")) || [];

    usersArr.push(user);

    localStorage.setItem("usersData", JSON.stringify(usersArr));

    location.replace("./login.html");
  });
