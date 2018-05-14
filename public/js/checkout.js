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
        lista.innerHTML += '<li><img width="100" src="'+elem.image+'">' + elem.name + '</li>';
    });
});