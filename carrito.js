let precio = 0;
let arrayProductos = [];

let sumarCarrito = (nombre, checkeado, valor) => {
console.log(nombre, checkeado, valor)
    if (checkeado) {
        precio += Number(valor);
        arrayProductos.push(nombre)
    } else {
        precio -= valor
        arrayProductos.pop(nombre)

    }
    console.log(precio)
    console.log(JSON.stringify(arrayProductos))
    sumarPrecios()
}

sumarPrecios = () => {
   let articuloscarrito1 = document.getElementById("articuloscarrito");
    articuloscarrito1.innerHTML = "" +  arrayProductos.join(",");

    let totalcarrito1 = document.getElementById("PLA");
    totalcarrito1.textContent = "total; \n" +   suma;

    const textocarrito1 = document.getElementById("textocarrito");
    if (articuloscarrito1.length === 0){
        textocarrito1.textContent= "el carrito se encuentra vacio";
    } else{
      textocarrito1.textContent = "";

    }
}
//desplegar div

let botondesplegar1 = document.getElementById("botondesplegar");
let contenidodesplegable1 = document.getElementById("contenidodesplegable");

botondesplegar1.addEventListener("click", () => {
   console.log("no se muestra nada")
    if (contenidodesplegable1.style.display === "none") {
        contenidodesplegable1.style.display = "block";

    } else {

        contenidodesplegable1.style.display = "none";
    }

});

   






























