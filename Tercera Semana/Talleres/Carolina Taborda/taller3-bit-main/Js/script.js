function calcular(){
let peso = Number(document.getElementById('peso').value);
let altura = Number(document.getElementById('altura').value);
let resultado = peso/(altura*altura)
document.getElementById('resultado-imc').textContent=resultado.toFixed(2);

document.getElementById('peso').value="";
document.getElementById('altura').value="";
}



let copLocale = Intl.NumberFormat('es-CO');
let precio1 = 50000;
let precio2 = 80000;
let precio3 = 130000;
let precio4 = 150000;


document.getElementById('plan-1').textContent='$'+copLocale.format(precio1);
document.getElementById('plan-2').textContent='$'+copLocale.format(precio2);
document.getElementById('plan-3').textContent='$'+copLocale.format(precio3);
document.getElementById('plan-4').textContent='$'+copLocale.format(precio4);

function precioplan(){
   let totalPl1 = parseInt(document.getElementById('cant-pl1').value)*precio1;
   if (isNaN(totalPl1)){
    totalPl1=0;
  }
   document.getElementById('price1').textContent = totalPl1;

   let totalPl2 = parseInt(document.getElementById('cant-pl2').value)*precio2;
   if (isNaN(totalPl2)){
    totalPl2=0;
  }
   document.getElementById('price2').textContent = totalPl2;

   let totalPl3 = parseInt(document.getElementById('cant-pl3').value)*precio3;
   if (isNaN(totalPl3)){
    totalPl3=0;
  }
   document.getElementById('price3').textContent = totalPl3;

   let totalPl4 = parseInt(document.getElementById('cant-pl4').value)*precio4;
   if (isNaN(totalPl4)){
    totalPl4=0;
  }
   document.getElementById('price4').textContent = totalPl4;

   let totalTodo = totalPl1+totalPl2+totalPl3+totalPl4;
   alert("Tu precio final es de "+totalTodo);

   document.getElementById('cant-pl1').value="";
   document.getElementById('cant-pl2').value="";
   document.getElementById('cant-pl3').value="";
   document.getElementById('cant-pl4').value="";
   
}

function tablaDatos(){
    const tab = document.getElementById('tab-datper');
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let vacuna = document.getElementById("estado-vacuna").value;

    tab.innerHTML+=`<tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
    <td>${vacuna}</td>
    </tr>`;

    document.getElementById('nombre').value="";
    document.getElementById('apellido').value="";
    document.getElementById('edad').value="";
    document.getElementById('estado-vacuna').value="";

}



function conversor(){
    let copLocale = Intl.NumberFormat('es-CO');
    let monto = Number(document.getElementById('valor1').value);
    let usapeso = 0.00026;
    let europeso = 0.00024;
    let conver = monto*usapeso;
    let conver2 = monto*europeso;
    document.getElementById('valor2').value=conver.toFixed(2);
    document.getElementById('valor3').value=conver2.toFixed(2);

    document.getElementById('valor1').value="";
}

