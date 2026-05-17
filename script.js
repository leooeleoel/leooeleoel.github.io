function showSection(id) {
    const sections = document.querySelectorAll('.section');

    sections.forEach(sec => {
        sec.classList.remove('active');
    });

    const selected = document.getElementById(id);
    if (selected) {
        selected.classList.add('active');
    }
}

// Mostrar por defecto
window.onload = () => {
    showSection('about');
};