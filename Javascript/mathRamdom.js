let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);

let vidas = 3
let numeroUser = parseInt(prompt('Adivina el numero del 1 al 10'))

while (numeroMaquina !== numeroUser && vidas > 1) {

    let mensaje = (numeroMaquina > numeroUser) ? 'El numero maquina es mayor ': 'El numero maquina es menor' //Operador ternario

    console.log('Te equivocaste ' + mensaje);
    numeroUser = parseInt(prompt('Adivina el numero del 1 al 10'))
    vidas --
}

if (numeroMaquina  === numeroUser) {
    console.log('Ganaste');
}else{
    console.log('Perdiste');
}

