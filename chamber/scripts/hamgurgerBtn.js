const hamburgerElement = document.querySelector("#hamburgerBtn")
const navElement = document.querySelector("#primaryNav")

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Función del Botón de Hamburguesa
//function toggleMenu() {
    //document.getElementById("primaryNav").classList.toggle("open");
    //document.getElementById("hamburgerBtn").classList.toggle("open");
//}

//const x = document.getElementById("hamburgerBtn")
//x.onclick = toggleMenu;//