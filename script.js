const boton = document.getElementById('boton')
const nav = document.getElementById('nav')

boton.addEventListener("click", () => {
    nav.classList.toggle("active");
    boton.classList.toggle("active");
})