/*
document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

23. Clase String
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

23.4 Ingresar una palabra o texto por teclado y determinar si es o no una palabra palíndromo.
(Palabra que se lee de igual manera de adelante hacia atrás, que de atrás hacia delante)
ej reconocer

function palindrome(palabra){
  var np, a, pali;

  np = palabra.length;
  a = new Array(np);
  np = np-1;

  // for(i=0; i<=np; i++){
  //   a[i] = palabra.charAt(i);
  // }
  pali = '';
  for(i=np; i>=0; i--){
    //pali = pali + a[i];
    pali = pali + palabra.charAt(i);
  }

  if (palabra == pali){
    document.write('la palabra "' + palabra + '" es palindrome.   ' + pali);
  } else {
    document.write('la palabra "' + palabra + '" no es palindrome.   ' + pali);
  }
}

var palabra = prompt('Ingrese una plabra para verificar si es palindrome');
palindrome(palabra);


23.5 Realizar un programa que permita cargar una dirección de mail e implementar una función que verifique
si el String tiene cargado el carácter @.

function verificar(email){

  if(email.indexOf('@') != -1){
    document.write('correcto email');
  } else {
    document.write('por favor ingrese un email correcto');
  }
}

var email = prompt('Ingrese su email');
verificar(email);


23.6 Cargar un String por teclado e implementar las siguientes funciones:
a) Imprimir la primera mitad de los caracteres de la cadena.
b) Imprimir el último carácter.
c) Imprimirlo en forma inversa.
d) Imprimir cada carácter del String separado con un guión.
e) Imprimir la cantidad de vocales almacenadas.

function imprimir(string){
  var subs, ns, mns, subs, ultimo,
      guio = '', pali = '', v = 0;

  ns = string.length - 1;
  if(ns % 2 == 0){
    mns = ns / 2;
  } else {
    mns = (ns - 1) / 2;
  }

  // a) Imprimir la primera mitad de los caracteres de la cadena.
  subs = string.substring(mns, ns+1);
  document.write('La mitad del string es: ' + subs );
  document.write('<br />');document.write('<br />');
  // b) Imprimir el último carácter.
  ultimo = string.charAt(ns);
  document.write('Ultimo caracter del string: ' + ultimo);
  document.write('<br />');document.write('<br />');
  // c) Imprimirlo en forma inversa.
  for(i=ns; i>=0; i--){
    pali = pali + string.charAt(i);
  }
  document.write('String de forma inversa: ' + pali);
  document.write('<br />');document.write('<br />');
  // d) Imprimir cada carácter del String separado con un guión.
  for(i=0; i<=ns; i++){
    guio = guio + string.charAt(i) + '-';
    vocal = string.charAt(i);
    // e) Imprimir la cantidad de vocales almacenadas.
    if(vocal == 'a' || vocal == 'e' || vocal == 'i' || vocal == 'o' || vocal == 'u') {
      v++;
    }
  }
  document.write('String separado por guiones:  ' + guio);
  document.write('<br />');document.write('<br />');
  document.write('Cantidad de vocales en el string:  ' + v);
}

var string = prompt('Ingrese un string');
imprimir(string);


23.7 Codifique un programa que permita cargar una oración por teclado, luego mostrar cada palabra ingresada en una línea distinta.
Por ejemplo si cargo:
	La mañana está fría.
Debe aparecer:
La
mañana
está
fría.

function separar(oracion){
  var o = oracion.length -1, letra, newOracion = '';

  for(i=0; i<= o; i++){
    letra = oracion.charAt(i);

    newOracion = newOracion + oracion.charAt(i);
    if(letra == ' '){
      newOracion = newOracion + '<br>';
    }
  }

  document.write(newOracion);
}
var oracion  = prompt('Ingrese una oracion');
separar(oracion);
*/
