const URL = 'https://japdevdep.github.io/ecommerce-api/category/all.json';

function information(){ 

fetch(URL)
.then(res => res.json())
.then(data =>{
    const img = document.querySelector('img');
    const descripcion = document.querySelector('p');
    const count = document.querySelector('small');
    const nombre = document.querySelector('h4');
    img.src = data[0].imgSrc
    descripcion.innerHTML = data[0].description
    count.innerHTML = data[0].productCount
    nombre.innerHTML = data[0].name
})

}

information();