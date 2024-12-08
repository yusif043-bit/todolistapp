import {todoAppLang} from './langData.js';
import {SignUpLang} from './langData.js';
import {LogInLang} from './langData.js';
// import { expcount } from './script.js';


const langbtn = document.querySelector('.langbtn');

if(!localStorage.getItem('lang')){
    localStorage.setItem('lang', window.navigator.language);
}

function onLoadChange(){
    let lang = localStorage.getItem('lang');
    let loc = window.location.pathname;
    if(loc == '/src/signup.html'){
        if(lang == 'az-AZ'){
            document.getElementsByClassName('appName')[0].innerHTML = SignUpLang.AZ.appName;
            document.getElementsByClassName('UsernameText')[0].innerHTML = SignUpLang.AZ.UsernameText;
            document.getElementsByClassName('UsernameInpPlaceholder')[0].setAttribute('placeholder', SignUpLang.AZ.UsernameInpPlaceholder);
            document.getElementsByClassName('PasswordText')[0].innerHTML = SignUpLang.AZ.PasswordText;
            document.getElementsByClassName('PasswordInpPlaceholder')[0].setAttribute('placeholder', SignUpLang.AZ.PasswordInpPlaceholder);
            document.getElementsByClassName('PasswordInpPlaceholder')[1].setAttribute('placeholder', SignUpLang.AZ.PasswordInpPlaceholder);
            document.getElementsByClassName('AgainPasswordText')[0].innerHTML = SignUpLang.AZ.AgainPasswordText;
            document.getElementsByClassName('SubmitBT')[0].innerHTML = SignUpLang.AZ.SubmitBT;
            
            localStorage.setItem('lang', 'az-AZ');
            langbtn.innerHTML = 'AZ';
        }
        else{
            document.getElementsByClassName('appName')[0].innerHTML = SignUpLang.EN.appName;
            document.getElementsByClassName('UsernameText')[0].innerHTML = SignUpLang.EN.UsernameText;
            document.getElementsByClassName('UsernameInpPlaceholder')[0].innerHTML = SignUpLang.EN.UsernameInpPlaceholder;
            document.getElementsByClassName('PasswordText')[0].innerHTML = SignUpLang.EN.PasswordText;
            document.getElementsByClassName('PasswordInpPlaceholder')[0].innerHTML = SignUpLang.EN.PasswordInpPlaceholder;
            document.getElementsByClassName('PasswordInpPlaceholder')[1].innerHTML = SignUpLang.EN.PasswordInpPlaceholder;
            document.getElementsByClassName('AgainPasswordText')[0].innerHTML = SignUpLang.EN.AgainPasswordText;
            document.getElementsByClassName('SubmitBT')[0].innerHTML = SignUpLang.EN.SubmitBT;

            localStorage.setItem('lang', 'en-US');
            langbtn.innerHTML = 'EN';
        }
    }
    if(loc == '/src/login.html'){
        if(lang == 'az-AZ'){
            document.querySelector('.appName').innerHTML = LogInLang.AZ.appName;
            document.querySelector('.UsernameText').innerHTML = LogInLang.AZ.UsernameText;
            document.querySelector('.UsernameInpPlaceholder').setAttribute('placeholder', LogInLang.AZ.UsernameInpPlaceholder);
            document.querySelector('.appName').PasswordText = LogInLang.AZ.PasswordText;
            document.querySelector('.PasswordInpPlaceholder').setAttribute('placeholder', LogInLang.AZ.PasswordInpPlaceholder);
            document.querySelector('.SubmitBT').innerHTML = LogInLang.AZ.SubmitBT;
            localStorage.setItem('lang', 'az-AZ');
            langbtn.innerHTML = 'AZ'
        }
        else{
            document.querySelector('.appName').innerHTML = LogInLang.EN.appName;
            document.querySelector('.UsernameText').innerHTML = LogInLang.EN.UsernameText;
            document.querySelector('.UsernameInpPlaceholder').setAttribute('placeholder', LogInLang.AZ.UsernameInpPlaceholder);
            document.querySelector('.appName').PasswordText = LogInLang.EN.PasswordText;
            document.querySelector('.PasswordInpPlaceholder').setAttribute('placeholder', LogInLang.AZ.PasswordInpPlaceholder);
            document.querySelector('.SubmitBT').innerHTML = LogInLang.EN.SubmitBT;
            localStorage.setItem('lang', 'en-US');
            langbtn.innerHTML = 'EN';
        }
    }
    if(loc == '/src/' || loc == '/src/index.html'){
        let txt = document.querySelector('.pendingTasks').innerHTML;
        txt = txt.split(' ');
        if(lang == 'az-AZ'){
            let count = txt[2];
            document.querySelector('.appName').innerHTML = todoAppLang.AZ.appName;
            document.querySelector('.ToDoInpPlaceholder').setAttribute('placeholder', todoAppLang.AZ.ToDoInpPlaceholder);
            document.querySelector('.pendingTasks').innerHTML = todoAppLang.AZ.pendingTasks(count);
            document.querySelector('.clearBT').innerHTML = todoAppLang.AZ.clearBT;
            localStorage.setItem('lang', 'az-AZ');
            langbtn.innerHTML = 'AZ';
        }
        else{
            let count = txt[1];
            document.querySelector('.appName').innerHTML = todoAppLang.EN.appName;
            document.querySelector('.ToDoInpPlaceholder').setAttribute('placeholder', todoAppLang.EN.ToDoInpPlaceholder);
            document.querySelector('.pendingTasks').innerHTML = todoAppLang.EN.pendingTasks(count);
            document.querySelector('.clearBT').innerHTML = todoAppLang.EN.clearBT;
            localStorage.setItem('lang', 'en-US');
            langbtn.innerHTML = 'EN';
        }
    }
}


function changeLang(){
    let loc = window.location.pathname;
    let lang = localStorage.getItem('lang');
    if(loc == '/src/signup.html'){
        if(lang == 'en-US'){
            document.getElementsByClassName('appName')[0].innerHTML = SignUpLang.AZ.appName;
            document.getElementsByClassName('UsernameText')[0].innerHTML = SignUpLang.AZ.UsernameText;
            document.getElementsByClassName('UsernameInpPlaceholder')[0].setAttribute('placeholder', SignUpLang.AZ.UsernameInpPlaceholder);
            document.getElementsByClassName('PasswordText')[0].innerHTML = SignUpLang.AZ.PasswordText;
            document.getElementsByClassName('PasswordInpPlaceholder')[0].setAttribute('placeholder', SignUpLang.AZ.PasswordInpPlaceholder);
            document.getElementsByClassName('PasswordInpPlaceholder')[1].setAttribute('placeholder', SignUpLang.AZ.PasswordInpPlaceholder);
            document.getElementsByClassName('AgainPasswordText')[0].innerHTML = SignUpLang.AZ.AgainPasswordText;
            document.getElementsByClassName('SubmitBT')[0].innerHTML = SignUpLang.AZ.SubmitBT;
            
            localStorage.setItem('lang', 'az-AZ');
            langbtn.innerHTML = 'AZ';
        }
        else{
            document.getElementsByClassName('appName')[0].innerHTML = SignUpLang.EN.appName;
            document.getElementsByClassName('UsernameText')[0].innerHTML = SignUpLang.EN.UsernameText;
            document.getElementsByClassName('UsernameInpPlaceholder')[0].innerHTML = SignUpLang.EN.UsernameInpPlaceholder;
            document.getElementsByClassName('PasswordText')[0].innerHTML = SignUpLang.EN.PasswordText;
            document.getElementsByClassName('PasswordInpPlaceholder')[0].innerHTML = SignUpLang.EN.PasswordInpPlaceholder;
            document.getElementsByClassName('PasswordInpPlaceholder')[1].innerHTML = SignUpLang.EN.PasswordInpPlaceholder;
            document.getElementsByClassName('AgainPasswordText')[0].innerHTML = SignUpLang.EN.AgainPasswordText;
            document.getElementsByClassName('SubmitBT')[0].innerHTML = SignUpLang.EN.SubmitBT;

            localStorage.setItem('lang', 'en-US');
            langbtn.innerHTML = 'EN';
        }
    }
    if(loc == '/src/login.html'){
        if(lang == 'en-US'){
            document.querySelector('.appName').innerHTML = LogInLang.AZ.appName;
            document.querySelector('.UsernameText').innerHTML = LogInLang.AZ.UsernameText;
            document.querySelector('.UsernameInpPlaceholder').setAttribute('placeholder', LogInLang.AZ.UsernameInpPlaceholder);
            document.querySelector('.appName').PasswordText = LogInLang.AZ.PasswordText;
            document.querySelector('.PasswordInpPlaceholder').setAttribute('placeholder', LogInLang.AZ.PasswordInpPlaceholder);
            document.querySelector('.SubmitBT').innerHTML = LogInLang.AZ.SubmitBT;
            localStorage.setItem('lang', 'az-AZ');
            langbtn.innerHTML = 'AZ'
        }
        else{
            document.querySelector('.appName').innerHTML = LogInLang.EN.appName;
            document.querySelector('.UsernameText').innerHTML = LogInLang.EN.UsernameText;
            document.querySelector('.UsernameInpPlaceholder').setAttribute('placeholder', LogInLang.AZ.UsernameInpPlaceholder);
            document.querySelector('.appName').PasswordText = LogInLang.EN.PasswordText;
            document.querySelector('.PasswordInpPlaceholder').setAttribute('placeholder', LogInLang.AZ.PasswordInpPlaceholder);
            document.querySelector('.SubmitBT').innerHTML = LogInLang.EN.SubmitBT;
            localStorage.setItem('lang', 'en-US');
            langbtn.innerHTML = 'EN';
        }
    }
    if(loc == '/src/' || loc == '/src/index.html'){
        let txt = document.querySelector('.pendingTasks').innerHTML;
        txt = txt.split(' ');
        if(lang == 'en-US'){
            let count = txt[2];
            document.querySelector('.appName').innerHTML = todoAppLang.AZ.appName;
            document.querySelector('.ToDoInpPlaceholder').setAttribute('placeholder', todoAppLang.AZ.ToDoInpPlaceholder);
            document.querySelector('.pendingTasks').innerHTML = todoAppLang.AZ.pendingTasks(count);
            document.querySelector('.clearBT').innerHTML = todoAppLang.AZ.clearBT;
            localStorage.setItem('lang', 'az-AZ');
            langbtn.innerHTML = 'AZ';
        }
        else{
            let count = txt[1];
            document.querySelector('.appName').innerHTML = todoAppLang.EN.appName;
            document.querySelector('.ToDoInpPlaceholder').setAttribute('placeholder', todoAppLang.EN.ToDoInpPlaceholder);
            document.querySelector('.pendingTasks').innerHTML = todoAppLang.EN.pendingTasks(count);
            document.querySelector('.clearBT').innerHTML = todoAppLang.EN.clearBT;
            localStorage.setItem('lang', 'en-US');
            langbtn.innerHTML = 'EN';
        }
    }
}

langbtn.onclick = ()=>{
    changeLang();
};

onLoadChange();