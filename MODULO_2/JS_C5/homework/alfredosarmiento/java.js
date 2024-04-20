

var age = prompt("Digite su Edad:" );
var count = 1;
    while ( count <= age ){
        document.write("Año Cumplido ", count, "<br>");
        count = count + 1;
        }



    var tabla = prompt("Digite la Tabla a Imprimir:" );
    for (var numberB = 1; numberB <= 10; numberB++){
        const tableResult = numberB * tabla;
        document.write(tabla, "* ", numberB, "=", tableResult, "<br>");}





        var invertir = parseInt(prompt("Ingresar el total a invertir"))
        var meses = parseInt(prompt("Ingresar los meses"))
        
        totalInversion = 0
        
        for (let mes = 1; mes<= meses; mes++) {
            totalInversion += invertir;
            document.write("Mes" + mes + ": $" + totalInversion + "<br>");
        }
        document.write("Fin, total a ahorrar $" + totalInversion);

//RETO JS 5  for
        var multiplicando=1;
		var multiplicador=1;
		for (multiplicando = 1; multiplicando <= 10 ; multiplicando++) {
			for (multiplicador = 1; multiplicador <= 10 ; multiplicador++) {
				var resultado = multiplicando * multiplicador;
				
				document.write( multiplicando + " X " + multiplicador + " = " + resultado);
				document.write("<br>");		
			}
            document.write("<br>");
        }


//RETO JS 5 while   
        var multiplicando=1;
        var multiplicador=1;
        do{
            do{
                var resultado = multiplicando * multiplicador;
                document.write("<br>");
                document.write( multiplicando + " X " + multiplicador + " = " + resultado);
                document.write("</br>");
                multiplicador += 1;
            }while(multiplicador<=10);
            multiplicador = 1;
            multiplicando +=1;
            document.write('<br>' );
        }while(multiplicando<=10);
        
    