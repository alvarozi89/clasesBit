
// Ejericicio 1
function calIMC(){
    let peso = document.getElementById('peso').value;
    let estatura = document.getElementById('altura').value;
    let res = parseFloat(peso) / ((parseFloat(estatura) * 2));

    if(res >= 30){
        res2 = "Su IMC se encuentra en obesidad con: " + res;
    }else if(res >= 25 && res <= 29.9){
        res2 = "Su IMC se encuentra en sobrepeso con: " + res;
    }else if(res >= 18.5 && res <= 24.9){
        res2 = "Su IMC se encuentra en saludable con: " + res;
    }else if(res < 18.5){
        res2 = "Su IMC se encuentra en bajo de peso con: " + res;
    }else{
        res2 = "El valor no corresponde a ninguna calificación";
    }

    document.getElementById('resulado').value = res2;

    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";

}


// Ejercicio 2

function convertir(){

    let libra = document.getElementById('libra').value;

    resultado = parseInt(libra) * 5034;

    document.getElementById('pesosCol').value = resultado;

    document.getElementById('libra').value = "";

}


// Ejercicio 3

var num = 0;

function tabla(){

    const tabla = document.getElementById('tabla');

    let nombre = document.getElementById('nombres').value;
    let apellido = document.getElementById('apellidos').value;
    let edad = document.getElementById('edad').value;
    let vacuna = document.getElementById('vacuna').value;
    num = num + 1;

    tabla.innerHTML+= `<tr><td>${num}</td><td>${nombre}</td><td>${apellido}</td><td>${edad}</td><td>${vacuna}</td></tr>`

    document.getElementById('nombres').value = "";
    document.getElementById('apellidos').value = "";
    document.getElementById('edad').value = "";
    document.getElementById('vacuna').value = "";

}


// Ejercicio 4

function adquirir(){

    let susripcion = document.getElementById('suscrip').value;
    let basePlan = 50000;
    let res = susripcion * basePlan;

    alert("Compra realizada. Tu valor a pagar es: " + res);

    Swal.fire(
        'Compra finalizada!',
        'Revisa tu correo',
        'Gracias por tu compra'
      )
}

