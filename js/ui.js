// Este archivo actualiza el contador

// como no tengo el carrito acá creo el parametro carrito
export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
};

export const mostrarMensaje = (texto) => {
  alert(texto);
};
