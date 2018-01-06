//--------------------------
// INICIALIZAMOS WOW
//--------------------------
var wow = new WOW({
    mobile:false
})
wow.init()
//------------------------------
// INICIALIZAMOS SMOOTH-SCROLL
//------------------------------
smoothScroll.init({
    speed: 1000,
    offset: 80
})
//-----------------------------
// BOTON IR ARRIBA
//-----------------------------

$(function () {

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop()
        if (scrollTop >= 80) {
            $('.ir-arriba').fadeIn()
        } else {
            $('.ir-arriba').fadeOut()
        }
    })

    $(window).scroll(function () {

        var encabezado = $('.encabezado')
        var scrollTop = $(this).scrollTop()
        
        if (scrollTop >= 50) {
            encabezado.addClass('animado')
        } else {
            encabezado.removeClass('animado')
        }
        
    })
})



