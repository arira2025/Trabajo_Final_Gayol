// mostrará todos los productos, tendrá el renderizado de nuestros productos

// import { productos } from "./productos.js";  esto se reemplaza por el fetch

// necesito que cada boton para cargar carrito tenga enlazado este evento de obtenerCarrito de funciones.js
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerDeCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

// Aqui va toda la lógica del renderizado de las tarjetas
// El DOM..se pone para estar seguros que se modifico toda la estructura HTML
// y el navegador sabe que cosas existen antes de leerel código de JS y
// acceder a algo, para que se invoque luego que el DOM se haya completado de leer
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-capacitaciones");

  const carrito = obtenerDeCarrito();
  // para que la actualizacion del numero de productos se pueda HTMLAnchorElement
  actualizarContador(carrito);

  fetch("./data/productos.json")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTP status: ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then((data) => {
      data.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card");

        const img = document.createElement("img");
        img.src = producto.img;
        img.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;
        //precio.textContent = `$${(producto, precio)}`;

        const boton = document.createElement("button");
        boton.classList.add("btn");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
          agregarAlCarrito(producto);
        });
        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  //    renderizado de tarjeta. Cuando uso FETCH esto pasa al .then (data) porque se extrae de ese archivo ya no mas de productos.js
  // productos.forEach((producto) => {
  //   const tarjeta = document.createElement("article");
  //   tarjeta.classList.add("card");

  //   const img = document.createElement("img");
  //   img.src = producto.img;
  //   img.alt = producto.nombre;

  //   const titulo = document.createElement("h3");
  //   titulo.textContent = producto.nombre;

  //   const precio = document.createElement("p");
  //   precio.textContent = `$${producto.precio}`;
  //   //precio.textContent = `$${(producto, precio)}`;

  //   const boton = document.createElement("button");
  //   boton.classList.add("btn");
  //   boton.textContent = "Agregar al carrito";

  //   boton.addEventListener("click", () => {
  //     agregarAlCarrito(producto);
  //   });
  //   tarjeta.appendChild(img);
  //   tarjeta.appendChild(titulo);
  //   tarjeta.appendChild(precio);
  //   tarjeta.appendChild(boton);

  //   contenedor.appendChild(tarjeta);
  // });
});
