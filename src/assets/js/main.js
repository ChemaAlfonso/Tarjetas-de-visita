$(document).ready(function(){

    /* Slider tarjeta */
    var banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        position: 1
    }

    var info = {
        padre: $('#info'),
        numeroSlides: $('#info').children('.slide').length,
        position: 1
    }

    banner.padre.children('.slide').first().css({
        'left': 0 
    });

    info.padre.children('.slide').first().css({
        'left': 0 
    });


    var altoBanner = function(){

        var alto = banner.padre.children('.slide').outerHeight();

        banner.padre.css({
            'height': alto + 'px'
        })
    }

    var altoInfo = function(){

        var alto = info.padre.children('.active').outerHeight();

        info.padre.animate({
            'height': alto + 'px'
        })
    }

    var altoContenedor = function(){
        var altoVentana = $(window).height();

        if (altoVentana <= $('.contenedor').outerHeight() + 200){
            $('.contenedor').css({
                'height': ''
            });
        } else {
            $('.contenedor').css({
                'height': altoVentana + 'px'
            });
        }

    }


    altoBanner();
    altoInfo();
    altoContenedor();

    $(window).resize(function(){
        altoBanner();
        altoInfo();
        altoContenedor();
    });

    $('#info').children('.slide').each(function(){
        $('#botones').append("<span _ngcontent-c1=''>");
    });

    $('#botones').children('span').first().addClass('active');

    
/* ------------------------------------- */
/* -------Slider Banner */
/* ------------------------------------- */


    /* Boton siguiente */    

    $('#banner-next').on('click',function(e){
        e.preventDefault();

        if (banner.position < banner.numeroSlides){

            banner.padre.children().not('.active').css({
                'left': '100%'
            });

            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            $('#banner .active').prev().animate({
                'left': '-100%'
            });

            banner.position = banner.position + 1;

        } else {

            $('#banner .active').animate({
                'left':'-100%'
            });

            banner.padre.children().not('.active').css({
                'left': '100%'
            });

            $('#banner .active').removeClass('active');

            banner.padre.children('.slide').first().addClass('active').animate({
                'left': 0
            });

            banner.position = 1;
        }



    });

    /* Boton atras */

    $('#banner-prev').on('click',function(e){

        e.preventDefault();

        if (banner.position > 1){

            banner.padre.children().not('.active').css({
                'left': '-100%'
            });
        
            $('#banner .active').animate({
                'left':'100%'
            });

            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left':'0'
            });

            banner.position = banner.position - 1;

        } else {

            banner.padre.children().not('.active').css({
                'left':'-100%'
            });

            $('#banner .active').animate({
                'left':'100%'

            });

            $('#banner .active').removeClass('active');

            banner.padre.children().last().addClass('active').animate({
                'left':0
            });

            banner.position = banner.numeroSlides;

        }


    });


/* ------------------------------------- */
/* -------Slider info */
/* ------------------------------------- */


/* Boton siguiente */    

    $('#info-next').on('click',function(e){
        e.preventDefault();

        if (info.position < info.numeroSlides){

            info.padre.children().not('.active').css({
                'left': '100%'
            });

            $('#info .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            $('#info .active').prev().animate({
                'left': '-100%'
            });

            $('#botones').children('.active').removeClass('active').next().addClass('active');

            info.position = info.position + 1;

        } else {

            $('#info .active').animate({
                'left':'-100%'
            });

            //Seleccionamos slides sin clase active y posicionamos a la derecha
            info.padre.children().not('.active').css({
                'left': '100%'
            });

            //Eliminamos la clase active y la ponemos al primer elemento
            $('#info .active').removeClass('active');

            info.padre.children('.slide').first().addClass('active').animate({
                'left': 0
            });

            //Clase active para botones de posicionamiento
            $('#botones').children('.active').removeClass('active');
            $('#botones').children('span').first().addClass('active');

            //Reseteamos la posicion a 1
            info.position = 1;
        }

        altoInfo();
    });

    /* Boton atras */

    $('#info-prev').on('click',function(e){

        e.preventDefault();

        if (info.position > 1){

            info.padre.children().not('.active').css({
                'left': '-100%'
            });
        
            $('#info .active').animate({
                'left':'100%'
            });

            $('#info .active').removeClass('active').prev().addClass('active').animate({
                'left':'0'
            });

            $('#botones').children('.active').removeClass('active').prev().addClass('active');

            info.position = info.position - 1;

        } else {

            info.padre.children().not('.active').css({
                'left':'-100%'
            });

            $('#info .active').animate({
                'left':'100%'

            });

            $('#info .active').removeClass('active');

            info.padre.children().last().addClass('active').animate({
                'left':0
            });

            $('#botones').children('.active').removeClass('active');
            $('#botones').children('span').last().addClass('active');

            info.position = info.numeroSlides;

        }

        altoInfo();
    });


});