let imagenes = ["imagen/Empoderada.jpeg",
    "imagen/snoopy corazon.jpg",
    "imagen/Ternu con gorra.jpeg"
];
document.Imagen.src = imagenes [0];
let flechaAnterior = document.querySelector(".flechaant");
let flechaSiguiente = document.querySelector(".flechasig");
let contador = 0;

function moverDerecha(){
    contador++;
    if(contador > imagenes.length - 1)
    {
        contador = 0
    }
    document.Imagen.src = imagenes [contador]
}
flechaSiguiente.addEventListener("click", moverDerecha)

function moverIzquierda(){
    contador--;
    if(contador < 0)
    {
        contador = imagenes.length - 1;
    }
    document.Imagen.src = imagenes [contador]
}
flechaAnterior.addEventListener("click", moverIzquierda)

let botonInterruptor = document.querySelector("#estado");
function interruptor