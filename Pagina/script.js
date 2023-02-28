
//Logica para guardar cliente


let clientes = document.getElementById("container1");
let peliculas = document.getElementById("container2");


document.getElementById('clientes-enable').addEventListener('click', () => {
    clientes.setAttribute("style", "visibility: visible;");
    peliculas.setAttribute("style", "visibility: hidden; height: 0px;")
})
document.getElementById('peliculas-enable').addEventListener('click', () => {
    clientes.setAttribute("style", "visibility: hidden; height: 0px;");
    peliculas.setAttribute("style", "visibility: visible;")
})

document.getElementById("guardar-cliente").addEventListener('click', () => {
    
    //recuperar los datos cuando se ha dado a guardar
    console.log('click')
    const name = document.getElementById('name');
    const direction = document.getElementById('direction');
    const phone = document.getElementById('phone');
    const quantity = document.getElementById('quantity');

    const body = {
        "name": name.value,
        "direction": direction.value,
        "phone": phone.value,
        "quantity":quantity.value
    }

    const jsonBody = JSON.stringify(body)
    fetch("http://192.168.1.126:3000/addClient", {
        method:'POST',
    headers: {
      "Content-Type": "application/json",
    },
        body:jsonBody
    }).then((data) => data.json()).then((data) => {
        console.log(data)
        alert(data.message)
    })
})


document.getElementById("guardar-pelicula").addEventListener('click', () => {
    console.log("peliculas")
    //recuperar los datos cuando se ha dado a guardar
    const code = document.getElementById('code').value;
    const movie = document.getElementById('movie').value;
    const type = document.getElementById('type').value;
    const price = document.getElementById('price').value;

    const body = {
        "code": code,
        "movie": movie,
        "type": type,
        "price":price
    }

    const jsonBody = JSON.stringify(body)
    fetch("http://192.168.1.126:3000/addPelicula", {
        method:'POST',
    headers: {
      "Content-Type": "application/json",
    },
        body:jsonBody
    }).then((data) => data.json()).then((data) => {
        console.log(data)
        alert(data.message)
    })
})
