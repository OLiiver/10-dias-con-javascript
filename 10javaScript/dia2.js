/*
document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

5.4 Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente.
Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.)

var informacion=alert('ingreso del precio de un artículo y la cantidad que lleva el cliente.'),
    precioDelArticulo = prompt('Ingrese el precio del producto',''),
    cantidadDelArticulo = prompt('Ingrese la cantidad del producto',''),

    abonar = parseInt(precioDelArticulo) * parseInt(cantidadDelArticulo);

    document.write('<br>');
    document.write(precioDelArticulo + ' + ' + cantidadDelArticulo);
    document.write('<br>');document.write('<br>');
    document.write(abonar);

 6. Estructuras condicionales simples.
6.1 Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje 'Promocionado'.
Tener en cuenta que para obtener el promedio debemos operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado a entero podemos hacer:
nota1=prompt('Ingrese primer nota:','');
nota1=parseInt(nota1);

var informacion = alert('Este programa le dara una nota promedio de 3 notas que tendra que ingresar a continuacion'),
    nota1 = prompt('Ingrese la Nota del alumno', '7'),
    nota2 = prompt('Ingrese la Nota del alumno', '7'),
    nota3 = prompt('Ingrese la Nota del alumno', '7'),
    promedio = (nota1 + nota2 + nota3)/3;

    document.write('Este programa le dara una nota promedio de 3 notas que tendra que ingresar a continuacion.');
    document.write('<br>');document.write('<br>');document.write('<br>');
    document.write('las notas son: ');document.write('<br>');document.write('<br>');
    document.write(nota1 + ' + ' + nota2 + ' + ' + nota3 + ' + ' + ' = ' + promedio);

6.2 Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales
(tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos utilizar el operador ==)

var informacion = alert('Este programa va a verificar ques sus clave es correcta, porfavor ingrese su clave y vuelvala a ingresar para corroborar los datos'),
    clave1 = prompt('ingrese su clave'),
    clave2 = prompt('ingrese su clave');

      document.write('<br>');document.write('<br>');
    if(clave1 == clave2){
      document.write('su clave es correcta');
    } else {
      document.write('su clave es incorrecta, ya llame a la policia');document.write('<br>');
      document.write('<h1>Corra</h1>')
    }

7. Estructuras condicionales compuestas.
7.1 Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia,
en caso contrario informar el producto y la división del primero respecto al segundo.

var informacion = alert('Este programa crea juegos en tu mente.... aaa mentiras, lo que haces es ingresar 2 numeros, el programa los compara y te dice cual es el mas grande... a darle -->'),
    num1 = prompt('ingrese un numero', 'ej.  2'),
    num2 = prompt('ingrese un numero', 'ej.  8');

if (num1 > num2) {
  document.write('Numero mayor -->   ' + num1 );
} else {
  document.write('Numero mayor -->   ' + num2 );
}

7.2 Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje 'regular', sino 'reprobado'.

  alert('Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje');
var nota1 = prompt('Ingrese la primer nota'),
    nota2 = prompt('Ingrese la segunda nota'),
    nota3 = prompt('Ingrese la tercera nota'),
    promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3;

if( promedio >= 4 ) {
  document.print('nota regular');document.wirte('<br>');
} else {
  document.write('por esta ocasion es mejor que repases lo aprendido y te vuelvas a presentar(REPROBADO)');
}

7.3 Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando si el número tiene uno o
dos dígitos (recordar de convertir a entero con parseInt para preguntar posteriormente por una variable entera).
Tener en cuenta qué condición debe cumplirse para tener dos dígitos, un número entero.

var num = prompt('ingrese un numero no mayor a 2 digitos');

if(num > 99 ){
  document.write('la puta que te re mil pario te dije que no ingresaras un numero mayor a 2 digitos');
} else{
  if(num > 9) {
    document.write('tu numero tiene 2 digitos');
  } else {
    document.write('tu numero tiene 1 digito');
  }
}
*/

/*8.Estructuras condicionales anidadas.

8.1 Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.
alert('Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.');
var num1 = prompt('ingrese un numero'),
num2 = prompt('ingrese un numero'),
num3 = prompt('ingrese un numero');
  if(num1 > num2){
   if(num1 > num3){
      document.write('el numero mayor es ' + num1);
    }
  }else {
    if(num2 > num1){
     if(num2 > num3){
        document.write('el numero mayor es ' + num1);
      }
    }else {
    if(num3 > num1){
     if(num3 > num2){
        document.write('el numero mayor es ' + num1);
      }
    }
  }
8.2 Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.

alert('ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.');
var entero = prompt('Ingrese un numero entero (un numero entre -infinito a infinito)');

if(entero > 0) {
  document.write('es un numero positivo ' + entero);
} else {
  if(entero < 0 ){
    document.write('es un numero positivo ' + entero);
  } else {
    document.write('el numero es 0?? aaaaggg mira si es --> ' + entero);
  }
}

8.3Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y
muestre un mensaje indicando si tiene 1, 2, o 3 cifras.

var num = prompt('Ingrese un numero de hasta 3 cifras');

if(num > 999) {
  while( num > 999){
    num = prompt('Ingrese un numero de hasta 3 cifras');
  }
} else {
  if(num == '') {
    while( num == ''){
      num = prompt('Ingrese un numero de hasta 3 cifras');
    }
  }
}

if(num > 99) {
  document.write('el numero (' + num + ') tiene 3 cifras' )
} else {
  if(num > 9){
    document.write('el numero (' + num + ') tiene 2 cifras' )
  } else {
    document.write('el numero (' + num + ') tiene 1 cifra' )
  }
}

8.4 De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante,
cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente.
Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según
el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
Nivel superior:	Porcentaje>=90%.
Nivel medio:	Porcentaje>=75% y <90%.
Nivel regular:	Porcentaje>=50% y <75%.
Fuera de nivel:	Porcentaje<50%.


var nombreDelPostulante = prompt('Nombre del postulante', 'Juan'),
    cantidadPreguntas = prompt('Cantidad de preguntas', '2956'),
    cantidadPreguntasCorrectas = prompt('Preguntas contestadas correctamente', '2955');

    //regla de tres (total a contar) * (el total)) / (cantidad a obtener en porcentaje )
    //                    (12)       *   (100%)    /          (60)

    // Otro ejemplo de regla de tres
    // A = Cantidad de preguntas ;; B = 100 ;; C = cantidad de preguntas correctas ;;
    // A = B    //  (C * B) / A = X
    // C = X   //

    reglaDeTres = (cantidadPreguntasCorrectas / cantidadPreguntas) * 100 ;

    if(reglaDeTres > 90){
      document.write('Nivel superior');
    } else {
      if(reglaDeTres > 74){
        document.write('Nivel medio');
      }else{
        if(reglaDeTres > 50){
          document.write('Nivel regular');
        }else{
          document.write('Fuera de nivel:	Porcentaje<50%.');
        }
      }
    }
*/
