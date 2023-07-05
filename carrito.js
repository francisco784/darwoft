let precio = 0;
let arrayProductos = [];

let sumarCarrito = (nombre, checkeado, valor) => {
  
    if (checkeado) {
        precio+=Number(valor);
        arrayProductos.push(nombre)
    } else{
        precio-=valor
        arrayProductos.pop(nombre)

    }
    console.log(precio)
    console.log(JSON.stringify(arrayProductos))

}












 













//class carrito{
    sumarCarrito8(e){
     e.preventDefault();
     if(e.target.classlist.contains ("agregar carrito")){
        const producto = e.target.parentElement.parentElement;
        this.leerdatosproducto(producto)
     }

    }

}

