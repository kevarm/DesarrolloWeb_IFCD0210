var diasSemana;
console.log(diasSemana);
diasSemana =  new Array (7);
console.log(diasSemana);

diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

document.write(diasSemana);

/**document.write("</br> " + diasSemana[0]);
document.write("</br> " + diasSemana[1]);
document.write("</br> " + diasSemana[2]);
document.write("</br> " + diasSemana[3]);
document.write("</br> " + diasSemana[4]);
document.write("</br> " + diasSemana[5]);
document.write("</br> " + diasSemana[6]);
**/
for (let i=0; i<diasSemana.length; i++){
    document.write("</br>" + diasSemana[i]);
}