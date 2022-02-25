function capturar() {
  // funcion que va con el onclick
  // console.log('Hola');

  function Producto(nombre, stock) {
    // funcion constructor
    this.nombre = nombre;
    this.stock = stock;
  }
  let nombreCapturado = document.getElementById("nombre").value; // llamamos al id para unirlo al JS, guardamos lo que se ingresa
  let stockCapturado = document.getElementById("stock").value;
  // console.log(stockCapturado);

 nuevoProducto = new Producto(nombreCapturado, stockCapturado); // aca colocamos los valores , pero como ya los capturamos, colocamoas las variables
  console.log(nuevoProducto);
  agregar();
}
// nuevoProducto lo vamos a transformar en un array, si vamos a ingresar Varios usuarios necesitamos capturarlos y ordenarlos
let baseDatos = [];
function agregar() {
  // creamos la funcion agregar, para que se ejecute cuando le damos click al boton Agregar y la colocamos al final de constructor para que la llame cuando ya se capturaron nombre y stock
  baseDatos.push(nuevoProducto)
//   console.log(baseDatos);
  document.getElementById('tabla').innerHTML +=  `<tbody><td>${nuevoProducto.nombre} </td><td>${nuevoProducto.stock}</td></tbody>`;
  
};


