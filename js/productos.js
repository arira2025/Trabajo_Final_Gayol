//creamos un array. Con export porque lo quiero usar en archivos que
// trabajen con lista de productos (por ej el index.html lo importará)
// y para que no se necesite ver en otros archivos.Usa rutas absolutas, sin .
// porque se usarán en dos html que están en diferentes ubicaciones
export const productos = [
  { id: "1", nombre: "Curso 1", img: "./img/plan.jpg", precio: 120000 },
  { id: "2", nombre: "Curso 2", img: "./img/evaluacion.jpg", precio: 130000 },
  { id: "3", nombre: "Curso 3", img: "./img/game.jpg", precio: 140000 },
  { id: "4", nombre: "Curso 4", img: "./img/3D.jpg", precio: 160000 },
  { id: "5", nombre: "Curso 5", img: "./img/business.jpg", precio: 110000 },
  { id: "6", nombre: "Curso 6", img: "./img/DataScience.jpg", precio: 100000 },
];
