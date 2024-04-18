// Hay 2 maneras de crear ciclos / bucles / loops en JS
// While


// var userPassword = prompt("contraseña de inicio");

// if(userPassword === "kambcode"){
//     document.write("Ingreso exitoso")
// } else {
//     document.write("Contraseña incorrecta")
// }

// var userPassword = prompt("contraseña de inicio");

// while (userPassword !== "kambcode") {
//     userPassword = prompt("Contraseña incorrecta, Digita de nuevo");
// }

// document.write("FIN DE PROGRAMA");

// Hacer un programa que imprima los numeros del 1 al 100
// Ciclo es aquello que vamos a repetir hasta un fin
// Iterar es las veces que vamos a tener este ciclo

// var number = 1;

// while (number <= 100){
//     document.write(number, "<br>");
//     number = number + 1; 
// }

// document.write("FIN DEL PROGRAMA");


// Hacer un programa que cuente de 2 en 2 hasta 50
// 2, 4, 6... 50 

// Hacer lo mismo de forma decendente
// 50, 48, 46... 2 

// var number = 5;

// while (number <= 50){
//     document.write(number, "<br>")
//     number = number + 5 // number +=5 
    // number = number + 1 // number++
//}

//for (inicio; condicion; incremento){Que queremos que pase}


// for (var numberA = 1; numberA <= 50; numberA++){
//     document.write(numberA, "<br>");
// }

// document.write("FIN DEL PROGRAMA");

//for (inicio; condicion; incremento){Que queremos que pase}
for (var numberB = 1; numberB <= 10; numberB++){
    const tableResult = numberB * 3;
    document.write(numberB, "* 3 es igual a =", tableResult, "<br>");
    var count = 1;
    while ( count <= 3 ){
        document.write("Hola mundo ", count, "<br>");
        count = count + 1;
    }
}

// RETO 2: 

// Hacer un programa que imprima los numeros del 1 al 100
// Resolver con un for
