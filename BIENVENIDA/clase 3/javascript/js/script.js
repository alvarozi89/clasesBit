//alert("Soy Js, y te doy un saludo");
//console.log("Saludos desde la consola");
//document.getElementById("contenedor").innerHTML= "Js te envia un saludo";

/*var nombre = "alvaro";
var edad = 33;*/

/*alert("Su nombre es: " + nombre + "Su edad es: " +edad)
console.log("Su nombre es: " + nombre + " Su edad es: " +edad)*/

/*var nombre = prompt("Escriba su nombre");
var edad = prompt("Por favor digite su edad");

console.log("Su nombre es: " + nombre + " Su edad es: " + edad);

if(edad>=18){
    console.log("usted es mayor de edad")

}

else {
    console.log("todavia eres menor de edad")

}

if(nombre==="alvaro"){
    console.log("Si, tu puedes pasar")

}

else {
    console.log("tu no puedes entrar, no eres alvaro " + "no se quien seas: " +nombre)
}*/

/*var consolas =["xbox","nintendo","ps5"];
console.log(consolas);*/

function evaluarDatos(){

   var nombre= document.getElementById("nombre").value;
   var edad= document.getElementById("edad").value;

   console.log("su nombre es: " + nombre);
   console.log("su edad es: "+ edad)

}