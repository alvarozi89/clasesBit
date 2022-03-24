const cards = document.getElementById('cards');
const tabla = document.getElementById('tabla');

let carrito={};

const consumirBd= async()=>{
    const res = await fetch('/js/bd.json');
    const data = await res.json();
    data.forEach(item=>{
        cards.innerHTML+=
        `<div class="col-12 col-md-4 mb-2">
                <div class="card">
                    <img src="${item.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.precio}</p>
                    <p class="card-text">${item.id}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
        </div>`
    })

    console.log(data);
}

consumirBd();