function showSection(id) {
    // Ocultar todas
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Mostrar la seleccionada
    document.getElementById(id).classList.add('active');
}

// Mostrar una por defecto
window.onload = () => {
    showSection('about');
};