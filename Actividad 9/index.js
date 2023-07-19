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



