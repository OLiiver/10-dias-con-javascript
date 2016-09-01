/*document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');

 Dia 1 de Java Script */

/* 2. Qué es JavaScript?
2.1 - Realizar un programa que muestre su nombre y su edad en una página HTML.
Emplear el comando write del objeto document para imprimir.
Tener en cuenta que si queremos que cada dato quede en una fila distinta de la página debemos insertar la marca <br>
(salto de linea en HTML), es decir debemos disponer: document.write('<br>')


document.write('Mi Nombre es Revilo <br>');
document.write('y me gusta matar Zombines.... <br>');
document.write('a y tambien programar y comer <br>');

*/

/* 3. Variables.
3.1 - Confeccionar una programa en JavaScript que defina e inicialice una variable de tipo cadena de caracteres
donde almacenemos el nombre de un empleado y otra variable de tipo real donde almacenar el sueldo.
 Imprimir cada variable en una línea distinta en pantalla.


var empleado='',
    sueldo=0;
document.write(empleado);
document.write(sueldo);
*/

/* 4. Entrada de datos por teclado.
Confeccionar un programa que permita cargar el nombre de un usuario y su mail por teclado.
Mostrar posteriormente los datos en la página HTML.


var NombreDeUsuario = prompt('Ingrese su nombre de usuario', ''),
    mail = prompt('Ingrese su mail','');
*/

/*5. 	Estructuras secuenciales de programación.
5.1 Es de fundamental importancia realizar los programas.
Viendo sólo los problemas resueltos en este curso de estudio no alcanza para convertirse en un programador de aplicaciones.

PROBLEMAS
Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del mismo
(El perímetro de un cuadrado se calcula multiplicando el valor del lado por cuatro)


var ladoDelCuadrado = prompt('Ingrese el tamaño de uno de los lados del cuadro',''),
    operacion = parseInt(ladoDelCuadrado);

    document.write('El perimetro del cuadrado es de: ' + operacion);


5.2 Escribir un programa en el cual se ingresen cuatro números, calcular e informar la suma de los dos primeros y
 el producto del tercero y el cuarto.

5.3 Realizar un programa que lea cuatro valores numéricos e informar su suma y producto.

var informacion = prompt('Vea socio, usted tiene que agregar 4 numeros, y con estos 4 numeros, el programa lo va a sumar y multiplicar dandole la respuesta de cada uno'),
    num1 = prompt('Ingrese un numero'),
    num2 = prompt('Ingrese un numero'),
    num3 = prompt('Ingrese un numero'),
    num4 = prompt('Ingrese un numero'),
    suma = num1 + num2 + num3 + num4;
    producto = num1 * num2 * num3 * num4;

document.write('imprimalo perro');
document.write('<br>');document.write('<br>');
document.write('la suma es esta: ');document.write('<br>');
document.write(num1+' + '+num2+' + '+num3+' + '+num4+' = '+suma);
document.write('<br>');document.write('<br>');
document.write('la multiplicacion es esta:');;document.write('<br>');
document.write(num1+' * '+num2+' * '+num3+' * '+num4+' = '+producto);
document.write('<br>');document.write('<br>');

*/
