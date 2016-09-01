/*
document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

21. Clase Array
21.1 Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
El valor acumulado de todos los elementos del vector.
El valor acumulado de los elementos del vector que sean mayores a 36.
Cantidad de valores mayores a 50.

function numeros(vector){
 var i, a=0, b=0, c=0, n = 0;

 for (i = 0; i<vector.length; i++){
   var a = prompt('Ingrese un valor');
   a = parseInt(a);

   vector[i] = a;

   document.write(',  ' + a);
   document.write('<br>');

   n = n + a;

   if( a >= 36){
     b = b + vector[i];
   }

   if(a > 50){
     c = c + 1;
   }
 }

 document.write('El valor acumulado de todos los elementos del vector:  ' + a);
 document.write('<br>');document.write('<br>');
 document.write('El valor acumulado de los elementos del vector que sean mayores a 36.:  ' + b);
 document.write('<br>');document.write('<br>');
 document.write('antidad de valores mayores a 50.:  ' + c);
}

var vector;
vector = new Array(8);
numeros(vector);

21.2 Realizar un programa que pida la carga de dos vectores numéricos. Obtener la suma de los dos vectores,
dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar componente a componente.
El tamaño del vector es a elección.

function suma(v1, v2){
  var i, vM = 0, v3;
  if(v1.length > v2.length){
    vM = v1.length;
  } else {
    vM = v2.length;
  }

  v3 = new Array(vM);

  for(i=0; i<vM; i++){
    if(!v1[i]){
      v1[i] = 0;
    } else {
      if (!v2[i]){
        v2[i] = 0;
      }
    }
    v3[i] = v1[i] + v2[i];
    document.write( v1[i] + ' + ' + v2[i] + ' = ' + v3[i] + ',  ');
  }
}

function preguntas(v1, v2){
  var i, texto;
  for (i=0; i < v1.length; i++){
    texto = 'Ingrese su ' + (i+1) + ' valor para el primer vector';
    v1[i] = prompt(texto);
    v1[i] = parseInt(v1[i]);
  }

  for (i=0; i < v2.length; i++){
    texto = 'Ingrese su ' + (i+1) + ' valor para el segundo vector';
    v2[i] = prompt(texto);
    v2[i] = parseInt(v2[i]);
  }
}

var v1, v2;

v1 = prompt('De que tamaño quiere que sea el primer vector');
v1 = parseInt(v1);
v2 = prompt('De que tamaño quiere que sea el segundo vector');
v2 = parseInt(v2);

v1 = new Array(v1);
v2 = new Array(v2);
preguntas(v1, v2);
suma(v1, v2);

*/

/*21. Clase Math
21.1 Confeccionar un programa que solicite el ingreso de un número y nos muestre dicho valor elevado a la tercera potencia.
21.2 Ingresar por teclado un valor y luego mostrar la raiz cuadrada de dicho valor;

function tercera(v1){
  var v;
  v = Math.pow(v1, 3);
  document.write(v1 + ' elebado a la tercera potencia = ' + v);
  document.write('<br />');document.write('<br />');
}

function cuadrada(v1){
  var v;
  v = Math.sqrt(v1);
  document.write('Raiz cuadrada de ' + v1 + ' = ' + v);
  document.write('<br />');document.write('<br />');
}

var v1 = prompt('Ingrese un valor');
v1 = parseInt(v1);

tercera(v1);
cuadrada(v1);
*/
