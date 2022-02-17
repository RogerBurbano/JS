let oopcionUser = prompt(`
 
Elija una opción:
 1: Libros
 2: Peliculas
 3: Juegos 
 `);

switch (oopcionUser) {
  case "1":
    console.log("Principito");
    break;
  case "2":
    console.log("Matrix");
    break;
  case "3":
    console.log("GTAV");
    break;
    default: 
    console.log('Opcion no valida')
    break;
}

