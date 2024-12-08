const themebtn = document.getElementsByClassName('themebtn')[0];
const detectDarkTheme = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
if(!localStorage.getItem('theme')){
    if(detectDarkTheme()){localStorage.setItem('theme', 'dark')}
    else{localStorage.setItem('theme', 'light')}
}

function reset(){
    document.getElementsByTagName('body')[0].classList.remove('dark-body', 'light-body');
    document.getElementById('mainbox').classList.remove('bg-dark', 'text-light');
    document.querySelector('.langbtn').classList.remove('text-light', 'text-dark', 'text-bg-warning', 'text-bg-primary');
}

function changeTheme(){
    if(theme == 'dark'){
        themebtn.innerHTML = '<img src="../assets/images/light-mode.png">';
        document.getElementsByTagName('body')[0].classList.add('dark-body');
        document.querySelector('.langbtn').classList.add('text-light', 'text-bg-warning');
        document.getElementById('mainbox').classList.add('bg-dark', 'text-light');
    }else{
        themebtn.innerHTML = '<img src="../assets/images/dark-mode.png">';
        document.getElementsByTagName('body')[0].classList.add('light-body');
        document.querySelector('.langbtn').classList.add('text-dark', 'text-bg-primary');
        document.getElementById('mainbox').classList.add('bg-light');
    }
}

function getTheme(){
    return localStorage.getItem('theme');
}
let theme = getTheme();

themebtn.addEventListener('click', ()=>{
    reset();
    if(theme == 'dark'){
        localStorage.setItem('theme', 'light');
        theme = getTheme();
        changeTheme();
    }
    else{
        localStorage.setItem('theme', 'dark');
        theme = getTheme();
        changeTheme();
    }
});

changeTheme();