// filtro con min y max
console.log('hola cliente');
var slider = document.querySelector('#range');
document.querySelector('.minMax').addEventListener('click', function (e) {
    e.preventDefault();
    location.href = '/?min=' + slider.value;
});