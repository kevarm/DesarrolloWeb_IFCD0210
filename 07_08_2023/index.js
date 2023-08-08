/**Lo siguient es para que el js y el jquery no se carguen hasta que el documento html esté cargado por completo, para que no de error */
$(document).ready(function(){
$('#rojo')
.css('background-color',"red") /**Le damos estilos css a selectores del html */
.css("color", "white")
$('#amarillo')
.css('background-color',"yellow")
.css('color',"white")
$('#verde')
.css('background-color',"green")
.css('color',"white")
$('.recuadro')
.css("border","2px solid black")

$(document).mousemove(function(){
    $('body').css("cursor", "none");
    $('#sigueme')
    .css("left",event.clientX)
    .css("top",event.clientY)
});

$('#add-button')
.click(function(){
    $('#menu').append('<li><a href="'+$('#add-link').val()+'">Ir a nuevo enlace</a></li>');
})

$('#animar').click(function(){
    var caja=$('#contenedor');

    caja.animate({
        marginLeft: '400px',
        fontSize: '40px',
        height: '120px'},'slow')
        .animate({
            borderRadius: '25px',
            marginTop: '200px'
        }, 'fast')
    })

$( function() {
    $( "#draggable" ).draggable();
    } );
})
