document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

/*28 Control CHECKBOX
28.1 Confeccionar una página que muestre tres checkbox que permitan seleccionar los deportes que practica el usuario
(Fútbol, Básket, Tenis) Mostrar al presionar un botón los deportes que a elegido.

<html>
<head>
</head>
<body>
<h2> Deportes que practica el usuario </h2>
<br />
<p></p>
<script type="text/javascript">
 function deportes(){
  var cont = "";
  if(document.getElementById('checkbox1').checked){
   cont = cont + " Futbol";
  }
  if(document.getElementById('checkbox2').checked){
   cont = cont + " Basket";
  }
  if(document.getElementById('checkbox3').checked){
   cont = cont + " Tenis";
  }

 document.getElementById('dep').value=cont;
 }

</script>

<form>
 <input type="checkbox" id="checkbox1"> Fútbol
 <br />
 <input type="checkbox" id="checkbox2"> Básket
 <br />
 <input type="checkbox" id="checkbox3"> Tenis
 <br /><br />
 <input type="button" onClick="deportes()" value="escoger">
 <br /><br />
 <input type="text" id="dep">
</form>
</body>
</html>
*/

/*29. Control RADIO
29.1 Confeccionar una página que muestre dos objetos de la clase RADIO solicitando que seleccione si es mayor de 18 años o no.
Al presionar un botón mostrar un alert indicando si puede ingresar al sitio o no.

<html>
<head>
</head>
<body>

<script type="text/javascript">
 function edadd(){
  if(document.getElementById('menor').checked){
   alert('Es menor de edad');
  }

  if(document.getElementById('mayor').checked){
   alert('Es mayor de edad');
  }
 }
</script>
<form>
 <input type="radio" id="menor" name="edad"> Menor de 18
 <br />
 <input type="radio" id="mayor" name="edad">Mayor de 18
 <br />
 <input type="button" onClick="edadd()" value="Escoger">
</form>
</body>
</html>
*/

/*30. Control TEXTAREA
30.1 Confeccionar una página de visitas a un sitio, solicitar ingresar el nombre de una persona, su mail y los comentarios (TEXTAREA).
Mostrar luego llamando a la función alert los datos ingresados.
<html>
<head>
</head>
<body>

<script type="text/javascript">
 function info(){
  alert(document.getElementById('informacion').value);
 }
</script>
<form>
 <textarea rows="10" cols="50" id="informacion"></textarea>
 <br /><br />
 <input type="button" onClick="info()" value="enviar">
</form>
</body>
</html>
*/

/*31 Eventos onFocus y onBlur
31.1 Solicitar que se ingrese el nombre y la clave de un usuario.
Mostrar una ventana de alerta si en la clave se ingresan menos de 7 caracteres o más de 20.

<script type="text/javascript">
  function vaciar(mensaje){
   mensaje.value='';
  }
  function verificar(mensaje){
    console.log(mensaje);
    if (control.value.length<7 || control.value.length>20)
    {
      alert('cantidad de caracteres no valido en la clave(deben ser entre 7-20 caracteres)');
    }
  }
</script>
 <form>
  <input type="text" onFocus="vaciar(this)" value="name"><br />
  <input type="text" onFocus="vaciar(this)" onBlur="verificar(this)" value="contraseña"><br />
 </form>

*/

/*32 Eventos onMouseOver y onMouseOut
32.1 Modificar el segundo problema resuelto (las casillas de la tabla que cambian el color cuando ingresamos con el mouse)
para permitir llamar mediante hipervínculos a distintos programas que administran web-mail (gmail, hotmail y yahoo)

<html>
<head></head>
<body>
<script type="text/javascript">
  function pintar(objeto,col)
  {
    objeto.bgColor=col;
  }
</script>

<table border="1">
<tr>
<td onMouseOver="pintar(this,'#ff0000')" onMouseOut="pintar(this,'#ffffff')">
<a href="http://www.hotmail.com">Hotmail</a>
</td>
<td onMouseOver="pintar(this,'#00ff00')" onMouseOut="pintar(this,'#ffffff')">
<a href="http://www.yahoo.com">Yahoo</a>
</td>
<td onMouseOver="pintar(this,'#0000ff')" onMouseOut="pintar(this,'#ffffff')">
<a href="http://www.gmail.com">GMail</a>
</td>
</tr>
</table>
</body>
</html>
*/

/*33 Evento onLoad
33.1 Confeccionar una página que muestre un mensaje con la función alert inmediatamente después que se cargue.

<html>
<head>
</head>
<body onLoad="imprimir()">

<script type="text/javascript">
function imprimir(){
 alert('se cargo la pagina');
}
</script>

</body>
</html>

*/

/*34 El objeto window.
34.1 Confeccionar una página que permita abrir otra ventana cuando se presiona un botón.
Dicha ventana debe tener como ancho 600 pixeles y alto 300 pixeles.

<html>
<head>
</head>
<body>

<script type="text/javascript">
 function abrir(){
  var ventana = open('', 'cabeza', 'status=no, menubar=no, width=600, height=300');
  ventana.document.write('Las cosas como son');
 }
</script>
<form>
 <input type="button" onClick="abrir()" value="abrir ventana">
</form>
</body>
</html>
*/

/*35 Propiedad location del objeto window
35.1 Confeccionar una página que tenga un hipervínculo. Cuando se presione dicho hipervínculo generar un valor aleatorio entre 0 y 2.
Si se genera el 0 llamar al webmail de hotmail, si se genera un 1 llamar a gmail en caso de generarse un 2 llamar a yahoo.
Para generar un valor aleatorio utilizar la función random del objeto Math.

var num;
num=Math.random()*3; //se guarda en num un valor comprendido entre 0.00001 y 2.99999
num=parseInt(num);  //guardamos solo la parte entera de la variable num
if (num==0)
    window.location='http://www.hotmail.com';


    <script type="text/javascript">
    function redi(){
     var num = Math.random() * 3;
     num = parseInt(num);

     if(num == 0){
      window.location='webmail';
     }
     if(num == 1){
      window.location='gmail';
     }
     if(num == 1){
      window.location='yahoo';
     }

    }
    </script>
    <p>Ingresar al correo cual, bueno ya veremos <a href="javascript:redi()">dale al click</a></p>
*/

/*36 Propiedad history del objeto window
37 Propiedad screen del objeto window
37.1 Confeccionar un programa que al presionar un botón aparezca una ventana que ocupe todo el ancho del monitor y
la mitad de su altura.

<html>
<head>
</head>
<body>
<script type="text/javascript">
function ventana(){
 var ventana=open('', '', 'width=' + screen.availWidth+', height=' + screen.availHeight/2);
}
</script>
<input type="button" onClick="ventana()" value="ventana">
</body>
</html>

*/

/*38 Propiedad navigator del objeto window
38.1 Una vez que se cargue la página mostrar un alert indicando si el navegador tiene activas las cookies.

<html>
<head>
</head>
<body onLoad="coo()">

<script type="text/javascript">
function coo(){

 if(navigator.cookieEnabled){
  palabra = "activadas";
 } else {
  palabra = "desactivadas";
 }
 alert('Las coockies estan ' + palabra);
}

</script>

</body>
</html>
*/

/*38

*/

/* 39 Archivo JavaScript externo (*.js)

*/
