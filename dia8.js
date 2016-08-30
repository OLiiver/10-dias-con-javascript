/*
document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

24. Formularios y Eventos.
24.1 Crear un formulario con tres botones con las leyendas "1", "2" y "3". Mostrar un mensaje indicando qué botón se presionó.

var c1 = 0, c2 = 0 , c3 = 0;

function numero1(){
  c1++;
  alert('Se hizo click en el boton numero 1');
}
function numero2(){
  c2++;
  alert('Se hizo click en el boton numero 2');
}
function numero3(){
  c3++;
  alert('Se hizo click en el boton numero 3');
}


<html>
<head>
</head>
<body>

<script type="text/javascript">
var contador=0;
function incrementar()
{
  contador++;
  alert('El contador ahora vale :' + contador);
}
</script>

<form>
  <input type="button" onClick="incrementar()" value="incrementar">
</form>
</body>
</html>
*/

/*25. Controles FORM, BUTTON y TEXT.
25.1Crear un programa que permita cargar un entero en un text y al presionar un botón nos muestre dicho valor elevado al cubo
(emplear la función alert).

<input type="text"id="entero">
<input type="button" value="Confirmar la operacion" onClick="entero()">
<script type="text/javascript">
function entero(){
 var num = document.getElementById('entero').value;
 alert(num);
}
</script>

25.2 Cargar dos números en objetos de tipo text y al presionar un botón, mostrar el mayor.

<input type="text"id="entero1">
<input type="text"id="entero2">
<input type="button" value="Confirmar la operacion" onClick="entero()">
<script type="text/javascript">
function entero(){
 var num1 = document.getElementById('entero1').value,
     num2 = document.getElementById('entero2').value;
 num1 = parseInt(num1);
 num2 = parseInt(num2);
 if(num1 > num2){
 alert(num1);
 }else{
 alert(num2);
 }
}

25.3 Cargar un nombre y un apellido en sendos text. Al presionar un botón, concatenarlos y mostrarlos en un tercer text
(Tener en cuenta que podemos modificar la propiedad value de un objeto TEXT cuando ocurre un evento)

<input type="text"id="entero1">
<input type="text"id="entero2">
<input type="text"id="entero3">
<input type="button" value="Confirmar la operacion" onClick="entero()">
<script type="text/javascript">
function entero(){
 var num1 = document.getElementById('entero1').value,
     num2 = document.getElementById('entero2').value,
     num3;

 num3 = num1 + ' ' + num2;
 document.getElementById('entero3').value = num3;
}

*/

/*26. Control PASSWORD
26.1 Disponer dos campos de texto tipo password.
Cuando se presione un botón mostrar si las dos claves ingresadas son iguales o no
(es muy común solicitar al operador el ingreso de dos veces de su clave para validar si las escribió correctamente,
esto se hace cuando se crea una password para el ingreso a un sitio o para el cambio de una existente).
Tener en cuenta que podemos emplear el operador == para ver si dos string son iguales.

<form>
 <input type="password" id="pass1">
 <input type="password" id="pass2">
 <input type="button" onClick="confirmar()" value="confirmar">
</form>
<script type="text/javascript">
function confirmar(){
 var p1 = document.getElementById('pass1').value,
     p2 = document.getElementById('pass2').value;
 if(p1 == p2){
  alert('contrasenas iguales');
 }else{
  alert('contrasena incorrecta');
 }
}
</script>

*/
