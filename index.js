const menu=document.querySelector('.menu');
console.log(menu);
const boton=document.querySelector('#boton');
console.log(boton);

boton.addEventListener('click', hideShow);
function hideShow(){
    if(menu.classList.contains('menu_aparece')){
        menu.classList.remove('menu_aparece');
    }else{
        menu.classList.add('menu_aparece');
    }
}

