const menu=document.querySelector('.menu');
const boton=document.querySelector('#boton');
const boton1 = document.querySelector('#btnligths');
const menu1=document.querySelector('.animation__lamp--lights');
const menu2=document.querySelector('.text__special--text');
const menu3=document.querySelector('.text__special--by');



boton.addEventListener('click', hideShow);
function hideShow(){
    if(menu.classList.contains('menu_aparece')){
        menu.classList.remove('menu_aparece');
    }else{
        menu.classList.add('menu_aparece');
    }
};

boton1.addEventListener('click', luces);
function luces(){
    if(menu1.classList.contains('prender')){
        menu1.classList.remove('prender');
    }else{
        menu1.classList.add('prender');
    }
    if(menu2.classList.contains('prender')){
        menu2.classList.remove('prender');
    }else{
        menu2.classList.add('prender');
    }
    if(menu3.classList.contains('prender')){
        menu3.classList.remove('prender');
    }else{
        menu3.classList.add('prender');
    }
};

