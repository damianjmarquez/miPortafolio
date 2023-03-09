

/*cuando hago click .button .nav desaparece se le llama tooggle de la clase activo*/

const button = document.querySelector(".button");
const nav = document.querySelector(".nav");

button.addEventListener("click",()=>{
    nav.classList.toggle("activo")
})


