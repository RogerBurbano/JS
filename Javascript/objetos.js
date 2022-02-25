
class Producto{
    constructor(id, producto, descripcion, precio){
        this.id = id
        this.producto = producto
        this.descripcion = descripcion
        this.precio = precio
        
    }
    iva(){
    this.precio = this.precio * 17 / 100 + this.precio
  
    }
    precioTotalIva(){
        console.log(`El producto con ref #${this.id} ${this.producto}, Con el IVA  tiene un valor total de ${this.precio} y su descripcion es ${this.descripcion}`);
    }
    precioTotal(){
        console.log(`El producto con ref #${this.id} ${this.producto}, tiene un valor total de ${this.precio} y su descripcion es ${this.descripcion}`);
    }
    
}

const sillaDeRuedas = new Producto(01, 'Silla de Ruedas', 'Para que ponga las nalgas', 10000 );
const camillas = new Producto(02, 'Camillas', 'Para que ponga las nalgas y la espalda', 10000 );
const bastones = new Producto(03, 'Bastones', 'Para que no se vaya contra el mundo', 15000 );
const taloneras = new Producto(04, 'Taloneras', 'Para que no lo maten como Aquiles', 25000 );
const brazer = new Producto(05, 'Brazer tunel carpiano', 'Para que no se le parta la manita', 75000 );



sillaDeRuedas.iva()
sillaDeRuedas.precioTotalIva();
camillas.iva()
camillas.precioTotal();
bastones.precioTotal();
taloneras.precioTotal();
brazer.precioTotal();


//************************************************************************************************************************************************ */


// class Personaje {
//     constructor(nombre, vida, poder){
//         this.nombre = nombre
//         this.vida = vida
//         this.poder = poder
//     }
//     atacar(valor){
//         this.poder = this.poder + valor
//     }
//     recibirAtaque(valor){
//         const nuevaVida = this.vida - valor
//         if (nuevaVida <= 0) {
//             console.log(this.nombre + ' ya está muerto');
//             this.vida = 0
//         } else {
//             this.vida = this.vida - valor
//         }
//     }
//     mostrarDatos(){
//         console.log(`${this.nombre} tiene ${this.vida} vida y ${this.poder} poder`);
//     }
// }

// const hobbit1 = new Personaje('Frodo', 10, 50)
// const elfo = new Personaje('Sam', 8, 60)
// const elfo2 = new Personaje('Dobby', 9, 70)

// elfo.mostrarDatos()
// elfo.atacar(10)
// elfo.recibirAtaque(3)
// elfo.mostrarDatos()

// hobbit1.mostrarDatos()

// elfo2.recibirAtaque(20)
// elfo2.mostrarDatos()