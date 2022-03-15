let consolas =["xbox","ps5","nintendo"];
console.log("mi arreglo contiene "  + consolas);
console.log("Soy la longitud "+consolas.length);
console.log("Estoy en la posición " + consolas[1]);

let ultimo = consolas[consolas.length -1];
console.log("soy el ultimo " + ultimo);

consolas.forEach(function(elemento,indice){
    console.log("recorrido por forEach " + elemento, indice)
});

consolas.forEach(elemento =>
    console.log("soy función flecha ")+elemento);

let nuevoElemento= consolas.push('sega');
console.log("estoy con un nuevo elemento " +nuevoElemento);


ultimo = consolas[consolas.length -1];
console.log("soy el ultimo " + ultimo);


//objetos es una entidad independiente con propiedades
//soy un arreglo consolas =[];
//soy un objeto persona= {};



const persona ={
    nombre:"alvaro",
    altura:"172",
    profesion:"desarrollador"
}

console.log("imprimo desde un objeto "+persona.nombre);

