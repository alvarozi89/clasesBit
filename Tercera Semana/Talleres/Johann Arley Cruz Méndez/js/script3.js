
var contador = 1;

function tabla() {
    
   
   
   

    const  tabla = document.getElementById('tabla')
    let  nombre = document.getElementById('Nombre').value;
    let  apellido = document.getElementById('Apellido').value;
    let  Edad = document.getElementById('Edad').value;
    let  EstadoVacuna = document.getElementById('EstadoVacuna').value;

    var botonElement = document.getElementById("botonClick");
   

    botonElement=contador;
    contador++;
    
   
    tabla.innerHTML+=`<tr>
    <td>${botonElement}</td>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${Edad}</td>
    <td>${EstadoVacuna}</td>
    </tr>`
    
    document.getElementById('Nombre').value = ""
    document.getElementById('Apellido').value= ""
    document.getElementById('Edad').value=""
    document.getElementById('EstadoVacuna').value=""


}


   


function borrartabla(){
  
     document.getElementById('tabla').innerHTML=""
      contador = 0 ;
      contador++
}



