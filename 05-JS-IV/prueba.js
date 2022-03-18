usuaria={
    nombre:"jasmin",
    apellido:"kasd",
    dni:982354,
    Email:"aikhsakd@gmail.com",
    password:"123456",
    amigos:["Alex","franco"],
    posts:[post={likes:2},
        post={likes:3},
        post={likes:4},
    ],
}
function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
    producto.calcularPrecioDescuento=function(){
        return this.precio-this.precio*this.porcentajeDeDescuento; 
    }
    return producto;
  }
  

      
    
