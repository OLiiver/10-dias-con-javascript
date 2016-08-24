/*
document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

15.	Estructura repetitiva (for)
15.1Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo.
El programa deberá informar:
a)	De cada triángulo la medida de su base, su altura y su superficie.
b)	La cantidad de triángulos cuya superficie es mayor a 12.

var x, base, altura, area = 0, t=0;

for (x = 1; x<= 3; x++){
  base = prompt('ingrese la base del triangulo', '10');
  base = parseInt(base);

  altura = prompt('ingrese la altura del triangulo', '8');
  altura = parseInt(altura);

  area = (base * altura)/2;
  document.write(base + ' * ' + altura + ' / 2  = ' + area );
  document.write('<br>'); document.write('<br>');
  if(area > 12){
    t = t + 1;
  }
}
document.write('numero de triangulos con area mayor a 12 :  ' + t);

15.2 Desarrollar un programa que solicite la carga de 10 números e imprima la suma de lo últimos 5 valores ingresados.

var x, numero, suma = 0;

for (x = 1; x < 10; x++){
  texto = x + '. ingrese un numero'
  numero = prompt(texto);
  numero = parseInt(numero);

  if( x > 4) {
    suma = suma + numero;
  }

  document.write(numero + '<br>');
}
document.write('la suma de los numeros es: ' + suma);

15.3 Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).

var x;

for(x = 5; x <= 50; x = x + 5) {
  document.write(x  + '<br>');
}

15.4 Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

var x, numero = prompt('Ingrese un numero del 1 al 10', '8');

numero = parseInt(numero);


if(numero <= 10 && numero > 0){
  for(x = 1; x <= 12; x++){
    multiplicacion = x * numero;

    document.write( x + ' * ' + numero + ' = ' + multiplicacion );
    document.write('<br>');document.write('<br>');
  }
}

15.5Realizar un programa que lea los lados de 4 triángulos, e informar:
a)	De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
b)	Cantidad de triángulos de cada tipo.
c)	Tipo de triángulo del que hay menor cantidad.

var x, lado1, lado2, lado3,
    e = 0, i = 0, es = 0;

for (x = 1; x <= 4; x++ ){
  new Promise(function(resolve, reject) {
    lado1 = prompt('Ingrese el lado del cuadrado ', '12');
    lado2 = prompt('Ingrese el lado del cuadrado ', '12');
    lado3 = prompt('Ingrese el lado del cuadrado ', '12');

    lado1 = parseInt(lado1);
    lado2 = parseInt(lado2);
    lado3 = parseInt(lado3);

    document.write('lado1  ' + lado1 + '   ');
    document.write('lado2  ' + lado1 + '   ');
    document.write('lado3  ' + lado1 + '   ');
    document.write('<br>');document.write('<br>');

    if(lado1 == lado2 && lado1 == lado3){
      document.write('Es un triángulo equilátero');
      document.write('<br>');document.write('<br>');
      e = e + 1;
    } else {
      if(lado1 == lado2 && lado1 != lado3){
        document.write('Es un triángulo isóceles');
        document.write('<br>');document.write('<br>');
        i = i + 1;
      } else {
        if(lado2 == lado3 && lado2 != lado1){
          document.write('Es un triángulo isóceles');
          document.write('<br>');document.write('<br>');
          i = i + 1
        } else {
          document.write('Es un triangulo escaleno');
          document.write('<br>');document.write('<br>');
          es = es + 1
        }
      }
    }
  });
}
document.write('la cantidad de triangulos equiláteros es de: ' + e);
document.write('<br>');document.write('<br>');
document.write('la cantidad de triangulos isóceles es de: ' + i);
document.write('<br>');document.write('<br>');
document.write('la cantidad de triangulos escalenos es de: ' + es);
document.write('<br>');document.write('<br>');

if( e < i && e < es){
  document.write('hay mas triangulos equilateros');
} else {
  if(i > e && i > es){
    document.write('hay mas triangulos isóceles');
  } else {
    document.write('hay mas triangulos escalenos');
  }
}

15.6Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano.
Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante.
Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.

var x, y, cuadrante1 = 0, cuadrante2 = 0, cuadrante3 = 0, cuadrante4 = 0,
    puntos = prompt('cuantos puntos desea ingresar'), i ;

for (i = 1; i <= puntos; i++) {
  textoX = i + '. punto, Ingrese el valor en x';
  textoY = i + '. punto, Ingrese el valor en y';
  x = prompt(textoX);
  y = prompt(textoY);

  document.write(i + '. Punto: X = ' + x + ', Y = ' + y);
  document.write('<br>');document.write('<br>');

  // cuadrante1
  if(x > 0 && y > 0){
    cuadrante1 = cuadrante1 + 1;
  } else {
    // cuadrante2
    if(x < 0 && y > 0){
      cuadrante2 = cuadrante2 + 1;
    } else {
      // cuadrante3
      if(x > 0 && y < 0){
        cuadrante3 = cuadrante3 + 1;
      } else {
        // cuadrante4
        cuadrante4 = cuadrante4 + 1;
      }
    }
  }
}

document.write('Total de puntos en el cuadrante 1: ' + cuadrante1);
document.write('<br>');document.write('<br>');
document.write('Total de puntos en el cuadrante 2: ' + cuadrante2);
document.write('<br>');document.write('<br>');
document.write('Total de puntos en el cuadrante 3: ' + cuadrante3);
document.write('<br>');document.write('<br>');
document.write('Total de puntos en el cuadrante 4: ' + cuadrante4);

15.7 Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a)	La cantidad de valores negativos ingresados.
b)	La cantidad de valores positivos ingresados.
c)	La cantidad de múltiplos de 15.
d)	El valor acumulado de los números ingresados que son pares.

var i, valor, n = 0, p = 0, m = 0, cV = 0, sV = 0;

for (i = 0; i<10; i++){
  valor = prompt('Ingrese un valor', '12');

  if(valor < 0) {
    n = n + 1;
  }else {
    p = p + 1;
  }

  if(valor % 15 == 0){
    m = m + 1;
  }

  if(valor % 2 == 0){
    cV = cV + 1;
    sV = sV + valor;
  }
}

document.write('Cantidad de valores negativos ingresados:  ' + n);
document.write('<br>');document.write('<br>');
document.write('Cantidad de valores positivos ingresados:  ' + p);
document.write('<br>');document.write('<br>');
document.write('Cantidad de valores multiplos de 15 ingresados:  ' + m);
document.write('<br>');document.write('<br>');
document.write('Cantidad de valores pares ingresados:  ' + cV);
document.write('<br>');document.write('<br>');
document.write('Suma de los pares ingresados:  ' + sV);
document.write('<br>');document.write('<br>');

15.8 Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a)	Obtener el promedio de las edades de cada turno (tres promedios).
b)	Imprimir dichos promedios (promedio de cada turno).
c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.

var i, turno, prom1 = 0, prom2 = 0, prom3 = 0, edad, pM,
    n = 0, m = 0, t = 0;

for (i=0; i<3; i++){
  turno = prompt('Ingrese la jornada en la que se encuentra el estudiante(mañana, tarde, noche)');
  edad = prompt('Ingrese la edad del estudiante', '12');
  edad = parseInt(edad);

  switch (turno) {
    case 'mañana' || 'manana' || 'Mañana':
      turno = 'Mañana';
      prom1 = prom1 + edad;
      m = m + 1;
      break;
    case 'tarde' || 'Tarde':
      turno = 'Tarde';
      prom2 = promo + edad;
      t = t + 1;
      break;
    case 'noche' || 'Noche':
      prom3 = promo + edad;
      n = n + 1;
      break;
    default:

  }
  // if(turno == 'mañana' || 'manana' || 'Mañana'){
  //   turno = 'Mañana';
  //   prom1 = prom1 + edad;
  // } else {
  //   if(turno == 'tarde' || 'Tarde' ){
  //     turno = 'Tarde';
  //     prom2 = prom2 + edad;
  //   } else {
  //     turno = 'Noche';
  //     prom3 = prom3 + edad;
  //   }
  // }

  document.write('Turno:   ' + turno + ',  Edad:   ' + edad);
  document.write('<br>');
}

prom1 = prom1 / m;
prom2 = prom2 / t;
prom3 = prom3 / n;
document.write('Promedio de jornada Mañana:   ' + prom1 );
document.write('<br>');document.write('<br>');
document.write('Promedio de jornada Tarde:   ' + prom2 );
document.write('<br>');document.write('<br>');
document.write('Promedio de jornada Noche:   ' + prom3 );
document.write('<br>');document.write('<br>');

if(prom1 > prom2 && prom1 > prom3){
  document.write('Promedio de edad mayor: Mañana,  Promedio:   ' + prom1 )
} else {
  if(prom2 > prom1 && prom2 > prom3){
    document.write('Promedio de edad mayor: Tarde,  Promedio:   ' + prom2 )
  } else {
    document.write('Promedio de edad mayor: Noche,  Promedio:   ' + prom3 )
  }
}
*/
