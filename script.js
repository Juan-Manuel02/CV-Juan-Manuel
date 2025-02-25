document.addEventListener("DOMContentLoaded", function () {
    // Esperar a que el DOM esté listo antes de ejecutar el script
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    if (!themeToggleButton) {
        console.error("El botón de cambio de tema no se encontró en el documento.");
        return; // Detiene la ejecución si el botón no existe
    }

    // Alternar la clase 'dark' al hacer clic
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');

        // Guardar la preferencia en localStorage
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Aplicar el tema guardado
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }
});