//boton flotante en el footer
const btnFlotante = document.querySelector('.btn-flotante');

//obtener imagen hero
const imagenHero = document.querySelector('.hero');
//iniciar la variables
let i = 0;
let tiempo = 0;

//arreglo con imagenes de fondo
const imagenes = ['arriba2.jpg', 'arriba.jpg'];

setInterval(() => {
    imagenHero.style.backgroundPositionY = '-'+tiempo+'px';

    if(tiempo > 30){
        tiempo = 0;
        imagenHero.style.backgroundImage = `url(../img/${imagenes[i]})`;
        if(i === imagenes.length - 1){
            i = 0;
        }else{
            i++;
        }
    }else{
        tiempo+=1;
    }
    
}, 100);

btnFlotante.addEventListener('click', (e)=>{
    //al ser un enlace, la pagina lo intentara abrir. con "e.preventDefault()" eso se evita
    e.preventDefault();
    
    const footer = document.querySelector('#footer');

    if(footer.classList.contains('activo')){
        //si contiene la clase haz esto
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.innerText = 'Idioma y Moneda';
    }else{
        //si no lo contiene, agregar clase
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.innerText = 'X Cerrar';
    }
});
