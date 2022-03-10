//alert= es una función que envia un mensaje al usuario a traves del navegador, en forma de alerta.
//console.log = imprime dentro de la consola algún mensaje que asignemos, o también se utiliza para realizar pruebas
//las anteriores son dos maneras de hacer pruebas, pero la diferencia es que el alert interactua con el usuario-
// alert("Hola mundo");
// console.log("hola mundo");

/*Tipo de variables 
Tenemos variables tipo: 
String: son de tipo texto: ejemplo caracteres y letras
Number: Son de tipo númerico, ejemplo: 1 2  1.2
Boolean:  son de dos valores false o true

como diferenciamos los de tipo texto con los del tipo númerico, muy facil: los texto van encerrados en "" y los numero van sin las comillas
Tenemos 3 tipo de variable
var: 
let 
const
*/
/*var nombre="Alvaro"
var edad = 33;
var edad = prompt("Digite su edad");

if(edad===33){
    alert("Tiene 33 años")

}

else if(edad===34){

}


else {
    alert("no tiene ni 33 ni 34")
}*/


// var usuario="Spiderman";
// var pass="123456";

// var usuarioSolicitado = prompt("digite el usuario")
// var passSolicitado = prompt ("Digite la contraseña")

// if(usuario===usuarioSolicitado && pass===passSolicitado ) {
//     alert("Bienvenido al sistema")
// }

// else if(pass!=passSolicitado || usuario!==usuarioSolicitado){
//     alert("Ambos estan mal")
// }

// else if(usuario!=usuarioSolicitado){
//     alert("El usuario esta mal")
// }

// else if(pass!=passSolicitado){
//     alert("la contraseña  esta mal")
// }

// else{
//     alert("chao instruso")
// }

/*var numero = 1;

var numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1: 
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';                
}

console.log(numeroTexto);*/

/*var precioArticulo= prompt("Digite valor");
var descuento = 0;
var total = 0;


if(precioArticulo >= 10000 && precioArticulo >= 15000){
    descuento = precioArticulo * 0.5;
    total = precioArticulo - descuento;

  
}

else if(precioArticulo < 10000){
    descuento = precioArticulo * 0.9;
    total = precioArticulo - descuento;

}

else {
    console.log("no hay descuento")
}

console.log("El valor a pagar es de :" + total);
console.log("El descuento :" + descuento);
*/

/*var opcion= true;
const variable3="Alvaro";

if (opcion) {
    console.log("Soy verdadero");
    let variable1="Alvaro";
    var variable2="Alvaro";
    
}

else {
    console.log("Soy falso");
}

variable1="Variable 1:Alexis";
variable2="Alexis";
//variable3="Alexis";

console.log(variable1);
console.log(variable2);
console.log(variable3);*/

// let contador =1;
// while(contador <= 3){
//     console.log(contador)
//     var precioArticulo= prompt("Digite valor");
//     console.log(precioArticulo)
//     acum=precioArticulo+acum
//     contador++;
// }

/*var palabra= "";
while(palabra!="alvaro"){
    palabra= prompt("Digite palabra");
    if (palabra=="alvaro") {
        
        console.log("palabra correcta")
    }
}*/

/*let contador =1;
let tabla=2*/

// let contador=1;
// let limite = prompt("Digite el limite");
// let tabla=prompt("Digite el número que va multiplicar")

// while(contador <= limite){
//     let multi=tabla*contador;
//     console.log(tabla+" X "+contador +" = " + (multi) )
//     document.write(tabla+" X "+contador +" = " + (multi)+"<br>");
//     contador++;

// }

// for(let i=1; i<=limite; i++){
//     let multi=tabla*contador;
//     console.log(tabla+" X "+contador +" = " + (multi) )
//     document.write(tabla+" X "+contador +" = " + (multi)+"<br>");
// }

// let num=1;
// let dato=0;

// while(num<10){

//     dato=prompt("Digite un número mayor a 10");
//     num=dato;
//     document.write("Número "+ num +"<br>");

//     if(num>10){
//         document.write("Fin del programa");
//     }

// }


// let num=1;
// let dato="";
// while(dato!="alvaro"){

//     dato=prompt("Digite el santo y seña");
//     document.write("palabra "+ dato +"<br>");

// }

// document.write("Fin del programa");

/*let cantidad=prompt("Digite la cantidad");
let num=1;
let prom=0
let acum=0
while(num<=cantidad){

    let nombre=prompt("Nombre");
    let precio=prompt("Digite precio");

    console.log(nombre)
    console.log(precio)

    acum = (parseInt(precio)+acum);
    //prom += (parseInt(precio));

    prom=(acum/num);

   
    num++
}
console.log("acumulado "+acum);
console.log("promedio "+prom);*/

/*let acum=0
let cantidad=prompt("Digite la cantidad");
for(let i = 0; i < cantidad; i++){

    let nombre=prompt("Nombre");
    let precio=prompt("Digite precio");

    console.log(nombre)
    console.log(precio)
    acum = (parseInt(precio)+acum);
    prom=(acum/cantidad
    );

}

console.log("acumulado "+acum);
console.log("promedio "+prom);*/


/*let candidatoA="";
let candidatoB="";
let voto=0;
let validar=0;
let totalVotos=0;
let totalVotosCandidatoA=0;
let totalVotosCandidatoB=0;
let cantidadVotantes=prompt("Digite la cantidad de votantes");

for(let i=0; i < cantidadVotantes; i++){
  
        voto=prompt("Digite el candidato: \n 1.Candidato A \n 2.Candidato B");
        num=voto;

        if(voto==1){
            totalVotosCandidatoA=totalVotosCandidatoA+1;
         }
    
         else if(voto==2){
            totalVotosCandidatoB=totalVotosCandidatoB+1;
         }
    
         totalVotos=totalVotosCandidatoA+totalVotosCandidatoB;
    
}

if (totalVotosCandidatoA>totalVotosCandidatoB) {
    alert("gano candidato A con " +totalVotosCandidatoA)
    
}

else if (totalVotosCandidatoA==totalVotosCandidatoB) {
    alert("Empate")
    
}

else{
    alert("gano candidato b con " +totalVotosCandidatoB)

}

alert("total votos " +totalVotos)*/





// var respuesta = "BOGOTA"; 	 	 
// var acierto = false; 	 	 
// var contador = 0;	 	 
// while(contador < 3 && acierto === false) {	 	 
//  var respUsuario = prompt("Capital de Colombia: ");	 	 
//  if (respUsuario.toUpperCase() === respuesta) { 	 	 
//   acierto = true; 	 	 
//  document.write("Correcto, has acertado");	 	 
//  }	 	 
//  contador++;	 	 
// }	 	 
// if (acierto==false) 
// {
// document.write("Lo sentimos, has consumido tus 3 intentos")
// }; 
// console.log(contador)


/*do {
    console.log(tabla+" X "+contador2 +" = " + (tabla*contador2) )
    contador2++;

} while (contador2 <= 0) 
    
var x=0;

for (x = 1; x <= 10; x++)
{
	var tabel=5*x;
	
	document.write(5+"x"+x+"="+ tabel + "<br>");

}*/

/*Los ciclos for son utilizados para ciclos que ya está definido el número de iteraciones, y los ciclos while sirven mejor para ciclos donde el número de iteraciones puede variar dependiendo de dos factores:

de los valores que se “comparan” de manera inicial, pudiendo ser que, debido a la condición no se lleguen a ejecutar y

las operaciones que se realicen dentro del mismo ciclo.

En este caso particular no habría diferencia solo varía el número de líneas de código.

Espero te haya resuelto la duda.*/ 

/* Usamos while cuando no sabemos cuanto dura el bucle, usamos for cuando si sabemos cuando dura el bucle, el for tambien se usa para recorrer los array*/



/*let mes=prompt("digite mes");
let op = parseInt(mes)
switch (op) {
    case 1:
        alert("el mes es enero")
        break;

        case 2:
            alert("el mes es febrero")
            break;

    default:
        alert("nnn")
        break;
}*/

for(let i=0; i < 2; i++){
  
    let plata=1000
    
    if (2>1) {

        plata-=500
        alert(plata);
        
    }

    alert(plata);

}