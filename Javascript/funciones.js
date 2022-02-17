

// un parametro con return************************************************
function saludar(nombreRey){

     return ('hola ' + nombreRey) //(`Hola señor ${nombreRey}`)
     


}
  console.log(saludar('Roger')); 

  // dos parametros con return*************************************************

  
  
  
  function suma (n1, n2){
        return parseInt(n1) + parseInt(n2)
  }
  console.log(suma(7, 7))


//Suma dinamica*********************************************************************************

  function sumar (n1, n2){
    return parseInt(n1) + parseInt(n2)
  }
 let numUno = prompt('Ingrese un numero')
 let numDos = prompt('Ingrese un nuevo numero')

 console.log(sumar(numDos, numUno)) // no importa el nombre , es el parametro 