document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

/*9. Operadores lógicos && (y) en las estructuras condicionales.
9.1 Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad
(se debe cargar por separado el dia, el mes y el año)

alert('cargar una fecha cualquiera, se debe cargar por separado el dia, el mes y el año, el programa va a verificar si dicha fecha corresponde a Navidad ')
var dia = prompt('Ingerse una dia', '12'),
    mes = prompt('Ingrese un mes', '6'),
    ano = prompt('Ingrese un año', '2016');

if( dia == 24 && mes == 12) {
  document.write('La fecha ingresada es navidad, bien hay');
} else {
  document.write('No es navidad ');
}

9.2 Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del primero con el segundo y a este resultado
se lo multiplica por el tercero (tener en cuenta que puede haber tres condiciones simples)

var n1 = prompt('Ingrese un numero'),
    n2 = prompt('Ingrese un numero'),
    n3 = prompt('Ingrese un numero');

if( n1 == n2 && n1 == n3){
  var suma = (n1 + n2) * n3;
  document.write(suma);
}

9.3 Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, imprimir en la página la leyenda
' Todos los números son menores a diez'.

var n1 = prompt('Ingrese un numero'),
    n2 = prompt('Ingrese un numero'),
    n3 = prompt('Ingrese un numero');

if( n1 < 10 && n2 < 10 && n3 < 10){
  document.write('Todos los numeros son menores a 10');
}

9.4 Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir dos valores enteros x e y.
Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. (1º Cuadrante si x > 0 Y y > 0 ,
2º Cuadrante: x < 0 Y y > 0, etc.)

var x = prompt(),
    y = prompt();

document.write( x + ' + ' + y );
document.write('<br>');
if( x > 0  && y > 0) {
  document.write('La cordenas indican que se encuentra en el cuadrante 1');
} else {
  if(x < 0 && y > 0) {
    document.write('La cordenas indican que se encuentra en el cuadrante 2');
  }
}

9.5 De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe
a)	Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
b)	Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
c)	Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.

var sueldo = prompt('ingrese el sueldo del operario'),
    antiguedad = prompt('ingrese los años de antiguedad'),
    aumento = 0;

sueldo = parseInt(sueldo);
antiguedad = parseInt(antiguedad);

if(sueldo <= 500 && antiguedad >= 10){
  aumento = sueldo * 0.20;
  sueldo =  sueldo + aumento;

  document.write('su sueldo es: ' + sueldo );document.write('<br>');document.write('<br>');
  document.write('Recibira un aumento del 20% de su sueldo, que es el equivalente a ' + aumento);
} else {
  if(sueldo <= 500 && antiguedad < 10) {
    aumento = sueldo * 0.05;
    sueldo =  sueldo + aumento;

    document.write('su sueldo es: ' + sueldo );document.write('<br>');document.write('<br>');
    document.write('Recibira un aumento del 5% de su sueldo, que es el equivalente a ' + aumento);
  } else {
    if(sueldo > 500) {
      document.write('su sueldo es: ' + sueldo );document.write('<br>');document.write('<br>');
      document.write('Su sueldo es superior a 500 y la empresa no le hara un aumento');
    }
  }
}
*/
/*

*/
