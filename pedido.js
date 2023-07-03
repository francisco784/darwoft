const carro = new carrito();
const carrito = document.getElementById("carrito");
const productos = document. getElementById("lista-productos")
const listaproductos = document.querySelector("#lista-carrito tbody");

function cargarEventos(){
    productos.addEventListener("click",(e)->{carro.comprarproducto(e)});
}