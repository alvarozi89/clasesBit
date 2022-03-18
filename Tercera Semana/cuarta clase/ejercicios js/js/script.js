//el dom Es la fomra como js accede a nuestro archivo html

/*document.querySelector('.parrafo-1').textContent="Saludos desde js";
document.querySelector('#parrafo-3').textContent="Saludos desde js";
document.getElementById('parrafo-2').textContent="Saludos desde js";
const parrafo = document.getElementById('parrafo-2').textContent="Saludos desde js";*/


document.querySelector('h1').textContent="Saludos desde js";


const lista = document.getElementById('lista');
function dom(){
    const elementos =["primer elemento", "Segundo elemento" ,"Tercer elemento"];
    elementos.forEach(item => {
        lista.innerHTML+=`<li>${item}</li>`
    })
}
let body= document.querySelector('body');

function color(){
    body.style.background="red";
    body.classList.add('container');
}

function tabla(){
    const tabla = document.getElementById('tabla');
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad=  document.getElementById('edad').value;

    tabla.innerHTML+=`<tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
</tr>`
document.getElementById('nombre').value="";
document.getElementById('apellido').value="";
document.getElementById('edad').value="";
}

function suma(){
    let num1= document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = parseInt(num1) + parseInt (num2);

    alert("resultado: "+resultado);
    document.getElementById('resultado').value=resultado;

    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
}

function resta(){
    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;
    let resultado = parseInt(num1)- parseInt(num2);

    document.getElementById('resultado').value=resultado;

    document.getElementById('num1').value="";
    document.getElementById('num2').value="";

}

function multiplicacion(){
    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;
    let resultado = parseInt(num1) * parseInt(num2);

    document.getElementById('resultado').value=resultado;

    document.getElementById('num1').value="";
    document.getElementById('num2').value="";

}

function division(){
    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;
    let resultado = parseInt(num1) / parseInt(num2);

    document.getElementById('resultado').value=resultado;

    document.getElementById('num1').value="";
    document.getElementById('num2').value="";

}

function votacion(){

    let votosCandidato1 = document.getElementById('candidato1').value;
    let votosCandidato2= document.getElementById('candidato2').value;
    let total = parseInt(votosCandidato1)+ parseInt(votosCandidato2);

    if (parseInt(votosCandidato1)>parseInt(votosCandidato2)) {

       // alert("Gano candidato 1, total de votos: " +votosCandidato1) 
       
        Swal.fire(
            'Gano candidato uno!',
            'Dale click para continuar!',
            'success'
          )
    }

    else if (parseInt(votosCandidato1)==parseInt(votosCandidato2)) {

        Swal.fire(
            'Empatados!',
            'Dale click para continuar!',
            'warning'
          )
    }

    else{
        alert("Gano candidato 2, total de votos:" +votosCandidato2);
    }

    //alert("Total de votos- suma de los dos "+ total);

}