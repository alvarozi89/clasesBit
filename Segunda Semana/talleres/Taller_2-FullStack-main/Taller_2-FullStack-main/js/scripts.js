// =======================================
// |   Diego Alejandro Muñoz Artunduaga  |
//========================================


//=============== Punto 1 ===================

function calEdad(edad1, edad2){
    let e1 = document.getElementById('edad1').value;
    let e2 = document.getElementById('edad2').value;

    if(parseInt(e1) > parseInt(e2)) {
        
        resultado = "La edad " + e1 + " es mayor que " + e2;

    } else if (parseInt(e1) < parseInt(e2)) {

        resultado = "La edad " + e2 + " es mayor que " + e1;

    }   else{
        
        resultado = "Las edades son iguales"

    }

    document.getElementById('resultado').value = resultado;

}






//=============== Punto 2 ===================

function calNota(est1, est2, est3, est4, est5) {
    let e1 = document.getElementById('est1').value;
    let e2 = document.getElementById('est2').value;
    let e3 = document.getElementById('est3').value;
    let e4 = document.getElementById('est4').value;
    let e5 = document.getElementById('est5').value;

    resultado2 = ((parseInt(e1)+parseInt(e2)+parseInt(e3)+parseInt(e4)+parseInt(e5))/5);

    document.getElementById('resultadoP2').value = resultado2;
}







//=============== Punto 3 ===================

function validarContra(contraseña){

    let palabra = document.getElementById('contra').value;

    if(palabra == "dom"){
        resultado = "Bienvenidos al nuevo club de los magios";
    }else{
        resultado = "No puedes ingresar, no eres un miembro";
    }

    document.getElementById('resultadoP3').value = resultado;

}






//=============== Punto 4 ===================

function validarVacuna(vacuna){

    let vacunado = document.getElementById('vacuna').value;

    if(parseInt(vacunado) == 1){
        resultado = "Bienvenido";
    }else if( parseInt(vacunado) == 2){
        resultado = "Por favor ve a vacunarte";
    }else{
        resultado = "Opción no valida";
    }

    document.getElementById('resultadoP4').value = resultado

}






//============== Punto 5 ===================

function calcAnios(edad) {

    let fec = document.getElementById('fecNaci').value;

    resultado = (2022 - parseInt(fec));

    document.getElementById('resultadoP5').value = "Usted tiene " + resultado + " años";
}






//=============== Punto 6 ===================


function capital(op){

    let opion = document.getElementById('opc').value;

    switch (parseInt(opion)) {
        case 1:
            resultado = "Su capital es Bogotá";
            break;
        case 2:
            resultado = "Su capital es Buenos aires";
            break;
        case 3:
            resultado = "Su capital es Lima";
            break;
        case 4:
            resultado = "Su capital es Tokio";
            break;
        case 5:
            resultado = "Su capital es Berlin";
            break;

        default:
            resultado = "Opción no válida";
            break;
    }

    document.getElementById('resultadoP6').value = resultado;

}





//=============== Punto 7 ===================

function multiplicar(){

    let num = prompt("Digite el número que quiera sacarle la tabla de multilicar: ");

    for(var i = 1; i <=100; i++){

        document.write( num + " * " + i + " = " + num*i );

    }
}






//=============== Punto 8 ===================

function traduccion(opcion){

    let opion = document.getElementById('opcion').value;

    switch (parseInt(opion)) {

        case 1:
            resultado = "En ingles es: Cat";
            break;
        case 2:
            resultado = "En ingles es: Dog";
            break;
        case 3:
            resultado = "En ingles es: Home";
            break;
        case 4:
            resultado = "En ingles es: Computer";
            break;
        case 5:
            resultado = "En ingles es: Phone";
            break;
        default:
            resultado = "Opción no válida";
            break;
    }

    document.getElementById('resultadoP8').value = resultado;
}


