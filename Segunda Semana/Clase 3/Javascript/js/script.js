/*
funcion es guardar un espacio en memoria
var es ser global
let
const: que no van a cambiar su valor
*/

/*var nombreVar = "alvaro";
var nombreVar = "Alexis";

let nombreLet= "pepe";
nombreLet= "juanito";

const nombreCons= "andreita";
nombreCons= "paula";

alert(nombreVar);
alert(nombreLet);
alert(nombreCons);*/


/*if(4>3) {
    alert("4 es mayor que 3")
}*/

/*let vehiculo = prompt("Digite el tipo de vehiculo");
let modelo=prompt("Digite que modelo es su vehiculo");
let placa= prompt("Digite la placa de su vehiculo");
let valorSeguro=0;

let modeloConversion = parseInt(modelo);

if(vehiculo=="moto"){
    valorSeguro=600000;
    alert("Debes pagar un valor de " +valorSeguro);
}

else if(vehiculo=="carro"){
    valorSeguro=500000;
    alert("Debe pagar un valor de " +valorSeguro)
}

 if (modeloConversion>2010){
    alert("Se gano una lavada gratis")
}*/

//ciclo while, es una estructura que cumple la función del mientras, es un ciclo-bloque, cuando la condición se rompa deja pasar

/*let contador=1;
let tabla=2;
while(contador<=10){

    //alert(tabla + " x " + contador + " = " + (tabla * contador));
document.write(tabla + " x " + contador + " = " + (tabla * contador)+"<br>");
console.log(tabla + " x " + contador + " = " + (tabla * contador));
contador++;
}
alert("Fin del ciclo");*/

/*let palabra ="";
while(palabra.toLowerCase() != "alvaro"){
    palabra= prompt("Digite la palabra");
    if(palabra.toLowerCase()=="alvaro"){
        document.write("Palabra correcta")
    }
}*/

/*let contador=1;
let tabla=prompt("Digite la tabla que desea multiplicar");
let limite= prompt("Digite un limite")
while(contador<= parseInt(limite)){

    //alert(tabla + " x " + contador + " = " + (tabla * contador));
document.write(tabla + " x " + contador + " = " + (tabla * contador)+"<br>");
console.log(tabla + " x " + contador + " = " + (tabla * contador));
contador++;
}*/


/*let contador=1;
let limite= prompt("Digite la cantidad de articulos");
let acum=0;
let prom=0;
while(contador<= parseInt(limite)){
let articulo = prompt("Digite el articulo que va comprar");
let precio= parseInt(prompt("Digite un precio"));

document.write(articulo +"<br>");
document.write(precio +"<br>");

console.log(articulo);
console.log(precio);

acum=(precio+acum);
prom=acum/contador;
//acum+=precio;

document.write("El total acumulado es " +acum +"<br>");

document.write("El promedio es: " +prom +"<br>");
console.log(acum);

contador++;
}*/

/*let respuesta ="BOGOTA";
let acierto= false;
let contador=0;

while(contador < 3 && acierto ===false){
    let respuestaUsuario = prompt("¿cual es la capital de Colombia?")
    if(respuestaUsuario.toUpperCase()===respuesta){
        acierto= true;
        document.write("Correcto, has acertado");
    }
     contador++;
}
if(acierto==false){
    document.write("Se acabaron los intentos solo eran 3");
}*/

/* 
Ciclo for: tambien es un recorrido, lo conociamos con el para. basicamente realiza lo mismo que el while- utilizado en arreglos.

*/
/*let tabla=8;
let limite=10;

for(let i=1; i <= limite; i++){
    let multi= tabla*i;
    console.log("Soy un for");
    document.write("tabla del "+tabla + " x " + i + " = " + multi + "<br>");

}*/

let voto=0;
let totalDeVotosCandidatoA=0;
let totalDeVotosCandidatoB=0;
let totalVotos=0;
let promedioVotos=0;

let cantidadVotantes= parseInt(prompt("Digite la cantidad de votantes"));

for(let i=0; i < cantidadVotantes; i++){

    voto=prompt("Digite el candidato: \n 1.Candidato A \n 2.Candidato B ")

    if(voto==1){

        totalDeVotosCandidatoA=totalDeVotosCandidatoA+1;

    }

    else if(voto==2){
        totalDeVotosCandidatoB=totalDeVotosCandidatoB+1;

    }

    totalVotos=totalDeVotosCandidatoA+totalDeVotosCandidatoB;

}

if(totalDeVotosCandidatoA>totalDeVotosCandidatoB){
    alert("Gano candidato A con: "+totalDeVotosCandidatoA)
}

else if(totalDeVotosCandidatoA==totalDeVotosCandidatoB){
    alert("Ambos empatados ")
}



else{
    alert("Gano candidato B con: "+totalDeVotosCandidatoB)
}

alert("Cantidad total de votos " +totalVotos)




