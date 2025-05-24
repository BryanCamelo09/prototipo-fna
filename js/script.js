// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Prototipo del FNA cargado. ¡Listos para la interactividad!');

    // Ejemplo: Añadir un efecto de click a los botones (aunque Bootstrap ya tiene feedback visual)
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // event.preventDefault(); // Descomenta si no quieres que el botón haga su acción por defecto (ej. ir a otro enlace)
            console.log(`Botón clickeado: ${button.textContent.trim()}`);
            // Aquí podrías añadir animaciones, mostrar mensajes, etc.
        });
    });

    // Puedes añadir más lógica aquí para las páginas de servicios, detalle, formularios, etc.
});