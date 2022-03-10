//alert= es una función que envia un mensaje al usario a traves del navegador, en forma de alerta-se dispara

//console.log: imprimir dentro de la consola un mensaje algún mensaje u operación, por lo general esto utiliza para pruebas.

/*alert("Hola mundo");
console.log("Hola mundo");*/

/* 

tipo de variables:
almacena un espacio en memoria-se guarda para utilizar en algún momento

String: a tipo de cadenas de texto:palabras-caracteres.
Number: son de tipo numerico, entero o reales.
Boolean: son valores falsos o verdaderos.

tipo de variables-declarar javascript 

var:almacena un espacio en memoria-global-se va utilizar en todo el codigo
let:almacena un espacio en memoria-solo va funcionar en un bloque
const:almacena un espacio en memoria- nova cambiar su valor-estatica

*/

//Los tipo string van encerrados en doble comilla: ""
//Los tipo number van libres de comillas

/*alert("El nombre digitado es: " + nombre);
alert("La edad es: " + edad);*/

/*condicionales: if quiere decir si, es un condicional, va evaluar algo y devolver un resultado.
es importante conocer los operadores logicos: 
mayor:>
menor:< 
Mayor igual >= 
Menos igual <=
igual= =
igual igual ==
===
diyuntiva: || o, or : uno de los dos debe ser verdaderos.
adjunción: && y- ambos valores deben ser verdaderos.
hay que ser cuidadosos en las comparaciones, procurar que sean == === 
si queremos solicitarle al usuario un dato vamos a utilizar la propiedad prompt-es similar al alert, en vez de informar va solicitar
*/

/*var nombre = prompt("Digite su nombre");
var edad = prompt("Digite su edad");

if(edad == 18){
 console.log("Tienes 18 años");
}

else if(edad == 22) {
    console.log("Tienes 22 años");
}

else {
    console.log("No tienes ni 18 ni 22 años");
}

console.log("el nombre digitado es " +nombre);*/


//simular un login

/*let usuario="batman";
let pass=123;

let usuarioSolicitado = prompt("Digite el usuario");
let passSolicitado = prompt("Digite la constraseña");

if(usuario == usuarioSolicitado && pass == passSolicitado){
    console.log("Usuario correcto, Bienvenido al sistema");
}

else if(usuario != usuarioSolicitado && pass != passSolicitado ) {
    console.log("Tanto como contraseña y usuario estan mal");
}

else if(usuario != usuarioSolicitado ){
    console.log("fallaste en el usuario");
}

else if(pass != passSolicitado) {
    console.log("Fallo en la contraseña");
}*/



//carrito de compra chiquito

/*var porcentajeDescuento=0;
var descuento=0;
var total = 0;
var articulo = prompt("Digite el nombre del producto");
var precioArticulo = prompt("Digite el valor del articulo");

if(precioArticulo>=10000 && precioArticulo <= 20000 ){
    porcentajeDescuento=0.10;
    descuento=precioArticulo*porcentajeDescuento;
    total=precioArticulo-descuento;

    alert("Articulo con descuento con el 10%");
    alert("el precio inicial del articulo es de " +precioArticulo);
    alert("el descuento aplicado es de " +descuento);
    alert("total a pagar es de " +total);
}

else if(precioArticulo>20000 && precioArticulo <= 30000){
    porcentajeDescuento=0.30;
    descuento=precioArticulo*porcentajeDescuento;
    total=precioArticulo-descuento;
    alert("Articulo con descuento con el 30%");
    alert("el precio inicial del articulo es de " +precioArticulo);
    alert("el descuento aplicado es de " +descuento);
    alert("total a pagar es de " +total);

}

else {

    alert("Articulo sin descuento, suerte");
    alert("total a pagar es de " +precioArticulo);

}*/
/*let nombreLet= "Alvaro";
if (5>1) {
    var nombreVar= "Alvaro";
    
}

if (2>1) {
     nombreLet= "Luis";
    
}


 nombreVar = "pedro"
 nombreLet = "pedro"

const nombreConst= "Alvaro";
nombreConst = "pedro"

alert("Var "+nombreVar);
alert("let "+nombreLet);*/





