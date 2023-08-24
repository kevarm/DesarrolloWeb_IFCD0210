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
        <button>Registrarme</button>
    </form>
    `
}

function validacion(){
    document.querySelector('#contenido').innerHTML=`
    <form class="acceso">
        <label for="nombreacceso">Nombre</label>
        <input type="text" id="nombreacceso">
        <label for="contraseñaacceso">Contraseña</label>
        <input type="password" id="contraseñaacceso">
        <button id="acceder">Acceder</button>
    </form>
    `
};

    // poner aquí la validación

    var botonValidacion = document.getElementById("acceder");

    botonValidacion.addEventListener("click, function(){
        document.querySelector('#datosUsuario').innerHTML=#nombreacceso.value;
        
    });



    var botonColorVerde = document.getElementById("colorverde");

    botonColorVerde.addEventListener("click", function(){
        var elements = document.querySelectorAll(".verde");
        console.log(elements)
        elements.forEach(function(elements){
            elements.style.background= "green";

        })
        
        });

    var botonColorAzul = document.getElementById("colorazul");

    botonColorAzul.addEventListener("click", function(){
        var elements = document.querySelectorAll(".azul");
        console.log(elements)
        elements.forEach(function(elements){
            elements.style.background= "blue";

        })
        
        });    



var nombreacceso = document.getElementById('nombreacceso');

var contraseñaacceso = document.getElementById('contraseñaacceso');

/*function botonacceso (){
if nombreacceso.value == "kevin" && contraseñaacceso.value == "hola"{
    prompt('Acceso autorizado')}
}else{
    prompt('Datos incorrectos')
}; */


/*function registro(){
    document.querySelector('#registro').innerHTML=`
    <p>HOLAAAAAAAAAA</p>`
}*/

