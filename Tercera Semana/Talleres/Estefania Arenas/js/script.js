function imc() {
  let peso = Number(document.getElementById("peso").value);
  let estatura = Number(document.getElementById("estatura").value);
  let totalIndice = peso / estatura ** 2;
  document.getElementById("resultado").value = totalIndice;
  Swal.fire({
    title: "Tu indice de masa corporal es: " + totalIndice,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });

  document.getElementById(`peso`).value = "";
  document.getElementById(`estatura`).value = "";
}

function bitcoin() {
  let bitcoin = Number(document.getElementById("bitcoin").value);

  let precioBitcoin = 165216695;
  document.getElementById("total").value = bitcoin * precioBitcoin;
  Swal.fire({
    title: "El total de tus pesos es: " + bitcoin * precioBitcoin,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });

  document.getElementById(`bitcoin`).value = "";
}

function tabla() {
  const tabla = document.getElementById("tabla");
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let estadoDeVacunacion = document.getElementById("estadoDeVacunacion").value;
  let email = document.getElementById("email").value;

  tabla.innerHTML += `<tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
    <td>${estadoDeVacunacion}</td>
    <td>${email}<td>
    </tr>`;

  document.getElementById(`nombre`).value = "";
  document.getElementById(`apellido`).value = "";
  document.getElementById(`edad`).value = "";
  document.getElementById(`estadoDeVacunacion`).value = "";
  document.getElementById(`email`).value = "";
}

let precioPlan = 0;

function seleccionarOpcion(precio) {
  precioPlan = precio;
}

function comprar() {
  let valor = document.getElementById("num").value;
  let comprar = valor * precioPlan;
  alert("Debes pagar: " + comprar);
}
