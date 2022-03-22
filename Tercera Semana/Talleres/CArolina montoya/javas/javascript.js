function imc(){
    let peso2=document.getElementById('peso').value;
    let altura1 =document.getElementById('altura').value;
   /* let altura2 = parseInt(altura1^2);*/
    let resultado = parseInt(peso2) / parseInt(altura1^2);

document.getElementById('resultado').value=resultado;

    document.getElementById('peso').value="";
    document.getElementById('altura').value="";
}

function cambio(){
    let dolar1 = parseInt(document.getElementById('dolar').value);
    let pesohoy = 3820;
    letresultado1 = 0;
    let resultado1 = parseInt(dolar1) * parseInt(pesohoy);

document.getElementById('resultado1').value=resultado1;

    document.getElementById('dolar').value="";
  
}


function tabla(){
    const tabla = document.getElementById('tabla');
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let vacuna = document.getElementById('vacuna').value;

    tabla.innerHTML+=`<tr><td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
    <td>${vacuna}</td>
    </tr>`

    document.getElementById('nombre').value="";
    document.getElementById('apellido').value="";
    document.getElementById('edad').value="";
    document.getElementById('vacuna').value="";

    if (vacuna>=1) {
 alert( nombre + " se encuentra vacunado");
    
    }

    else {
        alert ( nombre + " no se encuentra vacunado");
    }
 
}


function calcular() {

    let Valor = document.getElementById ('numb').value;
    let plan= 200;
    let calculo = Valor*plan;

    alert("debes pagar " + calculo)

    
}