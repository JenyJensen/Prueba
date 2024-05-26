document.getElementById('formulario-perromatch').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let edad = document.getElementById('edad').value;

    let noniños = document.getElementById('noniños').checked ? "true" : "false";
    let siniños = document.getElementById('siniños').checked ? "true" : "false";
    let nopatio = document.getElementById('nopatio').checked ? "true" : "false";
    let sipatio = document.getElementById('sipatio').checked ? "true" : "false";
    let noperros = document.getElementById('noperros').checked ? "true" : "false";
    let siperros = document.getElementById('siperros').checked ? "true" : "false";

    let modalText = ``;
    if (edad >= 18 && edad < 50 && sipatio == "true" && noniños == "true" && noperros == "true") {
        modalText = `Siempre vas a poder adoptar al compañero del que te enamores. En estas condiciones, podés adoptar a un compañero de cualquier tamaño, ya sea perro o gato, ya que van a ser sólo adultos y el animal, lo cuál es muy favorable. Si sos activo, quizás quieras un perro que lo sea también, o un perro joven o cachorro, para realizar ejercicio juntos. 
        Siempre recuerda que es mejor castarlos, ya que previene enfermedades y no cambiará la personalidad de tu mascota. Y además siempre es bueno pasar mucho tiempo con ellos, y enseñarles algo, un juego o alguna orden, porque los estimula. Ahora puedes ir a conocer nuestros animalitos.`
        
    }
    if (edad >= 18 && edad < 50 && nopatio == "true" && noniños == "true" && noperros == "true") {
        modalText = `Siempre vas a poder adoptar al compañero del que te enamores. En estas condiciones, si vas a adoptar un perro, podés buscar a uno tamaño mediano o chico, ya sea perro o gato, que se adapta a cualquier espacio. Si buscas gatos, seria lo ideal, ya que siempre es mejor acostumbrarlos a permanecer dentro de las casas, para que esten seguros. 
        Siempre recuerda que es mejor castarlos, ya que previene enfermedades y no cambiará la personalidad de tu mascota. Y además siempre es bueno pasar mucho tiempo con ellos, y enseñarles algo, un juego o alguna orden, porque los estimula. Ahora puedes ir a conocer nuestros animalitos.`
        
    }
    if (edad >= 18 && edad < 50 && sipatio == "true" && siniños == "true" && noperros == "true") {
        modalText = `Siempre vas a poder adoptar al compañero del que te enamores. Si buscas perro, adopta uno que se lleve bien con niños o que no sea tan tosco con sus juegos. Los perros regulan su mordida cuando han pasado mas de 60 días con su madre. Si adoptas un gato es mejor que sea gatito, se acostumbrara a los niños de la familia; y si es adulto que se haya acostumbrado a los niños. Siempre enseñale a los niños a convivir con los animales. 
        Siempre recuerda que es mejor castarlos, ya que previene enfermedades y no cambiará la personalidad de tu mascota. Y además siempre es bueno pasar mucho tiempo con ellos, y enseñarles algo, un juego o alguna orden, porque los estimula. Ahora puedes ir a conocer nuestros animalitos.`
        
    }
    if (edad >= 18 && edad < 50 && nopatio == "true" && siniños == "true" && noperros == "true") {
        modalText = `Siempre vas a poder adoptar al compañero del que te enamores. Si buscas perro, adopta uno que se lleve bien con niños o que no sea tan tosco con sus juegos, y que sea mediano, por lo que no tienen patio. Los perros regulan su mordida cuando han pasado mas de 60 días con su madre. Si adoptas un gato es mejor que sea gatito, se acostumbrara a los niños de la familia; y si es adulto que se haya acostumbrado a los niños. Siempre enseñale a los niños a convivir con los animales. 
        Siempre recuerda que es mejor castarlos, ya que previene enfermedades y no cambiará la personalidad de tu mascota. Y además siempre es bueno pasar mucho tiempo con ellos, y enseñarles algo, un juego o alguna orden, porque los estimula. Ahora puedes ir a conocer nuestros animalitos.`
        
    }
    if (edad >= 18 && edad < 50 && sipatio == "true" && siniños == "true" && siperros == "true") {
        modalText = `Siempre vas a poder adoptar al compañero del que te enamores. Si buscas perro, adopta uno que se lleve bien con niños y con otros animales, quizás es mejor que sea cachorro, ya que buscará amoldarse a los demás. Los perros regulan su mordida cuando han pasado mas de 60 días con su madre. Si adoptas un gato es mejor que sea gatito, se acostumbrara a los miembros de la familia; y si es adulto que se haya acostumbrado a los niños. Siempre enseñale a los niños a convivir con los animales. 
        Siempre recuerda que es mejor castarlos, ya que previene enfermedades y no cambiará la personalidad de tu mascota. Y además siempre es bueno pasar mucho tiempo con ellos, y enseñarles algo, un juego o alguna orden, porque los estimula. Ahora puedes ir a conocer nuestros animalitos.`
        
    }
    if (edad >= 18 && edad < 50 && nopatio == "true" && noniños == "true" && siperros == "true") {
        modalText = `Siempre vas a poder adoptar al compañero del que te enamores. Si buscas perro o gato, adopta uno que se lleve bien con otros animales o un animal bebe o joven que se adaptará mejor a otros animales.  
        Siempre recuerda que es mejor castarlos, ya que previene enfermedades y no cambiará la personalidad de tu mascota. Y además siempre es bueno pasar mucho tiempo con ellos, y enseñarles algo, un juego o alguna orden, porque los estimula. Ahora puedes ir a conocer nuestros animalitos.`
        
    }
    if (edad >= 18 && edad < 50 && sipatio == "true" && noniños == "true" && siperros == "true") {
        modalText = `Siempre vas a poder adoptar al compañero del que te enamores. Si buscas perro o gato, adopta uno que se lleve bien con otros animales o un animal bebe o joven que se adaptará mejor a otros animales.  
        Siempre recuerda que es mejor castarlos, ya que previene enfermedades y no cambiará la personalidad de tu mascota. Y además siempre es bueno pasar mucho tiempo con ellos, y enseñarles algo, un juego o alguna orden, porque los estimula. Ahora puedes ir a conocer nuestros animalitos.`
        
    }
    if (edad >= 18 && edad < 50 && nopatio == "true" && siniños == "true" && siperros == "true") {
        modalText = `Siempre vas a poder adoptar al compañero del que te enamores. Si buscas perro o gato, adopta uno que se lleve bien con otros animales o un animal bebe o joven que se adaptará mejor a otros animales o a los niños. Trata de adoptar a un animal pequeño o mediano, que se acostumbrará mejor a pequeños espacios. Cuando no tienes patio, es mejor pasearlo muchas veces en el día.  
        Siempre recuerda que es mejor castarlos, ya que previene enfermedades y no cambiará la personalidad de tu mascota. Y además siempre es bueno pasar mucho tiempo con ellos, y enseñarles algo, un juego o alguna orden, porque los estimula. Ahora puedes ir a conocer nuestros animalitos.`
        
    }
    if (edad > 50 && sipatio == "true" && noniños == "true" && siperros == "true"&& nopatio == "true" && siniños == "true" && noperros == "true") {
        modalText = `Siempre vas a poder adoptar al compañero del que te enamores. Te aconsejamos adoptar algún perro pequeño o mediano, viejito o adulto, que ya tenga sus rutinas, que esté acostumbrado a estar dentro de casa, así se hace menos fuerza y puedes seguir con tus rutinas propias. Si tienes otros perros o niños adopta un cachorro o un animal que se lleve bien con ambos. 
        Siempre recuerda que es mejor castarlos, ya que previene enfermedades y no cambiará la personalidad de tu mascota. Y además siempre es bueno pasar mucho tiempo con ellos, y enseñarles algo, un juego o alguna orden, porque los estimula. Ahora puedes ir a conocer nuestros animalitos.
        No dejes a tus animales mucho tiempo solos, empezarán a romper cosas por ansiedad o para sentir tu olor.`
    }
document.getElementById('modal-text').innerHTML = modalText;

let modal = document.getElementById("modal");
modal.style.display = "block";

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
})