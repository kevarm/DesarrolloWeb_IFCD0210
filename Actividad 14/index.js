var diasSemana;
console.log(diasSemana);
diasSemana =  new Array (7);
console.log(diasSemana);

diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

document.write(diasSemana);

for (let i=0; i<diasSemana.length; i++){
    document.write("</br>" + diasSemana[i]);
}