/*
 switch: sentencia se ejecuta un bloque: va evaluar muchas opciones...
 */

/*let num =4;
switch(num){

   case 1: 
   alert("estoy en el caso 1");
        break;
   
   case 2: 
   alert("estoy en el caso 2");
        break;
   
   default:
       alert("Estoy en un estado default")
       break;
        
}*/

/*let mes= parseInt(prompt("Digite el mes en número"));

switch(mes) {

   case 1: 
   alert("Soy el mes de enero");
   break;

   case 2: 
   alert("Soy el mes de febrero");
   break;

   case 3: 
   alert("Soy el mes de marzo");
   break;

   default:
       alert("No estoy en ningún mes")
       break;
}*/

/*let descuentoIva = 0;
let total = 0;
let articulo = parseInt(prompt("Selecciona el producto: \n 1.Tecnologia \n 2.Ferreteria \n 3.Hogar "));

switch(articulo){
    
    case 1: 
    alert("Los articulos de tecnologia tienen descuento del 19%");
    break;

    case 2: 
    alert("Los articulos de ferreteria tienen el descuento del 10%");
    break;

    case 3: 
    alert("Los articulos de hogar tienen el 20% de descuento");
    break;

    default: 
    alert("esta categoria no aplica día sin iva");
    break;
}*/

/*const autos = ['Toyota','Mercedes','Kia'];
console.log(autos);
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for(let i=0; i < autos.length; i++) {
    document.write(autos[i]+"<br>");
}

//el push envia un nuevo dato al arreglo
autos.push('chevrolet');
console.log(autos);*/

/*const frutas =['naranja','limon', 'banano','cereza'];
//la propiedad sort nos ayuda a ordernar alfabeticamente los arreglos-solo aplica a los string.
document.write(frutas.sort());
console.log(frutas);*/

/*let mayor =0;
let limite =5;
let numeros = [];

for(let i=0; i < limite; i++) {

    numeros[i]= parseInt(prompt("Digita un número"));
}
//5
//no confundir el indice con valores
let menor=numeros[0];
for(let i=0; i < numeros.length; i++ ) {
    
    if(numeros[i] > mayor){
        mayor = numeros[i];
        //5 lo toma
    }
//5 < 5
     if(numeros[i] < menor){
        menor = numeros[i];
        // no reemplaza esta variable
        // toma el valor del 2
    }

    document.write(numeros[i] + "<br>");
}

alert("el número mayor es " +mayor);
alert("el número menor es " +menor);*/

/*function saludar(){
    alert("hola, soy una función");
}

saludar();

function suma(a,b) {
    alert(a+b);
}

suma(5,5);*/

function suma(){

 let num1=document.getElementById('number1').value;
 let num2=document.getElementById('number2').value;
 //let resultado=document.getElementById('resultado').value;

 resultado=parseInt(num1) + parseInt(num2);
 document.getElementById('resultado').value=resultado;

 //alert("El resultado de la suma es " +resultado);

}


function limpiar(){
    document.getElementById('resultado').value="";
    document.getElementById('number1').value="";
    document.getElementById('number2').value="";

}