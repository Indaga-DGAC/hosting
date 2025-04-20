// Archivo: sidebar.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Función para mostrar/ocultar el sidebar
    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('active');  // Activa/desactiva la clase 'active'
        overlay.classList.toggle('active');  // Muestra/oculta la capa de oscurecimiento
    });

    // Cerrar sidebar si se hace clic en la capa de oscurecimiento
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});
