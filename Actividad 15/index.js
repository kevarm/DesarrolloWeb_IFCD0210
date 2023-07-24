var nombres;
nombres= new Array(5);

nombres = ['Kevin','Aarón','Brian','Esteban','Jennifer']

document.write(nombres);

for (let i=0; i<nombres.length; i++){
    document.write("</br>" + nombres[i] + " posición "+ (i));
}