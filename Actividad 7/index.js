/**Actividad 2 */
/**var numero1 = prompt ("Introduce el primer número");
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
console.log ("El resultado de la división es " + dividir(numero1,numero2)); */



/**Actividad 3 */
var numero1 = parseInt(prompt ("Introduce el primer número"));
console.log ("El primer número es " + numero1);
var numero2 = parseInt(prompt ("Introduce el segundo número"));
console.log ("El segundo número es " + numero2);

function comparar (a,b){
    if (numero1 > numero2)
        return console.log ("El primer número es el mayor");
    
    else if (numero1 === numero2)
         return console.log ("Ambos números son iguales");
    
    else
       return console.log ("El segundo número es el mayor");
    
}
