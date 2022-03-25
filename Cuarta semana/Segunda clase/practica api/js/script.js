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
                    <p style="display: none;" class="card-text id">${item.id}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
        </div>`
    })

    console.log(data);
}

consumirBd();

const pintarTabla =()=>{
    var indice=1;
    console.log("estoy en pintar tabla"+carrito);
    tabla.innerHTML="";
    Object.values(carrito).forEach(producto=>{
        tabla.innerHTML+=
        `<tr>
        <td>${indice}</td>
        <td>${producto.title}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>
        <td><button type="button" class="btn btn-success" data-id="${producto.id}">Aumentar</button> <button type="button" class="btn btn-danger" data-id="${producto.id}">Disminuir</button></td>
        <td>${producto.cantidad * producto.precio}</td>
        <td <a href="#" class="borrar-curso text-danger" data-id="${producto.id}">X</a></td>
        </tr>`
        indice=indice+1;

    })
    imprimirTotal();
}
tabla.addEventListener('click', eliminarProducto);

function eliminarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso') ) {
         // e.target.parentElement.parentElement.remove();
         const productoId = e.target.getAttribute('data-id')
         
         // Eliminar del arreglo del carrito
         delete carrito[productoId];

         pintarTabla();
    }
}

tabla.addEventListener('click' , e =>{
    btnAccion(e);
})

const btnAccion = e => {
   
    if(e.target.classList.contains('btn-success')){
        const productoId = e.target.getAttribute('data-id')
        console.log(carrito[productoId]); 
        const producto =carrito[productoId];
            producto.cantidad= carrito[productoId].cantidad+1;
            carrito[productoId]={...producto}
            pintarTabla();
    }
    if(e.target.classList.contains('btn-danger')){
        const productoId = e.target.getAttribute('data-id')
        const producto =carrito[productoId];
            producto.cantidad--
            if (producto.cantidad===0) {
                delete carrito[productoId];
            }
            pintarTabla();    
    }

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

const imprimirTotal=()=>{
    const cantidadProductos=Object.values(carrito).reduce((acum,{cantidad})=> acum+cantidad,0);
    const total=Object.values(carrito).reduce((acum,{cantidad,precio})=> acum+(cantidad*precio),0);
    document.getElementById('totalProductos').textContent="Cantidad de productos:"+cantidadProductos;
    document.getElementById('totalPagar').textContent="Total a pagar: "+total;

    const btnLimpiar =document.getElementById('limpiar');
    btnLimpiar.addEventListener('click',()=>{
        carrito={};
        pintarTabla();
    })


}

