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
