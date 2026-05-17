alert("JS FUNCIONA");

function showSection(id) {
    const sections = document.querySelectorAll('.section');

    sections.forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}