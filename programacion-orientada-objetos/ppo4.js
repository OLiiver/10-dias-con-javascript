/*51 Array: método splice
51.1 Crear un vector con una lista de valores.
Luego borrar las componentes donde hay un 2 y al mismo tiempo insertar dos elementos con el valor 1.

var vector = [0,1,2,3,4,2,5,6,7,2];

//imprimir el vector
for (var i=0; i < vector.length; i++) {
  document.write(vector[i] + '<br />');
}
document.write('<br /><br />');
//document.write('<br /><br />');
//cambiar los numeros 2
for (var i=0; i < vector.length; i++) {
  if(vector[i] == 2 ){
    vector.splice(i, 1, 1, 1);
  }
}
// imprimir el vector
for (var i=0; i < vector.length; i++) {
  document.write(vector[i] + '<br />');
}
*/

/*52 Array: método slice
52.1 Crear un vector de 10 elementos con valores aleatorios comprendidos entre 0 y 1000.
Buscar el menor y luego generar otro vector a partir de dicha posición hasta el final.

var vector = new Array(10), menor = 1000, vector2, posicion=0;

for (var i=0; i < vector.length; i++) {
  vector[i] = parseInt(Math.random() * 1000);
  document.write(vector[i] + '<br />');
}
document.write('<br /><br />');
document.write('<br /><br />');
for (var i=0; i < vector.length; i++) {
  if (vector[i] < menor) {
    menor = vector[i];
    posicion = i;
  }
}
vector2 = vector.slice(posicion);
for (var i=0; i < vector2.length; i++) {
  document.write(vector2[i] + '<br />');
}
*/

/*53 Array: método join
53.1 Crear un vector con los datos de 5 personas.
Luego imprimir por pantalla uno abajo de otro utilizando el método join para generar un string y
agregarle entre elementos la marca html <br>.

  var nombres=new Array(5);
  var f;
  for(f=0;f<nombres.length;f++)
  {
    nombres[f]=prompt('Ingrese un nombre:','');
  }
  document.write(nombres.join('<br>'));

*/
/*54 Array: método concat

  var vec=[10,20,30,40];
 var vecnuevo=vec.concat(1,2,3);
 document.write('Vector origen<br>');
 document.write(vec.join()+'<br>');
 document.write('Vector generado<br>');
 document.write(vecnuevo.join()+'<br>');
*/

/*55 Array: método toString
55.1 Crear un vector de 10 elementos. Inicializar los valores del vector cuando se crea.
Inicializar dos variables que resulten de llamar primero al método toString() y
la segunda variable inicializarla llamando al método join() sin parámetros.
Mostrar un mensaje si el resultado de la ejecución de los dos métodos retorna el mismo valor
(empleando un if para comparar los string)

var vec=[1,2,3,4,5,6,7,8,9,10];
 var cadena1=vec.toString();
 var cadena2=vec.join();
 if (cadena1==cadena2)
   document.write('son iguales los dos string');
 else
 document.write('no son iguales los dos string');
 */

/* 56 Array: distintas formas de recorrerlo

var vec=[10,,30,,50];
 document.write('Recorredo del vector con un for clásico<br>');
 var f;
 for(f=0;f<vec.length;f++)
 {
   document.write(vec[f]+'-');
 }
 document.write('<br>');
 document.write('Recorredo del vector con un for in<br>');
 for(var indice in vec)
 {
   document.write(vec[indice]+'-');
 }

resultado en pantalla:

 Recorredo del vector con un for clásico
10-undefined-30-undefined-50-
Recorredo del vector con un for in
10-30-50-

*/

/* 57	Funciones: objeto arguments
57.1 Confeccionar una función que obtenga y retorne el mayor valor de una lista de enteros que le pasamos como parámetros.
window.onload=iniciar;


function iniciar() {
  var main = document.getElementById('main');

  main.innerHTML = mayorValor(2, 5, 6, 8, 93, 45, 12, 5, 09, 234);
}

function mayorValor() {
  var mayor=arguments[0], i;
  for (i=0; i < arguments.lenght; i++) {
    if(arguments[i] > mayor) {
      mayor = arguments[i];
    }
  }

  return mayor;
}
*/

/* 58 Funciones: variables locales y variables globales
59 Funciones: caracteres válidos para su nombre
*/

/*60 Funciones: anidadas
60.1 Confeccionar una función que reciba un parámetro y defina una variable local.
Definir dentro de la función que acabamos de crear una función anidada que contenga un parámetro.
En la función anidada imprimir el parámetro de la función que la contiene,
el parámetro que tiene la función anidada y el valor de la variable local de la función principal.

function elAnonimato(parametro) {
  var p = parametro, main;

  function anidada(para) {
    main = document.getElementById('main');
    main.innerHTML = 'parametro de la funcion anidada' + para + '<br />' + 'parametro de la funcion local' + p;
  }

  anidada(2);
}

window.onload = function() {
  elAnonimato(4);
};

*/

/* 61	Funciones: parámetros de tipo función
62 Eventos

63 Eventos: click y dblclick
63.1 Realizar un programa que muestre en un div el número 2.
Cada vez que se hace doble clic sobre el mismo duplicar el valor contenido en el div.

onload = function() {
  var main = document.getElementById('main'), s = 2;
  main.addEventListener('click', duplicar, false);

  function duplicar() {
    main.innerHTML = s;
    s = s+2;
  }
}
*/

/*64 Eventos: mousedown y mouseup
64.1 Elaborar un programa que muestre un div de color rojo.
 Cuando se presione cambiar el color a amarillo y luego de soltar el botón del mouse volver a pintar de rojo.

onload = function () {
  document.getElementById('main').addEventListener('mousedown', function(){
    this.style.backgroundColor = 'yellow'
  }, false);
  document.getElementById('main').addEventListener('mouseup', function(){
    this.style.backgroundColor = 'red'
  }, false);
}
*/

/* 65 Eventos: mouseover y mouseout
65.1 Mostrar un elemento de tipo H1,
luego cuando se ingrese con el mouse dentro del mismo cambiar el color a letra roja y color de fondo amarillo,
luego cuando se mueva la flecha del mouse fuera del elemento volver al color original.
onload = function() {
  document.getElementById('titulo').addEventListener('mouseover', function(){
    this.style.color = 'red';
    this.style.backgroundColor = 'yellow';
  }, false);
  document.getElementById('titulo').addEventListener('mouseout', function(){
    this.style.color = 'black';
    this.style.backgroundColor = 'initial';
  }, false);
}
*/

/*66 Evento: mousemove
67 Eventos: keydown, keyup y keypress

68 Evento: change
68.1 Confeccionar un formulario que muestre un checkbox que cuando se tilde active un botón
(el checkbox debe mostrar un mensaje que diga : "Confirma los términos y condiciones?")
*/
onload = function() {
  document.getElementById('condiciones').addEventListener('change', function() {
    if(this.checked == true){
      document.getElementById('submit').disabled = false;
    } else {
      document.getElementById('submit').disabled = true;
    }
  }, false);
}
