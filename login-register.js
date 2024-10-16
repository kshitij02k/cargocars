document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    const authTitle = document.getElementById('auth-title');
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const loginMessage = document.getElementById('loginMessage');
    const registerMessage = document.getElementById('registerMessage');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Toggle between login and register form
    toggleFormBtn.addEventListener('click', function () {
        if (loginForm.style.display === 'none') {
            // Switch to Login form
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            authTitle.textContent = 'User Login';
            toggleFormBtn.textContent = "Don't have an account? Register";
        } else {
            // Switch to Register form
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            authTitle.textContent = 'Login/Register';
            toggleFormBtn.textContent = 'Already have an account? Login';
        }
    });

    // Handle login
    loginButton.addEventListener('click', function () {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Check credentials from localStorage
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        loginMessage.textContent = ''; // Clear previous messages
        welcomeMessage.textContent = ''; // Clear any previous welcome message

        if (username === storedUsername && password === storedPassword) {
            // Display welcome message without alert
            welcomeMessage.textContent = `Welcome, ${username}! Login successful.`;

            // Check for redirect destination
            const redirectTo = localStorage.getItem('redirectTo');
            if (redirectTo) {
                localStorage.removeItem('redirectTo'); // Clear redirect after using it
                // Redirect to the intended page
                setTimeout(() => {
                    window.location.href = redirectTo;
                }, 2000); // 2 seconds delay before redirection
            } else {
                // Default redirect if no specific page was set
                setTimeout(() => {
                    window.location.href = 'view-cars.html'; // Fallback to view cars page
                }, 2000); // 2 seconds delay before redirection
            }
        } else {
            loginMessage.textContent = 'Invalid username or password.';
        }
    });

    // Handle registration
    registerButton.addEventListener('click', function () {
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const addressLine = document.getElementById('addressLine').value; // New Address Line field
        const pinCode = document.getElementById('pinCode').value; // New Pin Code field

        registerMessage.textContent = ''; // Clear previous messages

        // Simple validation
        if (password !== confirmPassword) {
            registerMessage.textContent = 'Passwords do not match.';
            return;
        }
        if (!username || !password || !phoneNumber || !addressLine || !pinCode) {
            registerMessage.textContent = 'All fields are required.';
            return;
        }

        // Store credentials in localStorage (for demo purposes)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('addressLine', addressLine); // Store Address Line
        localStorage.setItem('pinCode', pinCode); // Store Pin Code

        alert('Registration successful! You can now log in.');
        // Automatically switch to login form
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        authTitle.textContent = 'User Login';
        toggleFormBtn.textContent = "Don't have an account? Register";
    });
});
