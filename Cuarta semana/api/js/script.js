/*let titulo = document.querySelector(".titulo").textContent="saludos desde js"
let titulo2 = document.getElementById("h1")
let boton = document.getElementById('boton');
let body = document.querySelector('body');



 body.addEventListener('click',(e)=>{
     alert("Hola"+e.target);
 })

boton.addEventListener('click',()=>{
    alert("Hola a lo moderno");
})

function evento(){
    alert("Hola a lo clasico");
}*/
let tabla = document.getElementById("tabla")
const consumirApi = async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    data.forEach(item=>{
        tabla.innerHTML+=`<tr>
        <td>${item.userId}</td>
        <td>${item.id}</td>
        <td>${item.title}</td>
        </tr>`
    })
    console.log(data);
}

consumirApi();


               