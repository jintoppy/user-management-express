const usernameTxt = document.querySelector('#username');
const passwordTxt = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', async (evnt) => {
    evnt.preventDefault();
    const username = usernameTxt.value;
    const password = passwordTxt.value;
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })      
    });
    const { token } = await response.json();
    localStorage.setItem('token', token);
    location.href = '/';
});