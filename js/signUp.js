const submitbtn = document.getElementById('submitbtn');
const form = document.getElementsByTagName('form')[0];
const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordtest = document.getElementById('passwordtest');

if(!localStorage.getItem('usersData')){
    localStorage.setItem('usersData', '{}');
}

let usersdata = localStorage.getItem('usersData');

form.onsubmit = (e)=>{
    e.preventDefault();
    if(username.value == '' || password.value == '' || passwordtest.value == ''){
        alert('You must fill the gaps');
    }
    else if(password.value != passwordtest.value){
        alert('Passwords are not Same');
    }
    else{
        usersdata = {
            username:username.value,
            password:password.value
        };
        localStorage.setItem('usersData', JSON.stringify(usersdata));
        window.location.href = './login.html'
    }
}

