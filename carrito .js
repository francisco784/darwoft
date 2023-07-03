class carrito{
    // añadir el producto al carrito

    comprarproducto(e){
        e.preventdefault();
        if(e.target.classlist.contains("agregar-carrito")){
            const producto = e.target.parentElement.parentElement;
            this.leerdatosproducto(producto);
        }
    }

}