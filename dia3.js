/*document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

9. Operadores lógicos && (y) en las estructuras condicionales.
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

/*10. Operadores lógicos || (o) en las estructuras condicionales.
Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menores a 10,
imprimir en la página la leyenda 'Alguno de los números son menores a diez'.

var num1 = prompt('ingrese un numero'), num2 = prompt('ingrese un numero'), num3 = prompt('ingrese un numero');

if(num1 < 10 || num2 < 10 || num1 < 10) {
  document.write('Alguno de los números son menores a diez.');
}
*/

/*11 Estructuras switch.
11.1. Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés.
Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.

var palabra = prompt('ingresar alguna de estas palabras casa, mesa, perro, gato');

switch (palabra){
  case 'casa': document.write(palabra + ' :  house');
    break;
  case 'mesa': document.write(palabra + ' :  table');
    break;
  case 'perro': document.write(palabra + ' :  dog');
    break;
  case 'gato': document.write(palabra + ' :  ca');
    break;
}
*/


/*12 Estructura repetitiva (while)
12.1 Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado).

var x = 0, u = 0;

while(u <= 25){
    document.write(x); document.write('<br>');
    x = x + 11;
    u = u + 1;
}

12.2Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc.

var num = 8;

while(num < 500){
  document.write(num);document.write('<br>');
  num = num + 8;
}
*/
/*13. Concepto de acumulador.
13.1 Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.


var nota,
    x = 1,
    menores = 0, mayores = 0;

    while (x <= 10) {
      nota = prompt('ingrese la nota', '9');
      parseInt(nota);

      document.write(nota + '   //   ');

      if(nota <= 7) {
        mayores = mayores + 1;
      } else {
        menores = menores + 1;
      }

      x = x + 1;
    }

    document.write('<br>');document.write('<br>');
    document.write('puntajes mayores a 7 : ' + mayores);
    document.write('<br>');document.write('<br>');
    document.write('puntajes menores a 7 : ' + menores);

13.2 Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.

document.write('13.2 Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.');

var x = 1, altura, suma = 0;

while (x < 5) {
  altura = prompt('ingrese la altura');
  console.log(altura);
  altura = parseInt(altura);
  console.log(suma);
  suma = altura + suma ;

  x = x + 1;
}

console.log(altura);
console.log(suma);
suma = suma / 5;
document.write('<br>');document.write('<br>');
document.write('el promedio de las alturas es: ' + suma );


13.3 En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500,
realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y
cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.

var sueldo, x = 1, menor = 0, mayor = 0, todosLosSueldos = 0;

while( x <= 5) {
  sueldo = prompt('Ingrese el sueldo del empleado');
  sueldo = parseInt(sueldo);

  document.write ('sueldo: ' + x + '  ' + sueldo + '<br>');
  todosLosSueldos = todosLosSueldos + sueldo;

  if (sueldo < 300) {
    menor = menor + 1 ;
  }else {
    mayor = mayor + 1 ;
  }
  x = x + 1;
}
document.write('<br>');document.write('<br>');
document.write(menor + ' empleados ganan menos de 300');
document.write('<br>');document.write('<br>');
document.write(mayor + ' empleados ganan mas de 300');
document.write('<br>');document.write('<br>');
document.write(' La empresa invierte en empleados ' + todosLosSueldos);

13.4 Realizar un programa que imprima 20 términos de la serie 5 - 10 - 15 - 20, etc. (No se ingresan valores por teclado)

var x = 1, u = 0;
while (x <= 20) {
  u = u + 5;
  x = x + 1;
  document.write( u + '  <br>')
}

13.5 Mostrar los múltiplos de 10 hasta el valor 1500. Debe aparecer en pantalla 10 - 20 -30 etc.

var x = 0;
while (x < 1500) {
  x = x + 10;
  document.write( x + '  <br>')
}

14.6 Realizar un programa que permita cargar dos listas de 3 valores cada una.
Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor
(mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.

var x = 0, l = 0, lista1, lista2, suma = 0;

while(x < 2) {
  while(l < 3) {
    valor = prompt('Ingrese un valor a la lista')
    valor = parseInt(valor);
    suma = suma + valor;

    l = l + 1;
  }
  if (x == 1){
    lista1 = suma;
  } else {
    lista2 = suma
  }
  suma = 0;
  l = 0;
  x = x + 1;
}

if(lista1 > lista2){
  document.write('lista 1 es mayor que lista 2');
} else {
  if(lista2 > lista1){
    document.write('lista 2 es mayor que lista 1');
  } else {
    document.write('No se ingreso ningun valor');
  }
}


14.7Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
Emplear el operador "%" en la condición de la estructura condicional.
	if (valor%2==0)
El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0; 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.

 var x = 0, numero, par = 0, impar = 0;

 while( x < 5){
   numero = prompt('Ingrese un numero');
   numero = parseInt(numero);

   document.write(numero + '<br>');

   if(numero % 2 == 0) {
     par = par + 1;
   } else {
     impar = impar + 1;
   }

   x = x + 1;
 }

document.write('<br>');document.write('<br>');
document.write('la cantidad de numeros pares es: ' + par);
document.write('<br>');document.write('<br>');
document.write('la cantidad de numeros impares es: ' + impar);
*/

/*14 Estructura repetitiva (do/while)
14.1Realizar un programa que acumule (sume) valores ingresados por teclado hasta ingresa el 9999 (no sumar dicho valor,
solamente indica que ha finalizado la carga). Imprimir el valor acumulado e informar si dicho valor es cero,
mayor a cero o menor a cero.

yo pregunte cuantas cuentas hay
pero la idea de que se finalice el programa con otro numero esta buena

var valores = 0, x = 0,
    valor, acumule = 0;

do {
  valor = prompt('Ingrese un valor y si desea romper el ciclo ingrese 9999', '9999');
  valor = parseInt(valor);

  if( valor != 9999) {
    acumule = acumule + valor ;

    x = x + 1;
    document.write( x +'. valor ingresado: ' + valor);document.write('<br>');
  }
} while(valor != 9999);

document.write('<br>');document.write('<br>');
document.write('La suma de los valores es: ' + acumule);
document.write('<br>');document.write('<br>');

14.2 En un banco se procesan datos de las cuentas corrientes de sus clientes.
De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual.
El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta	'Acreedor' si el saldo es >0.
			'Deudor' si el saldo es <0.
			'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores.


var numeroCuenta, nombreCliente, saldoActual, x = 0,
    numCuentas = prompt('Numero de cuentas a ingresar: ', '10');

do {
  numeroCuenta = prompt('Ingrese el numero de cuenta: ');
  numeroCuenta = parseInt(numeroCuenta);
  nombreCliente = prompt('Ingrese nombre del cliente: ');
  saldoActual = prompt('Ingrese el saldo actual de la cuenta: ');
  saldoActual = parseInt(saldoActual);

  if (saldoActual > 0 ){
    estado = 'Acreedor';
  } else {
    if(saldoActual < 0 ){
      estado = 'Deudor';
    }else{
      estado = 'Nulo';
    }
  }

  document.write('Numero de cuenta:   ' + numeroCuenta);
  document.write('<br>');document.write('<br>');
  document.write('Nombre de cliente:  ' + nombreCliente);
  document.write('<br>');document.write('<br>');
  document.write('Saldo actual:       ' + numeroCuenta);
  document.write('<br>');document.write('<br>');
  document.write('Estado:             ' + estado);
  document.write('<br>');document.write('<br>');

  x = x + 1;
} while(x < numCuentas );

14.3 Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo.
De cada una de las personas censadas se tiene la siguiente información: número de documento, edad y sexo ('femenino' o 'masculino')
Se pide confeccionar un programa que lea los datos de cada persona censada
(para finalizar ingresar el valor cero en el número de documento) e informar:

a)	Cantidad total de personas censadas.
b)	Cantidad de varones.
c)	Cantidad de mujeres.
d)	Cantidad de varones cuya edad varía entre 16 y 65 años.

var numeroDocumento, edad, sexo,
    p = 0, h = 0, m = 0, e = 0;

  do{
    numeroDocumento = prompt('Ingrese el numero de documento de la persona: (si quiere para el programa ingrese 0)', '173847593745');
    numeroDocumento = parseInt(numeroDocumento);

    if (numeroDocumento > 0){

      edad = prompt('Ingrese la edad de la persona', '24');
      edad = parseInt(edad);
      sexo = prompt('Ingrese el sexo de la persona (masculino o femenino)', 'masculino o femenino');

      p = p + 1;

      switch (sexo) {
        case 'masculino': h = h + 1;
          break;
        case 'femenino': m = m + 1;
        default:
      }

      if (sexo = 'masculino'){
        if(edad > 16 && edad > 65){
          e = e + 1;
        }
      }
    }

  } while(numeroDocumento != 0);

  document.write('<br>');document.write('<br>');
  document.write('Cantidad de personas censadas: ' + p);
  document.write('<br>');document.write('<br>');
  document.write('Cantidad de hombres:  ' + h);
  document.write('<br>');document.write('<br>');
  document.write('cantidad de mujeres:  ' + m);
  document.write('<br>');document.write('<br>');
  document.write('Cantidad de hombres entre los 16 y 65:  ' + e);
  document.write('<br>');document.write('<br>');

*/
