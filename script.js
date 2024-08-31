// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const message = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const username = usernameField.value.trim();
            const password = passwordField.value.trim();

            if (username === '' || password === '') {
                message.textContent = 'Both fields are required.';
                return;
            }

            console.log('Username:', username);
            console.log('Password:', password);

            //shows successful login
            message.textContent = 'Login successful!';

            // Clear the form fields 
            usernameField.value = '';
            passwordField.value = '';
        });
    }
});
