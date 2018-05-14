$(function () {
    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();

    //Menu Responsive

    //Calculamos ancho de pagina

    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        nonav = $('#cont-nonav'),
        btnMenu = $('#btn-menu'),
        icono = $('#btn-menu .icono');

    if (ancho < 908) {
        enlaces.hide();
        nonav.hide();
        icono.addClass('fa-bars');

    }

    btnMenu.on('click', function (e) {
        enlaces.slideToggle();
        nonav.slideToggle();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');
    });

    $(window).on('resize', function () {
        if ($(this).width() > 908) {
            enlaces.show();
            nonav.show();
            icono.addClass('fa-times');
            icono.removeClass('fa-bars');
        } else {
            enlaces.hide();
            nonav.hide();
            icono.addClass('fa-bars');
            icono.removeClass('fa-times');
        }
    });
});

// filtro con min y max
console.log('hola cliente');
var slider = document.querySelector('#slider');
var sliderMax = document.querySelector('#sliderUno');
document.querySelector('.minMax').addEventListener('click', function(e){
    e.preventDefault();
    location.href = '/?min=' + slider.value + '&max='+sliderMax.value;
});