window.onload = function() { alert("Welcome To LHEXIRA!"); };



const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    emailError.textContent = '';
    passwordError.textContent = '';

    if (!email.value.includes('@') || email.value.length < 5) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    if (isValid) {
        alert('Login successful!');
        window.location.href = "index2.html";
    }
});