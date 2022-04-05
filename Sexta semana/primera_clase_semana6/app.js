// console.log("Hola! saludos desde Node");
// let num1=5;
// let num2=6;
// let resultado= num1+num2;
// console.log("El resultado es: "+resultado);

//const consolasVideoJuegos=["Xbox","Ps5","Nintendo"];

//creamos una constante que va requerir la ruta del arreglo

const {consolasVideoJuegos,precios}= require('./consolas');

consolasVideoJuegos.forEach((consolas)=>{
    console.log(consolas);
    console.log(precios);
});
