

function sumaOrtopedia() {


  let producto1 = parseInt(prompt("Ingrese valor de la silla de Ruedas"));
  let producto2 = parseInt(prompt("Ingrese valor de la Caminador"));
  let producto3 = parseInt(prompt("Ingrese valor de la Muslera"));
  let producto4 = parseInt(prompt("Ingrese valor de la Camilla"));

  let resultado = producto1 + producto2 + producto3 + producto4;

  alert(
    `La suma de ${producto1} + ${producto2} + ${producto3} + ${producto4} es = ${resultado}`
  );

  let otroProduct = prompt("Desea ingresar mas montos? Si / No?");

  if (otroProduct == "si") {
    let producto1 = parseInt(prompt("Ingrese valor de la silla de Ruedas"));
    let producto2 = parseInt(prompt("Ingrese valor de la Caminador"));
    let producto3 = parseInt(prompt("Ingrese valor de la Muslera"));
    let producto4 = parseInt(prompt("Ingrese valor de la Camilla"));

    let resultado = producto1 + producto2 + producto3 + producto4;
    alert(
      `La suma de ${producto1} + ${producto2} + ${producto3} + ${producto4} es = ${resultado}`
    );
    let despedida = "Gracias por los productos";
    alert(despedida);
  } else {
    let despedida = "Gracias por los productos ingresados";
    let impuestos = parseInt((resultado * 17) / 100);
    alert("Vamos a deducir los impuestos de su compra ");
    alert(`El total sacandole los impuestos es de ${impuestos} y ${despedida}`);
   
  }
}

sumaOrtopedia();

// function boing() {
//   console.log("Hola Andrelo te amo ✌");
// }

//////////////////////*///*******************************///////////////*/*/*/*/* */
// function ortopedia(){
//  let sumarVentas = 0;
//  for(i=0; i<5;i++){

// let venta = parseInt(prompt('Ingrese monto de la venta'));

// sumarVentas += venta;
// }
// let interes = prompt('Desea sacar el IVA? Si o No')

// if(interes == 'si'){
//    iva = sumarVentas * 17 /100;
//    alert(`Sacandole el iva al total ${iva} "Buenas tardes" `)

// }else{

//   alert(`El total de las ventas fue ${sumarVentas}`);
//   alert(`se vendieron ${i} Productos`);

// console.log(sumarVentas);
// }

// }

// ortopedia()
