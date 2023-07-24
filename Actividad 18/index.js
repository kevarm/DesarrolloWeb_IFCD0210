function pulsar(){

var alumno;
alumno = new Array();

var codigo=document.getElementById(codigo).value;
var nombreapellido=document.getElementById(nombreapellido).value;
var edad=document.getElementById(edad).value;
var correo=document.getElementById(email).value;
var tlf=document.getElementById(tlf).value;

alumno.push(codigo,nombreapellido,edad,correo,tlf);
console.log(alumno);
document.write(alumno);
}
