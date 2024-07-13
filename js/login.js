document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (!storedUserData) {
        alert('No registered user found.');
        return;
    }

    if (email === storedUserData.email && password === storedUserData.password) {
         window.location.href("../exam.html");
        
        // Redirect to the Quiz page 
    } else {
        alert('Invalid email or password.');
    }
});

