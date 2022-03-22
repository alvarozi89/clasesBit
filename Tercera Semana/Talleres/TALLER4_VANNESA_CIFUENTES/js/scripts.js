function imc() {

    let Estatura = document.getElementById('estatura').value;
    let peso = document.getElementById('peso').value;
    let imc = (parseFloat(peso) / ((parseFloat(Estatura)) * (parseFloat(Estatura)))).toFixed(1);

    if (imc <= 18.5) {

        Swal.fire('Su IMC = ' + imc + '% Corresponde a delgadez o bajo de peso');
    } else if (imc >= 18.6 && imc <= 24.9) {
        Swal.fire('Su IMC = ' + imc + '% Corresponde a peso saludable');
    } else if (imc >= 25.0 && imc <= 29.9) {
        Swal.fire('Su IMC = ' + imc + '% Corresponde a Sobrepeso');
    } else {
        Swal.fire('Su IMC = ' + imc + '% Corresponde a Obesidad');
    }
    document.getElementById('estatura').value = "";
    document.getElementById('peso').value = "";
}

function conversor() {

    let euros = document.getElementById('euros').value;
    let resultado = (parseFloat(euros) * (4.288)).toFixed(3);



    Swal.fire({
        title: (euros + ' EUR corresponden a ' + resultado + ' pesos colombianos COP'),
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
              rgba(0,0,123,0.4)
              url("https://media1.giphy.com/media/3s2aD5KoMqbSfeKdvY/giphy.gif?cid=ecf05e47fmbyjrq0upj4mi9e6gs0pxovp97f9e1f82dh94pk&rid=giphy.gif&ct=s")
              left top
              repeat
            `
    })
    document.getElementById('euros').value = "";
}

function tabla() {
    const tabla = document.getElementById('tabla');
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let vacuna = document.getElementById('vacuna').value;

    tabla.innerHTML += `<tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
    <td>${vacuna}</td>
</tr>`
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('edad').value = "";
    document.getElementById('vacuna').value = "";
}

function plan1() {

    let cantidad1 = document.getElementById('cantidad1').value;
    let total = (parseInt(cantidad1) * 50000);

    Swal.fire({
        title: ('El total del PLAN BASIC por ' + cantidad1 + ' meses es = $' + total),
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.giphy.com/media/3o7budg7unzImxj3Ik/giphy.gif")
              left top
              repeat
            `
    })
    document.getElementById('cantidad1').value = "";


}

function plan2() {

    let cantidad2 = document.getElementById('cantidad2').value;
    let total = (parseInt(cantidad2) * 100000);


    Swal.fire({
        title: ('El total del PLAN MEDIUM por ' + cantidad2 + ' meses es = $' + total),
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.giphy.com/media/3o7budg7unzImxj3Ik/giphy.gif")
              left top
              repeat
            `
    })

    document.getElementById('cantidad2').value = "";

}

function plan3() {

    let cantidad3 = document.getElementById('cantidad3').value;
    let total = (parseInt(cantidad3) * 150000);


    Swal.fire({
        title: ('El total del PLAN MEDIUM por ' + cantidad3 + ' meses es = $' + total),
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.giphy.com/media/3o7budg7unzImxj3Ik/giphy.gif")
              left top
              repeat
            `
    })

    document.getElementById('cantidad3').value = "";


}