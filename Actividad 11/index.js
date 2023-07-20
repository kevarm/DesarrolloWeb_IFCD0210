/**var usuario = prompt ("Usuario");

if (usuario=="Admin"){
    var contraseña= prompt("Contraseña")
}else if (usuario==="holi") {
    alert("Cancelado")
}else {
    alert("Incorrecto")
};

if (contraseña=="Webmaster"){
    alert("Bienvenido")
}else if(""){
    alert("Contraseña incorrecta")
}else{
    alert("Cancelado")
};**/

var administrador = prompt ("usuario" , []);
    
if (administrador == "Admin" || administrador =="admin" || administrador== "ADMIN")
{
    
var contraseña = prompt ("contraseña:", []);
if (contraseña == "webmaster"){
alert ("Bienvenido");}
else if (contraseña==="" || contraseña===null){
alert ("cancelado");
}
else {
    alert ("contraseña incorrecta");
}

}else if (administrador === "" || administrador === null){
alert ("cancelado");
}else {
alert ("usuario incorrecto");
}
