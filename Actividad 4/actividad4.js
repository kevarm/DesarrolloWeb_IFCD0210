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
