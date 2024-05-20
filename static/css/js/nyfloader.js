document.addEventListener("DOMContentLoaded", function () {
    // Cargar encabezado
    fetch('fragments/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-placeholder').innerHTML = html;
        });
        fetch('fragments/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        });
        fetch('fragments/slider.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('slider-placeholder').innerHTML = html;
            initializeSlider();
        });
}
)
function initializeSlider() {
    let imagenes = [
        "../static/css/img/Empoderada.jpeg",
        "../static/css/img/snoopy corazon.jpg",
        "../static/css/img/Ternu con gorra.jpeg"
    ];

    let imagenElement = document.querySelector("[name='Imagen']");

    // Check if the image element is found
    if (imagenElement) {
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
        /*
        let botonInterruptor = document.querySelector("#estado");
        botonInterruptor.addEventListener("click", function() {
            let slider = document.querySelector(".slider");
            if (slider.style.display === "none" || slider.style.display === "") {
                slider.style.display = "flex";
            } else {
                slider.style.display = "none";
            }
        });*/
    } else {
        console.error("Image element with name 'Imagen' not found.");
    }
}