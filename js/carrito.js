import { obtenerDeCarrito } from "./storage.js";
import { eliminarProducto, vaciarTodoCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

// esta función es para crear constante y poder usar metodo REDUCE
const calcularTotal = (carrito) => {
  return carrito.reduce((total, producto) => total + producto.precio, 0);
};

const renderizarCarrito = () => {
  //Leemos cantidad de productos en carrito para mostrar
  const carrito = obtenerDeCarrito();
  actualizarContador(carrito);

  //Accedemos al nodo donde vamos a mostrar las tarjetas de producto
  const contenedor = document.getElementById("contenedor-carrito");
  // Botones de acciones
  const divAcciones = document.getElementById("acciones-carrito");
  const resumen = document.getElementById("resumen-carrito");
  //Esta lineas limpian los contenedor antes de renderizar tarjetas y botones
  contenedor.innerHTML = "";
  divAcciones.innerHTML = "";
  resumen.innerHTML = ""; //limpio resumen

  //❌Si no hay productos en el carrito mostramos un mensaje
  if (!carrito.length) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje-carrito-vacio");
    mensaje.textContent = "No hay productos en el carrito";
    contenedor.appendChild(mensaje);

    //para mostrar el 0 cuando el carrito está vacio
    const totalElement = document.createElement("h3");
    totalElement.textContent = `Total: $0`;
    resumen.appendChild(totalElement);
    return; //⚠️salimos de la funcion para no intentar renderizar productos
  }

  //✅Si hay productos en el carrito los renderizamos
  //💡El forEach nos puede dar el indice del producto en el array.
  // No se hace un Fetch porque la info que necesito no viene de productos.json. es dinámico,le tengo que pedir al localstorage
  carrito.forEach((producto, indice) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");

    const img = document.createElement("img");
    img.src = `../${producto.img}`;
    img.alt = producto.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn");
    btnEliminar.classList.add("btn-eliminar-carrito");

    //💡Aca nos sirve el indice, para poder pasarselo a la funcion de eliminar
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      eliminarProducto(indice);

      //⚠️Importante! Volver a renderizar el carrito para actualizar la vista,
      // ya que sino quedaria con el producto eliminado porque solo borramos del storage
      renderizarCarrito();
    });

    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(btnEliminar);

    contenedor.appendChild(tarjeta);
  });

  const btnVaciar = document.createElement("button");
  btnVaciar.classList.add("btn");
  btnVaciar.classList.add("btn-vaciar-carrito");
  btnVaciar.textContent = "Vaciar carrito";
  btnVaciar.addEventListener("click", () => {
    vaciarTodoCarrito();

    //⚠️Importante! Volver a renderizar el carrito para actualizar la vista,
    // ya que sino quedaria con los productos viejos porque solo borramos del storage
    renderizarCarrito();
  });

  divAcciones.appendChild(btnVaciar);

  /* -------------------------------------------------------------------------- */
  /*                                    Calcular total explicado en detalle en apuntes                                   */
  /* -------------------------------------------------------------------------- */
  const total = calcularTotal(carrito);
  const totalElement = document.createElement("h3");
  totalElement.textContent = `La suma de sus pedidos: $${total}`;
  totalElement.style.cssText =
    "font-size: 2.5rem; color #004987; margin: 2rem 0; text-align: center;";
  resumen.appendChild(totalElement);
};

document.addEventListener("DOMContentLoaded", renderizarCarrito);
