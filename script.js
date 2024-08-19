const lista = document.getElementById("lista");
const inputTexto = document.getElementById("inputTexto");
const botonAgregar = document.getElementById("btnAgregarElemento");

botonAgregar.addEventListener("click", () => {
    let nuevoTexto = inputTexto.value;
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = nuevoTexto;
    lista.appendChild(nuevoElemento);
})