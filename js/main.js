 // Mostrar y ocultar menú para moviles
 const menu_movil = document.querySelector(".menu-movil");
 const boton_hamburguesa = document.querySelector(".header__acciones__menu > .material-icons");
 const boton_cerrar_menu = document.querySelector(".menu-movil__header__cerrar > .material-icons");

 const cerrarAbrirMenu = () => {
     if(menu_movil.classList.contains('ocultar-menu-movil')) {
         menu_movil.classList.remove('ocultar-menu-movil');
     } else {
         menu_movil.classList.add('ocultar-menu-movil');
     }
 }
 boton_hamburguesa.addEventListener("click", cerrarAbrirMenu);
 boton_cerrar_menu.addEventListener("click", cerrarAbrirMenu);


 const temarioComponente = (temario) => {

    let icono = temario.children[0].children[0].children[0];

    const lista = temario.children[1];
    const contendorElementos = lista.children[0];
    
    let angulo = 0;
    
    let mostrar = (event) => {
        angulo = angulo == 90 ? 0 : 90; 
        if( !lista.getAttribute('style') ) {
            lista.setAttribute('style', `height: ${contendorElementos.offsetHeight}px`);
        } else {
            lista.removeAttribute('style');
        }

        icono.style.transform = `rotate(${angulo}deg)`;
    }
    icono.addEventListener('click', mostrar); 

    mostrar()

 } 
