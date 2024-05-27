document.addEventListener("DOMContentLoaded", function() {
    let imagenes = [
        "../static/css/img/Empoderada.jpeg",
        "../static/css/img/refugio.jpg",
        "../static/css/img/Ternu con gorra.jpeg"
    ];
    
    let imagenElement = document.querySelector("[name='Imagen']");
    imagenElement.src = imagenes[0];
    
    let flechaAnterior = document.querySelector(".flechaant");
    let flechaSiguiente = document.querySelector(".flechasig");
    let contador = 0;
    
    function moverDerecha() {
        contador++;
        if (contador > imagenes.length - 1) {
            contador = 0;
        }
        actualizarImagen('right');
    }
    
    function moverIzquierda() {
        contador--;
        if (contador < 0) {
            contador = imagenes.length - 1;
        }
        actualizarImagen('left');
    }
    
    function actualizarImagen(direccion) {
        imagenElement.classList.remove('slide-left', 'slide-right');
        
        void imagenElement.offsetWidth; // Reflow trick to restart the animation
        
        if (direccion === 'right') {
            imagenElement.classList.add('slide-right');
        } else {
            imagenElement.classList.add('slide-left');
        }
        imagenElement.src = imagenes[contador];
    }
    
    flechaSiguiente.addEventListener("click", moverDerecha);
    flechaAnterior.addEventListener("click", moverIzquierda);
    
    let botonInterruptor = document.querySelector("#estado");
    botonInterruptor.addEventListener("click", function() {
        let slider = document.querySelector(".slider");
        if (slider.style.display === "none" || slider.style.display === "") {
            slider.style.display = "flex";
        } else {
            slider.style.display = "none";
        }
    });
});
