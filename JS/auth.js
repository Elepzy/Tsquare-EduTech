// Login API
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');
    try {
        const res = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.ok) {
            message.textContent = 'Login successful!';
            message.classList.remove('text-red-600');
            message.classList.add('text-green-600');
            // Save token, redirect, etc.
        } else {
            message.textContent = data.error || 'Login failed';
            message.classList.remove('text-green-600');
            message.classList.add('text-red-600');
        }
    } catch (err) {
        message.textContent = 'Network error';
        message.classList.remove('text-green-600');
        message.classList.add('text-red-600');
    }
});

// Sign Up API
document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;
    const message = document.getElementById('signupMessage');
    if (password !== confirm) {
        message.textContent = 'Passwords do not match';
        return;
    }
    try {
        const res = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.ok) {
            message.textContent = 'Sign up successful!';
            message.classList.remove('text-red-600');
            message.classList.add('text-green-600');
            // Save token, redirect, etc.
        } else {
            message.textContent = data.error || 'Sign up failed';
            message.classList.remove('text-green-600');
            message.classList.add('text-red-600');
        }
    } catch (err) {
        message.textContent = 'Network error';
        message.classList.remove('text-green-600');
        message.classList.add('text-red-600');
    }
});

// Forgot Password (Mock)
document.getElementById('forgotForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value;
    const message = document.getElementById('forgotMessage');
    // Mock API call
    setTimeout(() => {
        message.textContent = 'Password reset link sent to ' + email;
    }, 1000);
});