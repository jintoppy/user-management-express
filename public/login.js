const usernameTxt = document.querySelector('#username');
const passwordTxt = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', () => {
    const username = usernameTxt.value;
    const password = passwordTxt.value;
    fetch('', {
        method: 'POST'
    })
});