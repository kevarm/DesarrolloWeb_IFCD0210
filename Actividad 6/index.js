/**InicioProceso
 * Escribir: "Introduce tu clave"
 * Si clave=123456, mostrar "Acceso autorizado"
 * Si clave diferente, mostrar "Introduce tu clave, te quedan x intentos"
 * Máximo 3 intentos
 * Fin del proceso
 */

var clave = prompt("Introduce tu clave");
var intentos = 0;


for (intentos = 1; intentos <3; intentos++){
    if (clave!=123456){
        prompt("Introduce tu clave, te quedan " + parseInt(3-intentos) + " intentos");
    }
    else {
        alert("Acceso autorizado");
        break;
    }
}