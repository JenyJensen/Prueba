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
