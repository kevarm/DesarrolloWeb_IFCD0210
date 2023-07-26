/** FUNCION HOVER EN FOTO */
function cambiar(){
    document.getElementById('foto').src="code1.jgp";
}
function volver(){
    document.getElementById('foto').src="contacto1.jpg";
}

function actividad2(){
    var numero1 = prompt ("Introduce el primer número");
console.log ("El primer número es " + numero1);
var numero2 = prompt ("introduce el segundo número");
console.log ("El segundo número es " + numero2);

var resultado = 0;

function sumar (num1,num2) {
    return parseInt(num1) + parseInt(num2);
}

function restar (num1,num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiplicar (num1,num2) {
    return parseInt(num1) * parseInt(num2);
}

function dividir (num1,num2) {
    return parseInt(num1) / parseInt(num2);
}

console.log ("El resultado de la suma es " + sumar(numero1,numero2));
console.log ("El resultado de la resta es " + restar(numero1,numero2));
console.log ("El resultado de la multiplicación es " + multiplicar(numero1,numero2));
console.log ("El resultado de la división es " + dividir(numero1,numero2));

document.write ("El resultado de la suma es " + sumar(numero1,numero2));
document.write ("El resultado de la resta es " + restar(numero1,numero2));
document.write ("El resultado de la multiplicación es " + multiplicar(numero1,numero2));
document.write ("El resultado de la división es " + dividir(numero1,numero2));
};

function actividad3(){
    var numero1 = prompt ("Introduce el primer número");
    console.log ("El primer número es " + numero1);
    document.write ("El primer número es " + numero2 + "</br>");
    var numero2 = prompt ("Introduce el segundo número");
    console.log ("El segundo número es " + numero2 + "</br>");
    document.write ("El segundo número es " + numero2 + "</br>");

if (numero1 > numero2) {
    console.log ("El primer número es el mayor");
    document.write("El primer número es el mayor" + "</br>");
}
else if (numero1 == numero2) {
    console.log ("Ambos números son iguales");
    document.write("Ambos números son iguales" + "</br>");
}
else {
    console.log ("El segundo número es el mayor");
    document.write("El segundo número es el mayor" + "</br>");
}
};

function actividad4 (){
    var niños = parseInt(prompt ("Introduce el número de niños"));
console.log ("El número de niños es " + niños);
var niñas = parseInt(prompt ("Introduce el número de niñas"));
console.log ("El número de niñas es " + niñas);

function porcentajeniños (num1,num2) {
    return num1 * 100 / (num1 + num2);
}
console.log ("El porcentaje de niños es del " + porcentajeniños(niños,niñas));

function porcentajeniñas (num1,num2) {
    return num2 * 100 / (num1 + num2);
}
console.log ("El porcentaje de niñas es del " + porcentajeniñas(niños,niñas));
};

function actividad5 (){
    var imp = parseInt(prompt("Escribe el importa de la compra"));

console.log("El importe es de " +imp + " euros");

var mes = prompt("Introduce el mes");

console.log("El mes seleccionado es " + mes);

if (mes==="octubre"){
    
    console.log("El importe es de " + imp*0.85 + " euros");
}
else {
    console.log(imp);
}
}

function actividad6 (){
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
}

function actividad9 () {
    var tabla = prompt("Elige tabla de multiplicar");
    multiplicar(tabla);
    
    
    
    function multiplicar(n){
    
        document.write("<h2>Tabla de multiplicar del "+ n +"</h2>");
    
        document.write("<ul>");
        //i++ significa i=i+1;
    
        for(i = 1;i<=10;i++){
            document.write("<li>");
            document.write(n + "x " + i + "= " + n * i);
            document.write("</li>");
        }
        document.write("</ul>");
    }
    
    multiplicar(1)
    multiplicar(2)
    multiplicar(3)
    multiplicar(4)
    multiplicar(5)
    multiplicar(6)
    multiplicar(7)
    multiplicar(8)
    multiplicar(9)
    multiplicar(10);
    
    
    var tabla2 = prompt ("Elige hasta qué tabla quieres mostrar");
}

function actividad10 (){
    var precio = parseInt(prompt("Escribe el importe de la compra"));
    var mes = prompt("Introduce el mes");
    var pfinal= 0;
    document.write("El precio es  "+precio + " €"+"<br/>");
    document.write("El mes es "+mes +"<br/>");
    
    mes = (mes.toLowerCase());
    switch(mes) {
        case "enero": case "febrero":
            pfinal = precio*0.80;
            document.write("El precio final es "+pfinal +"<br/>");
            break;
        case "julio": case "agosto":
            pfinal = precio*0.85;
            document.write("El precio final es "+pfinal +"<br/>");
            break;
        case "noviembre": case "diciembre":
            pfinal = precio*0.75;
            document.write("El precio final es "+pfinal +"<br/>");
            break;
        default:
            pfinal = precio;
            document.write("El precio final es "+pfinal +"<br/>");
            break;
    }
}
/*
function actividad11 () {
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
}*/

function actividad14 () {
    var diasSemana;
console.log(diasSemana);
diasSemana =  new Array (7);
console.log(diasSemana);

diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

document.write(diasSemana);

for (let i=0; i<diasSemana.length; i++){
    document.write("</br>" + diasSemana[i]);
}
}

function actividad15 () {
    var nombres;
nombres= new Array(5);

nombres = ['Kevin','Aarón','Brian','Esteban','Jennifer']

document.write(nombres);

for (let i=0; i<nombres.length; i++){
    document.write("</br>" + nombres[i] + " posición "+ (i));
}
}

function actividad16 () {
    var numeros;
numeros = new Array (9);
numeros = [[1,2,3],[4,5,6],[7,8,9]]

for (let i=0;i<numeros.length;i++){
    document.write("</br>" +numeros[i]);
}
}

function actividad17 () {
    function pulsar(){
        var arr=[];
        arr=document.formulario.miarea.value.split(" ");
        var n_palabras=arr.length;
        var p_palabra=arr[0];
        var u_palabra=arr[arr.length-1];
        document.getElementById("resultado").innerHTML="Número de palabras: "
        +n_palabras + "</br> Primera palabra: "
        +p_palabra + "</br> Última palabra: "
        +u_palabra;
    }
}

function actividad18 () {
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
}