console.log(arreglo);

fetch('http://localhost:5000/productosPorId?id='+arreglo)
.then(function(res){
    console.log('http://localhost:5000/productosPorId?id='+arreglo);
    return res.json();
})
.then(function(res){
    console.log(res);

    var lista = document.querySelector('.lista');
    res.forEach(function(elem){
        lista.innerHTML += '<li class="tarjeta-check"><div class="cont-tarjeta-check"><div class="img-tarjeta-check"><img width="100" src="' + elem.image + '" class="imagen-tarj-check"></div><div class="continfo"><p class="name-check">' + elem.name + " " + elem.memory + '</p><p class="price-check"><span>$</span> ' + elem.price + '</p></div></div></li><div class="divide-prod-check"></div>';
    });
});