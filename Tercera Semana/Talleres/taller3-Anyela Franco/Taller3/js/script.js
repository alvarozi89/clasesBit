

function division(){
    let peso= document.getElementById('peso').value;
    let altura= document.getElementById('altura').value;
    let resultado = parseInt(peso) / parseInt(altura) * parseInt(altura);

    document.getElementById('peso').value="";
    document.getElementById('altura').value="";
}

function conversion(){
    let dolar=0;
   // let divisaNacional=3807.53;
    let nombreDivisa= document.getElementById('USD').value;
    let divisaNacional= document.getElementById('COP').value;


    let resultado = parseInt(USD)* parseInt(COP);

    document.getElementById('USD').value="";
    document.getElementById('COP').value="";
}

function tabla(){
    const tabla = document.getElementById('tabla');
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad=  document.getElementById('edad').value;
    let vacuna=  document.getElementById('vacuna').value;


    tabla.innerHTML+=`<tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
    <td>${vacuna}</td>

</tr>`
document.getElementById('nombre').value="";
document.getElementById('apellido').value="";
document.getElementById('edad').value="";
document.getElementById('vacuna').value="";
}



function obtener(){

    let meses = document.getElementById('suscrip').value;
    let basePlanMovistar = 25000;
    let basePlanTigo=40000;
    let resultado = susripcion * basePlan;

    alert("Compra realizada. Tu valor a pagar es: " + res);

    Swal.fire(
        'Compra finalizada!',
        'Gracias por tu compra'
      )
}