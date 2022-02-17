let frutas = ['platano', 'sandia', 'pera','uva']
// console.log(frutas.length);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);


// for (let i = 0; i <= frutas.length; i++) {
//     console.log(frutas[i]);

// }


//for of recorre datos u objetos iterables

for(let fruta of frutas){   //Fruta seria como cada elemento de array Frutas
    console.log(fruta)
}


let nombreRey = 'Roger Andres'

for( letra of nombreRey ){   //aca leemos las letras de la variable nombreRey
    console.log(letra)
}