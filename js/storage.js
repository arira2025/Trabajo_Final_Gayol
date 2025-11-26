// Recordar que el locastorage solo maneja JS
// creo variable que servira como clave
const KEY = "carrito";

// como no tengo el carrito acá creo el parametro carrito
export const guardarCarrito = (carrito) => {
  localStorage.setItem(KEY, JSON.stringify(carrito)); // Guarda clave en valor pasando a JSON
};
export const obtenerDeCarrito = () => {
  return JSON.parse(localStorage.getItem(KEY)) || []; // va al local y busca una clave Carrito.Si no existe dará un array vacío.Lo que tiene lo obtengo pasando de JSON a JS
};

export const vaciarCarrito = () => {
  localStorage.removeItem(KEY);
};
