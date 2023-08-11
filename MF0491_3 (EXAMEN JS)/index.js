var caja = document.getElementById('footer');


caja.style.backgroundColor = 'lightpink';

var imagen = document.getElementById('#img_html')
var boton = document.getElementById('#boton_ocultar')

boton.addEventListener('click', ()=>{
    imagen.className = 'hide'
});

function guardarAlmacenamientoLocal(llave, valor_a_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}

function obtenerAlmacenamientoLocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos;
}

let alumnos = obtenerAlmacenamientoLocal('alumnos') || [];
let mensaje = document.getElementById('mensaje');

var añadirAlumno = document.getElementById('alumnoAñadir');
var añadirAsunto = document.getElementById('asuntoAñadir');
var añadirCorreo = document.getElementById ('correoAñadir');
var añadirMensaje = document.getElementById ('mensajeAñadir');

document.getElementById('botonAñadir').addEventListener("click", function(event){
    event.preventDefault()
    let alumnoAñadir = añadirAlumno.value;
    let asuntoAñadir = añadirAsunto.value;
    let correoAñadir = añadirCorreo.value;
    let mensajeAñadir = añadirMensaje.value;

    let van= true;

if (alumnoAñadir == "" || asuntoAñadir == "" || correoAñadir == "" || mensajeAñadir == "") {
    mensaje.classList.add('llenarCampos');
    setTimeout(() => { mensaje.classList.remove('llenarCampos');

}, 5000);
van = false;
}
else { 
    for(let i=0;i< alumnos.length; i++){
        if(alumnos[i].nombre == alumnoAñadir){
            mensaje.classList.add('repetidoError');
            setTimeout(() => {
                mensaje.classList.remove('repetidoError')
            },2500);
            van = false;
        }
}
};

if (van == true){
    alumnos.push({
        nombre: alumnoAñadir,
        asunto: asuntoAñadir,
        correo: correoAñadir,
        mensaje: mensajeAñadir
    })
    mensaje.classList.add('realizado');
    setTimeout(() =>{
    window.location.reload();
}, 1500)};

    guardarAlmacenamientoLocal('alumnos',alumnos);
})

