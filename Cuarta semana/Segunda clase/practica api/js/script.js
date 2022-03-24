const cards = document.getElementById('cards');
const tabla = document.getElementById('tabla');

let carrito={};

const consumirBd= async()=>{
    const res = await fetch('js/bd.json');
    const data = await res.json();
    data.forEach(item=>{
        cards.innerHTML+=
        `<div class="col-12 col-md-4 mb-2">
                <div class="card">
                    <img src="${item.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text precio">${item.precio}</p>
                    <p class="card-text id">${item.id}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
        </div>`
    })

    console.log(data);
}

consumirBd();

const pintarTabla =()=>{
    console.log("estoy en pintar tabla"+carrito);
    tabla.innerHTML="";
    Object.values(carrito).forEach(producto=>{
        tabla.innerHTML+=
        `<tr>
        <td>${producto.id}</td>
        <td>${producto.title}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>
        <td><button type="button" class="btn btn-success">Aumentar</button> <button type="button" class="btn btn-danger">Disminuir</button></td>
        </tr>`
    })
}

cards.addEventListener('click',e=>{
    agregarProducto(e);
})

const agregarProducto = e=>{
    if(e.target.classList.contains('btn-primary')){
        //alert("toque el boton primario");
        console.log(e.target.parentElement);
        setCarrito(e.target.parentElement);
    }
    //e.stopPropagation();
}

const setCarrito= objeto=>{
    console.log("Estoy en setCarrito"+objeto);

    const producto={
        id:objeto.querySelector('.id').textContent,
        title:objeto.querySelector('h5').textContent,
        precio:objeto.querySelector('.precio').textContent,
        cantidad:1
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad=carrito[producto.id].cantidad + 1;
    }

    carrito[producto.id]={...producto}
    pintarTabla();
}

