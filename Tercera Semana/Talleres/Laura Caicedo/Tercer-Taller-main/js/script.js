
const age = document.querySelector('.age');
const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const totalResult = document.querySelector('.submit');
const finalResult = document.querySelector('.finalResult');

totalResult.addEventListener("click", function(){
  const result = Number(weight.value) / Number((height.value/100))**2 ;
  console.log(result);

 finalResult.value = result.toFixed(2); 
  
})
////////coin converse

const values = document.querySelector('.form-control');
const dollar = document.querySelector('.dollar');
const euro = document.querySelector('.euro');
const yuan = document.querySelector('.yuan');
const cad = document.querySelector('.cad');
const btnContact = document.querySelector('.btnContact');
const options = document.querySelectorAll("option");
const resultCoins = document.querySelector('.resultCoins');

const selection = document.querySelector('.form-select');

btnContact.addEventListener("click", function(e){
  e.preventDefault();

  let numberValues = +values.value;
  let numberCurrency = +selection.value
  
  switch(numberCurrency){
    case 1:
      const one = numberValues / 3890;
      console.log(one);
      resultCoins.innerText = ` ${one.toFixed(2)} dollars`; 
      break;
    case 2:
      const two = numberValues / 4212.10;
      //console.log(two);
      resultCoins.innerText = ` ${two.toFixed(2)} Euros`; 
      break;
    case 3:
      const three = numberValues / 600;
      //console.log(three);
      resultCoins.innerText = ` ${three.toFixed(2)} Yuans `; 
      break;
      case 4:
        const four = numberValues / 3019.81;
        //console.log(four);
        resultCoins.innerText = ` ${four.toFixed(2)} Canadian Dollars`; 
      break;
    default:
      resultCoins.innerText = `Choose a currency please`; 
     
  }
  
}) 

////table

const lista = document.getElementById('lista');
function dom() {
    const elementos = ["primer elemento"];
    elementos.forEach(item => {
        lista.innerHTML += `<li> ${item} </li>`
    })
}
let body = document.querySelector('body');

function tabla() {
    const tabla = document.getElementById('tabla');
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let estadovacuna = document.getElementById('estadovacuna').value;

    tabla.innerHTML += `<tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${estadovacuna}</td>
    </tr>`
}

//netflix
    

function calcular(){
  let valor = document.getElementById('num').value;
  let plan = 16900;
  let calculo = valor * plan;
  //alert("Debes pagar: " +calculo);
  //Swal.fire( 'el valor total pagado fue de ' +calculo,'Gracias por preferirnos', 'success',)
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'el valor total pagado fue de ' + calculo,
    showConfirmButton: true,
    timer: 1500,
    confirmButtonColor: '#db0000',
  })
} 


function calcularTwo(){
  let valor = document.getElementById('num').value;
  let plan = 26900;
  let calculo = valor * plan;
  //alert("Debes pagar: " +calculo);
  Swal.fire( 'el valor total pagado fue de ' +calculo,'Gracias por preferirnos', 'success' )
  
} 

function calcularThree(){
  let valor = document.getElementById('num').value;
  let plan = 38900;
  let calculo = valor * plan;
  //alert("Debes pagar: " +calculo);
  Swal.fire( 'el valor total pagado fue de ' +calculo,'Gracias por preferirnos', 'success' )
  
} 




