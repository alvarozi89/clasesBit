
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




function dolar(){
    let num11 = document.getElementById('num11').value;
    let valor = 3800;
    let resultado2 = parseInt(num11)* valor;

    document.getElementById('resultado2').value=resultado2;
    document.getElementById('num11').value="";
}
function euro(){
    let num11= document.getElementById('num11').value;
    let valor = 4200;
    let resultado2 = parseInt(num11)*valor;

    document.getElementById('resultado2').value=resultado2;
    document.getElementById('num11').value="";

}
function mexicano(){
    let num11= document.getElementById('num11').value;
    let valor = 188;
    let resultado2 = parseInt(num11) *valor;

    document.getElementById('resultado2').value=resultado2;

    document.getElementById('num11').value="";
}
function yen(){
    let num11= document.getElementById('num11').value;
    let valor = 32;
    let resultado2 = parseInt(num11) *valor;

    document.getElementById('resultado2').value=resultado2;

    document.getElementById('num11').value="";
}
function rublo(){
    let num11= document.getElementById('num11').value;
    let valor = 36;
    let resultado2 = parseInt(num11) *valor;

    document.getElementById('resultado2').value=resultado2;

    document.getElementById('num11').value="";
}
function yuan(){
    let num11= document.getElementById('num11').value;
    let valor = 600;
    let resultado2 = parseInt(num11) *valor;

    document.getElementById('resultado').value=resultado2;

    document.getElementById('num11').value="";
}

function calcular(){
    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;
    let valor1=parseFloat(num2*num2);
    let resultado = parseInt(num1) / parseFloat(valor1);

    document.getElementById('resultado').value=resultado;

    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
}