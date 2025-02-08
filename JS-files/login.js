function validateLogin(event) {

    // Prevent the form from submission
       event.preventDefault();
   
       const username = document.querySelector('input[placeholder="Username"]').value.toLowerCase();
       const password = document.querySelector('input[placeholder="Password"]').value;
   
       const errorMessage = document.getElementById('error-message');
       const usernameError = document.querySelector(".username p");
       const passwordError = document.querySelector(".password p");
   
       // Check if fields are empty and show errors
       if (username === '' && password === '') {
           usernameError.classList.remove("hidden");
           passwordError.classList.remove("hidden");
       } else if (username === '') {
           usernameError.classList.remove("hidden");
       } else if (password === '') {
           passwordError.classList.remove("hidden");
       } else {
           // Define an array of admin usernames and passwords
           const admins = [
               { username: 'manar', password: '12345' },
               { username: 'maram', password: '12345' },
               { username: 'renad', password: '12345' }
           ];
   
           // Check if entered username and password match any admin credentials
           const validAdmin = admins.find(admin => admin.username.toLowerCase() === username && admin.password === password);
   
           if (validAdmin) {
               // If credentials are correct, redirect to the dashboard
               window.location.href = 'admin.html';
           } else {
               // If credentials are incorrect, show the error message
               errorMessage.classList.remove('hidden');
           }
       }
   }
   
   document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    
    form.addEventListener('submit', function(event) {
        validateLogin(event);  // Pass the event to validateLogin
    });
   
       // Event listeners to hide error messages when typing in inputs
       const usernameInput = document.querySelector('input[placeholder="Username"]');
       const passwordInput = document.querySelector('input[placeholder="Password"]');
       
       usernameInput.addEventListener('input', function () {
           const usernameError = document.querySelector(".username p");
           if (usernameError && usernameInput.value !== '') {
               usernameError.classList.add('hidden');
           }
       });
   
       passwordInput.addEventListener('input', function () {
           const passwordError = document.querySelector(".password p");
           if (passwordError && passwordInput.value !== '') {
               passwordError.classList.add('hidden');
           }
       });
   });
   