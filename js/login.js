  document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const userArr = JSON.parse(localStorage.getItem("usersData"));

    const foundUser = userArr.find((user) => user.email === email);

    const validEmail=document.querySelector(".validEmail");
    const validpass=document.querySelector(".validpass");

    validEmail.innerHTML = "";
    validpass.innerHTML = "";

    if (!foundUser) {
      
      validEmail.innerHTML="No registered user found.";
      validEmail.style.color="red";
      validEmail.style.fontSize="14px";


    } else if (foundUser.password !== password) {
      
      validpass.innerHTML="Invalid password.";
      validpass.style.color="red";
      validpass.style.fontSize="14px";


    } else {
      window.location.replace("exam.html");
    }
  });
