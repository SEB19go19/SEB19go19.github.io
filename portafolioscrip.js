const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#botonParaCerrar");

abrir.addEventListener("click", function () {
    nav.classList.add("visible");
}
);

cerrar.addEventListener("click", function () {
    nav.classList.remove("visible");

});
