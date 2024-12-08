const addbtn = document.getElementById('add-btn');
const clearallbtn = document.getElementById('clearall-btn');
const endtext = document.getElementsByClassName('endtext')[0];
const ul = document.querySelector('ul');
const inpbox = document.getElementById('inpbox');
const form = document.getElementById('formt');
const userhtml = document.getElementById('userdatah1');

let count = 0;

let userdata = JSON.parse(localStorage.getItem("usersData"));
userhtml.innerHTML = userdata.username;


form.onsubmit = (e)=>{
    e.preventDefault();
    if(inpbox.value === ''){
        alert('Please write your new todo')
    }else{
        count += 1;
        if(localStorage.getItem('lang') == 'az-AZ'){endtext.innerHTML = `Gözləyən ${count} tapşırığınız var`;}
        if(localStorage.getItem('lang') == 'en-US'){endtext.innerHTML = `You have ${count} pending tasks`;}

        let li = document.createElement('li');
        let bt = document.createElement('button');

        bt.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M8 1.5V2.5H3C2.44772 2.5 2 2.94772 2 3.5V4.5C2 5.05228 2.44772 5.5 3 5.5H21C21.5523 5.5 22 5.05228 22 4.5V3.5C22 2.94772 21.5523 2.5 21 2.5H16V1.5C16 0.947715 15.5523 0.5 15 0.5H9C8.44772 0.5 8 0.947715 8 1.5Z" fill="#fff"/><path d="M3.9231 7.5H20.0767L19.1344 20.2216C19.0183 21.7882 17.7135 23 16.1426 23H7.85724C6.28636 23 4.98148 21.7882 4.86544 20.2216L3.9231 7.5Z" fill="#fff"/></svg>';

        li.innerHTML = inpbox.value;

        li.setAttribute('data-aos', 'fade-up-right');
        bt.classList.add('btn');
        bt.classList.add('red');

        bt.type = 'button';
        bt.style.display = 'none';


        bt.onmouseenter = ()=>{
            bt.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M8 1.5V2.5H3C2.44772 2.5 2 2.94772 2 3.5V4.5C2 5.05228 2.44772 5.5 3 5.5H21C21.5523 5.5 22 5.05228 22 4.5V3.5C22 2.94772 21.5523 2.5 21 2.5H16V1.5C16 0.947715 15.5523 0.5 15 0.5H9C8.44772 0.5 8 0.947715 8 1.5Z" fill="red"/><path d="M3.9231 7.5H20.0767L19.1344 20.2216C19.0183 21.7882 17.7135 23 16.1426 23H7.85724C6.28636 23 4.98148 21.7882 4.86544 20.2216L3.9231 7.5Z" fill="red"/></svg>';
        };
        bt.onmouseleave = ()=>{
            bt.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M8 1.5V2.5H3C2.44772 2.5 2 2.94772 2 3.5V4.5C2 5.05228 2.44772 5.5 3 5.5H21C21.5523 5.5 22 5.05228 22 4.5V3.5C22 2.94772 21.5523 2.5 21 2.5H16V1.5C16 0.947715 15.5523 0.5 15 0.5H9C8.44772 0.5 8 0.947715 8 1.5Z" fill="#fff"/><path d="M3.9231 7.5H20.0767L19.1344 20.2216C19.0183 21.7882 17.7135 23 16.1426 23H7.85724C6.28636 23 4.98148 21.7882 4.86544 20.2216L3.9231 7.5Z" fill="#fff"/></svg>';
        };
        bt.onclick = ()=>{
            li.classList.add('del-animation');
            setTimeout(()=>{
                ul.removeChild(li);
                count -=1;
                if(localStorage.getItem('lang') == 'az-AZ'){endtext.innerHTML = `Gözləyən ${count} tapşırığınız var`;}
                if(localStorage.getItem('lang') == 'en-US'){endtext.innerHTML = `You have ${count} pending tasks`;}
            },500);
            
        };
        li.onmouseenter = ()=>{
            bt.style.display = 'block';
        };
        li.onmouseleave = ()=>{
            bt.style.display = 'none';
        };
        ul.appendChild(li);
        li.appendChild(bt);

        inpbox.value = '';
    }
}

clearallbtn.addEventListener('click', ()=>{
    const lis = document.querySelectorAll('li');
    for(let i = 0; i<lis.length; ++i){
        lis[i].classList.add('del-animation');
        setTimeout(()=>{ul.removeChild(lis[i])}, 500);
    }
    count = 0;
    if(localStorage.getItem('lang') == 'az-AZ'){endtext.innerHTML = `Gözləyən ${count} tapşırığınız var`;}
    if(localStorage.getItem('lang') == 'en-US'){endtext.innerHTML = `You have ${count} pending tasks`;}
    // endtext.innerHTML = `You have ${count} pending tasks`;
});
