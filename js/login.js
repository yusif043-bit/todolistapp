const submitbtn = document.getElementById('submitbtn');
const form = document.getElementsByTagName('form')[0];
const username = document.getElementById('username');
const password = document.getElementById('password');




form.onsubmit = (e)=>{
    e.preventDefault();
    let usersdata = JSON.parse(localStorage.getItem('usersData'));
    if(username.value == usersdata.username && password.value == usersdata.password){
        window.location.href = './index.html';
    }
    else{
        alert('Wrong username or password!');
    }
}

