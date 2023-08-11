    $( function() {
    $( "#accordion" ).accordion();
  
} );

function acceso(){
    document.querySelector('#contenido').innerHTML=`
    <form class="formulario">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre">
        <label for="apellidos">Apellidos</label>
        <input type="text" id="apellidos">
        <label for="email">Email</label>
        <input type="email" id="email">
        <label for="contraseña">Contraseña</label>
        <input type="password" id="contraseña">
        <button>Enviar</button>
    </form>
    `
}

function registro(){
    document.querySelector('#registro').innerHTML=`
    <p>HOLAAAAAAAAAA</p>`
}
  