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
    const errorOfNameF=document.querySelector(".errorOfNameF");
    const errorOfNameL=document.querySelector(".errorOfNameL");
    const errorOfemail=document.querySelector(".errorOfemail");
    const errorOfpass=document.querySelector(".errorOfpass");
    const errorOfconpass=document.querySelector(".errorOfconpass");
    errorOfNameF.innerHTML = "";
    errorOfNameL.innerHTML = "";
    errorOfemail.innerHTML = "";
    errorOfpass.innerHTML = "";
    errorOfconpass.innerHTML = "";

    if (!/^[a-zA-Z]+$/.test(firstName) ) {
    
      errorOfNameF.innerHTML="Please Note that first name should be Only charachters.";
      errorOfNameF.style.color="red";
      errorOfNameF.style.fontSize="14px";
      return;
    }
    if(!/^[a-zA-Z]+$/.test(lastName)){
      errorOfNameL.innerHTML="Please Note that last name should be Only charachters.";
      errorOfNameL.style.color="red";
      errorOfNameL.style.fontSize="14px";
      return;

    }

    if (password.length < 8) {
      
      errorOfpass.innerHTML="Password must be at least 8 characters long.";
      errorOfpass.style.color="red";
      errorOfpass.style.fontSize="14px";
      return;
    }

    if (password !== confirmPassword) {
      
      errorOfconpass.innerHTML="Passwords do not match.";
      errorOfconpass.style.color="red";
      errorOfconpass.style.fontSize="14px";
      return;
    }

    let usersArr = JSON.parse(localStorage.getItem("usersData")) || [];

    // Check if the email is already registered
    const existingUser = usersArr.find((user) => user.email === email);
    if (existingUser) {
    
      errorOfemail.innerHTML="This email is already registered.";
      errorOfemail.style.color="red";
      errorOfemail.style.fontSize="14px";
      return;
    }

    const user = new User(firstName, lastName, email, password);

    usersArr.push(user);

    localStorage.setItem("usersData", JSON.stringify(usersArr));

    location.replace("./login.html");
  });
