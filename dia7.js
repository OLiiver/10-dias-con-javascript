document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

/*23. Clase String
23.1 Ingresar una serie de nombres por teclado hasta que se cargue la palabra Fin, y mostrar cuántos nombres se ingresaron.

23.2 Igual al anterior, pero que termine la aplicación sin contemplar mayúsculas ni minúsculas.
Es decir que para salir se pueda teclear fin, Fin o FIN.

var nombre, c=0, n;

do {
  nombre = prompt('Ingrese nombres, si desea dejar de escribir nombre escribir fin');
  n = nombre.toLowerCase();
  if( n != 'fin'){
    c++;
  }
  document.write(nombre + '<br>');
} while (n != 'fin');

c--;
if(c == -1){
  c = 0;
}
document.write('Nombres escritos: ' + c);

23.3 Realizar la búsqueda de un string clave en un string fuente.
Se deberá ingresar una frase o texto (fuente) y luego la clave a buscar.
En caso de encontrarla, imprimir la posición, de lo contrario una leyenda.

*/
var texto, palabra, busqueda, t;
  texto = prompt('Ingrese un texto para hacer una busqueda');
  palabra = prompt('Ingrese la palabra a buscar en el texto');
  busqueda = texto.indexOf(palabra);

  document.write(texto);
  document.write('<br>');document.write('<br>');
  document.write(palabra);
  document.write('<br>');document.write('<br>');
  if(busqueda != -1){
    t = 'La palabra se encuntra de la posicion ' + busqueda + ', ' + (busqueda + palabra.length);
    document.write(t);
  } else {
    document.write('No se encontro la Palabra');
  }

/*

23.4 Ingresar una palabra o texto por teclado y determinar si es o no una palabra palíndromo.
(Palabra que se lee de igual manera de adelante hacia atrás, que de atrás hacia delante)

23.5 Realizar un programa que permita cargar una dirección de mail e implementar una función que verifique
si el String tiene cargado el carácter @.

23.6 Cargar un String por teclado e implementar las siguientes funciones:
a) Imprimir la primera mitad de los caracteres de la cadena.
b) Imprimir el último carácter.
c) Imprimirlo en forma inversa.
d) Imprimir cada carácter del String separado con un guión.
e) Imprimir la cantidad de vocales almacenadas.

23.7 Codifique un programa que permita cargar una oración por teclado, luego mostrar cada palabra ingresada en una línea distinta.
Por ejemplo si cargo:
	La mañana está fría.
Debe aparecer:
La
mañana
está
fría.
*/


/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/
/*

*/

/*

*/

/*

*/


/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/
