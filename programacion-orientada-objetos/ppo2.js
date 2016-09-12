/*41 Definición de varias clases.

41.1 Plantear una clase persona (que permita cargar por teclado su nombre y edad).
Por otro lado crear una clase empresa que tenga como atributos el nombre y
la edad tope para que una persona pueda ingresar como trabajador en la misma.
Confeccionar un pequeño programa en JavaScript que defina 3 objetos de la clase persona y 1 de la clase empresa.
Mostrar cuántas de esas personas están inhabilidadas para ingresar como trabajadores de acuerdo a la edad tope.

<html>
<head>
</head>
<body>

<script type="text/javascript">
function Persona(){
 this.nombre=nombre;
 this.edad=edad;
}

function nombre() {
 this.nombre=prompt('Ingrese su nombre');
}

function edad(){
 this.edad=prompt('Ingresar su edad');
}

function Empresa(){
 this.trabajador=trabajador;
}

function trabajador(edad){
 if(edad < 60){
  alert('Si puede trabajar');
 } else {
  alert('No puedes trabajar aca por tu edad');
 }
}
</script>

<script>
 var persona1, persona2, persona3, empresa;

 persona1 = new Persona();
 persona1.nombre();
 persona1.edad();
 persona2 = new Persona();
 persona2.nombre();
 persona2.edad();
 persona3 = new Persona();
 persona3.nombre();
 persona3.edad();

 empresa = new Empresa();
 empresa.trabajador(persona1.edad);
 empresa.trabajador(persona2.edad);
 empresa.trabajador(persona3.edad);

</script>

</body>
</html>



42 Vectores con componentes de tipo objeto.
42.1 Confeccionar una clase persona que permita almacenar el nombre y la edad. Luego definir un vector de 4 componentes de tipo persona.
Imprimir el nombre de la persona de mayor edad; decir también si hay más de una persona con la edad mayor.

function Persona(nombre, edad) {
  this.nombre=nombre;
  this.edad=edad;
  this.imprimir=imprimir;
 }

function imprimir(){
  document.write('Nombre: ' + this.nombre);
  document.write('<br />');
  document.write('Edad: ' + this.edad);
  document.write('<br />');
}

var persona = new Array(4);
 persona[0] = new Persona('Edison', 12);
 persona[1] = new Persona('Maria', 25);
 persona[2] = new Persona('Paola', 16);
 persona[3] = new Persona('Javier', 20);

 var mayor = 0;
 for(var i=0; i < persona.length ; i++){
  if(persona[i].edad > persona[mayor].edad){
   mayor = i;
  }
 }

persona[mayor].imprimir();

*/

/*
43 Creación de objetos literales
43.1 Crear un objeto que represente los datos de un participante de un juego. Definir las propiedades
 nombre
 puntos
y las funciones:
imprimir (mostrar el nombre de jugador y los puntos actuales)
aumentarpuntos (permite incrementar la cantidad de puntos actuales del jugador)
verificarsigano (mostrar un mensaje si los puntos superan a 1000)

var participante = {
  nombre = nombre,
  puntos = puntos,
  imprimir: function(){
    document.write('Nombre del jugador:  ' + this.nombre + '<br />');
    document.write('Puntos actuales:  ' + this.puntos + '<br />');
  },
  aumentarpuntos: function(aumentar) {
    this.puntos = this.puntos + aumentar;
  },
  verificarsigano: function() {
    if(this.puntos > 1000){
      document.write('Sus puntos son mayores a 1000' + '<br />');
    }
  }
}
*/
