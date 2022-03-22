

function convertir() {

    let Cant1 = document.getElementById('val1').value;
    let Cant2 = document.getElementById('val2').value;

    console.log(Cant1)
    console.log(Cant2)
  

       let cantidad = parseFloat(document.getElementById('cant').value);
       console.log(cantidad)
    
   if(Cant1== "Colombia PESO" && Cant2 == "USA DOLAR"){
      resultado = (cantidad*0.00026) ;
      document.getElementById('Resultado').value=resultado;
      document.getElementById('cant').value="";
      document.getElementById("borrar").value="";
   }
   else if(Cant1== "Colombia PESO" && Cant2 == "EURO"){
    resultado = (cantidad*0.00024) ;
      document.getElementById('Resultado').value=resultado;
      document.getElementById('cant').value="";
   }

   else if(Cant1== "USA DOLAR" && Cant2 == "Colombia PESO"){
    resultado = (cantidad*381984) ;
      document.getElementById('Resultado').value=resultado;
      document.getElementById('cant').value="";
   }
   else if(Cant1== "USA DOLAR" && Cant2 == "EURO"){
    resultado = (cantidad*0.90) ;
      document.getElementById('Resultado').value=resultado;
      document.getElementById('cant').value="";
   }

   else if(Cant1=="EURO" && Cant2 == "USA DOLAR"){
     console.log(cantidad);
    resultado = cantidad*1.11;
      document.getElementById('Resultado').value=resultado;
      document.getElementById('cant').value="";
      
   }

   else if(Cant1== "EURO" && Cant2 == "Colombia PESO"){
    console.log(cantidad);
    resultado = cantidad*4228;
      document.getElementById('Resultado').value=resultado;
      document.getElementById('cant').value="";
   }
   
  







}



function limpiar(){
   document.getElementById('Resultado').value="";


   
}



       







