const menu=document.querySelector('.menu');
const boton=document.querySelector('#boton');
const boton1 = document.querySelector('#btnligths');
const menu1=document.querySelector('.animation__lamp--lights');
const menu2=document.querySelector('.text__special--text');
const menu3=document.querySelector('.text__special--by');

const t1 = document.querySelector('#t1');
const t2 = document.querySelector('#t2');
const t3 = document.querySelector('#t3');
const t4 = document.querySelector('#t4');
const t5 = document.querySelector('#t5');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const texto2 = document.querySelector('#texto2');
const texto3 = document.querySelector('#texto3');
const todo = document.querySelector('#todo');
const cabeza = document.querySelector('.cabeza');

var memoria = 0;

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

function modooscuro(){
    if(t1.classList.contains('textdark')){
        t1.classList.remove('textdark');
        t2.classList.remove('textdark');
        t3.classList.remove('textdark');
        t4.classList.remove('textdark');
        // t5.classList.remove('textdark');
        // texto2.classList.remove('textdark');
        // texto3.classList.remove('textdark');
        p1.classList.remove('textdark');
        p2.classList.remove('textdark');
        // p3.classList.remove('textdark');
        todo.classList.remove('fondodark');
        cabeza.classList.remove('cabezanegra');
    }else{
        t1.classList.add('textdark');
        t2.classList.add('textdark');
        t3.classList.add('textdark');
        t4.classList.add('textdark');
        // t5.classList.add('textdark');
        // texto2.classList.add('textdark');
        // texto3.classList.add('textdark');
        p1.classList.add('textdark');
        p2.classList.add('textdark');
        // p3.classList.add('textdark');
        todo.classList.add('fondodark');
        cabeza.classList.add('cabezanegra');
    }
};
function modooscuro1(){
    if(todo.classList.contains('fondodark')){
        t5.classList.remove('textdark');
        t6.classList.remove('textdark');
        texto2.classList.remove('textdark');
        texto3.classList.remove('textdark');
        p3.classList.remove('textdark');
        todo.classList.remove('fondodark');
        t6.classList.remove('fondodark');
        cabeza.classList.remove('cabezanegra');
    }else{
        t5.classList.add('textdark');
        t6.classList.add('textdark');
        texto2.classList.add('textdark');
        texto3.classList.add('textdark');
        p3.classList.add('textdark');
        todo.classList.add('fondodark');
        t6.classList.add('fondodark');
        cabeza.classList.add('cabezanegra');
    }
};


function modooscuro2(){
    memoria=1
        try{
            return modooscuro1();
        }catch{
            return modooscuro();
        }
}

window.onload = function vermodooscuro(){
    if(memoria===1){
        try{
            return modooscuro1();
        }catch{
            return modooscuro();
        }
    }else{
        console.log('Lo lograste')
    }
}

function  traduciendo(){
    console.log(t1.innerHTML);
    if(t1.innerHTML == "¿Quien soy yo?"){
        t1.innerHTML="Who Am I?";
        t2.innerHTML="Hi, I am Juan Camilo Espitia Camacho";
        t3.innerHTML="Developer & Engineer";
        p2.innerHTML="Welcome to my being, I am Juan Camilo Espitia Camacho, Web developer and Reporting & CPU Engineer of General Motors colomotores in the city of Bogotá, Mechanical Engineer of the Francisco José de Caldas District University, passionate about all kinds of bicycles, substitute father of a boy and girl, husband of a great woman. I fell in love with software development at 15 years old, but by chance in life I left it for more than 10 years, at 28 I take it up again and with the help of Platzi and my family I will be one of the best. This site is created to start my journey as a Blogger and serve the community.";
        t4.innerHTML="This is my Stack:";
    }else{
        t1.innerHTML="¿Quien soy yo?";
        t2.innerHTML="Hola, yo soy Juan Camilo Espitia Camacho";
        t3.innerHTML="Desarrollador & Ingeniero";
        p2.innerHTML="Bienvenido a mi ser, soy Juan Camilo Espitia Camacho, Web developer y Reporting & CPU Engineer de General Motors colomotores en la ciudad de Bogotá, Ingeniero Mecánico de la Universidad Distrital Francisco José de Caldas, apasionado por todo tipo de bicicletas, padre sustituto de un niño y una niña, esposo de una mujer grandiosa. Me enamore del desarrollo de software a los 15 años, pero por casualidades de la vida lo deje por mas de 10 años, a mis 28 años lo retomo y con la ayuda de Platzi y mi familia seré uno de los mejores. Este sitio esta creado para empezar mi camino como Blogger y servir a la comunidad.";
        t4.innerHTML="Este es mi Stack:";
    }
}