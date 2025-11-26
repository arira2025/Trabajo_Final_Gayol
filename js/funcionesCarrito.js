// recordar que el archivo que viene del FROM termine en .js
import { guardarCarrito, obtenerDeCarrito, vaciarCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  // acá me traigo lo que el Localstorage trajo, algo vacío o algun producto
  const carrito = obtenerDeCarrito(); //   o sea que lo pasó a JSON  y lo obtengo
  carrito.push(producto); // algo que manipula nuestra "database"  del Local
  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarMensaje("Producto agregado al carrito");
};

// Crear el evento
// INDICE>porque quiero agregar un elemento cuando estoy dentro de las tarjetas
//  de producto, tomar el indice de ese producto que está en el carrito y borrarlo.
// Se usa método SLICE que necesita INDICE
export const eliminarProducto = (indice) => {
  const carrito = obtenerDeCarrito();
  // Este metodo modifica los arrays, entonces hay que indicarle a partir de qué indice,
  // en este caso solo en uno, no en muchos lugares
  carrito.splice(indice, 1);
  guardarCarrito(carrito);
  actualizarContador(carrito);
};

export const vaciarTodoCarrito = () => {
  vaciarCarrito(); //  length vacio
  actualizarContador([]);
  mostrarMensaje("Carrito vaciado ");
};
