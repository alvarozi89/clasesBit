//Ejercicio1
function calcular() {
  let peso = document.getElementById("peso").value;
  let estatura = document.getElementById("estatura").value;
  let resultado = parseFloat(peso) / (parseFloat(estatura) * estatura);

  if (resultado >= 30.0) {
    resultadofinal =
      " Su IMC es de " +
      resultado +
      " por lo tanto, está dentro del rango de OBECIDAD, consulte nuestra bibliografía para más información ";
  } else if (resultado >= 25.0 && resultado <= 29.9) {
    resultadofinal =
      "Su IMC es de " +
      resultado +
      " por lo tanto,  está dentro del rango de SOBREPESO, consulte nuestra bibliografía para más información ";
  } else if (resultado >= 18.5 && resultado <= 24.9) {
    resultadofinal =
      "Su IMC es de " +
      resultado +
      " por lo tanto,  está dentro del rango de NORMAL, consulte nuestra bibliografía para más información ";
  } else if (resultado < 18.5) {
    resultadofinal =
      "Su IMC es de " +
      resultado +
      " por lo tanto, está dentro del rango de BAJO PESO, consulte nuestra bibliografía para más información ";
  } else {
    resultadofinal = "Haz ingresado valores inválidos, vuelve a intentar";
  }

  Swal.fire(resultadofinal);
  document.getElementById("resultadofinal").value = resultado;
  document.getElementById("peso").value = "";
  document.getElementById("estatura").value = "";
}

//Ejercicio2
function convertird() {
  let mon1 = document.getElementById("mon1").value;
  conversiond = parseInt(mon1) * 3819;
  document.getElementById("conversiond").value = conversiond;
  document.getElementById("mon1").value = "";
}
function convertirl() {
  let mon2 = document.getElementById("mon2").value;
  conversionl = parseInt(mon2) * 5034;
  document.getElementById("conversionl").value = conversionl;
  document.getElementById("mon2").value = "";
}

//Ejercicio3
var num = 0;
function tabla() {
  const tabla = document.getElementById("tabla");

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let vacuna = document.getElementById("vacuna").value;
  num = num + 1;

  tabla.innerHTML += `<tr>
  <td>${num}</td> 
  <td>${nombre}</td> 
  <td>${apellido}</td>
  <td>${edad}</td>
  <td>${vacuna}</td>
  </tr>`;

  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("vacuna").value = "";
}

//Ejercicio4
function calcular1() {
  let valor = document.getElementById("plan1").value;
  let plan = 50;
  let calculo = valor * plan;

  Swal.fire({
    title: "Felicitaciones has adquirido el plan tigre",
    text: "Debes pagar: " + calculo + ".000 pesos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Comprado!");
    }
  });
}

function calcular2() {
  let valor = document.getElementById("plan2").value;
  let plan = 80;
  let calculo = valor * plan;

  Swal.fire({
    title: "Felicitaciones has adquirido el plan lobo",
    text: "Debes pagar: " + calculo + ".000 pesos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Comprado!");
    }
  });
}

function calcular3() {
  let valor = document.getElementById("plan3").value;
  let plan = 100;
  let calculo = valor * plan;
  Swal.fire({
    title: "Felicitaciones has adquirido el plan dinosaurio",
    text: "Debes pagar: " + calculo + ".000 pesos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Comprado!");
    }
  });
}
