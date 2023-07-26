var usuario = prompt ("Usuario");

if (usuario=="Admin"){
    var contraseña= prompt("Contraseña");
    
    if (contraseña=="Webmaster"){
    alert("Bienvenido");

        }else if (contraseña==null){
            alert("Contraseña Cancelado");

             }else {
                alert("Contraseña incorrecta");
} else if (usuario==null) {
    alert("Usuario Cancelado")
}else {
    alert("Incorrecto")
    }
}
    



/** 
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
}**/
