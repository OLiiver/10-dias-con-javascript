/*
document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

27. Control SELECT
27.1 Confeccionar una página que muestre un objeto SELECT con distintos tipos de pizzas
(Jamón y Queso, Muzzarella, Morrones). Al seleccionar una, mostrar en un objeto de tipo TEXT el precio de la misma.

<script type="text/javascript">
 function pizzaParaLlevar(){
  var pizza = document.getElementById('pizzas');
  document.getElementById('pizza').value=pizza.options[pizza.selectedIndex].text;
 }
</script>

<h2>Seleccione el tipo de pizza que desea</h2>
<br />
<form>
 <select id="pizzas" onChange="pizzaParaLlevar()">
  <option value="">Jamon</option>
  <option value="">Queso</option>
  <option value="">Muzzarella</option>
  <option value="">Morrones</option>
 </select>
 <br />
 <br />
 <input type="text" id="pizza">
</form>

27.2 Generar un presupuesto de un equipo de computación a partir de tres objetos de tipo SELECT que nos permiten seleccionar:
Procesador (Intel I3 - $400, Intel I5 $600, Intel I7 $800).
Monitor (Samsung 20' - $250, Samsung 22' - $350, Samsung 26' - $550)
Disco Duro(500 Gb - $300, 1 Tb - $440, 3 Tb - $500)
Para cada característica indicamos string a mostrar (Ej. Intel I3) y el valor asociado a dicho string (Ej. 400).
Al presionar un botón "Calcular" mostrar el presupuesto en un objeto de tipo TEXT.

<script type="text/javascript">
 function computador(){
  var procesador = document.getElementById('procesador'),
      monitor = document.getElementById('monitor'),
      discoDuro = document.getElementById('discoDuro'),
      vp, vm, vd, total;

  vp = procesador.options[procesador.selectedIndex].value;
  vm = monitor.options[monitor.selectedIndex].value;
  vd = discoDuro.options[discoDuro.selectedIndex].value;

  vp = parseInt(vp);
  vm = parseInt(vm);
  vd = parseInt(vd);

  document.getElementById('pro').value=procesador.options[procesador.selectedIndex].text;
 document.getElementById('proVa').value=procesador.options[procesador.selectedIndex].value;
  document.getElementById('mon').value=monitor.options[monitor.selectedIndex].text;
  document.getElementById('monVa').value=monitor.options[monitor.selectedIndex].value;
  document.getElementById('dis').value=discoDuro.options[discoDuro.selectedIndex].text;
  document.getElementById('disVa').value=discoDuro.options[discoDuro.selectedIndex].value;

  total = vp + vm + vd;
  document.getElementById('total').value=total;
 }
</script>
<h2>Presupuesto para un equipo de computación </h2><br />
<form>
 <label> Escoga el Procesador</label><br /><br />
 <select id="procesador">
  <option value="400">Intel I3</option>
  <option value="600">Intel I5</option>
  <option value="800">Intel I7</option>
 </select>
 <br /><br />
 <label>Monitor</label><br /><br />
 <select id="monitor">
  <option value="250">Samsung 20'</option>
  <option value="350">Samsung 22'</option>
  <option value="550">Samsung 26'</option>
 </select>
 <br /><br />
 <label>Disco Duro</label><br /><br />
 <select id="discoDuro">
  <option value="300">500 Gb</option>
  <option value="440">1 Tb</option>
  <option value="500">3 Tb</option>
 </select>
 <br /><br />
 <label>Cuando tenga los componentes elegidos, por favor de click en "procesar"</label>
 <br /><br />
 <input type="button" onClick="computador()" value="Procesar">
 <br /><br />
 <label>Este es el procesador elegido</label>
 <br /><br />
 <input type="text" id="pro"> $<input type="text" id="proVa">
 <br /><br />
 <label>Este es el monitor elegido</label>
 <br /><br />
 <input type="text" id="mon"> $<input type="text" id="monVa">
 <br /><br />
 <label>Este es el disco duro elegido</label>
 <br /><br />
 <input type="text" id="dis"> $<input type="text" id="disVa">
 <br /><br />
 <label>El total a pagar es de: </label>
 <br /><br />
 <input type="text" id="total">
</form>

27.3 Confeccionar una página que permita seleccionar una pizza y la cantidad de unidades.
Luego al presionar un botón calcular el importe a pagar.
Utilizar un objeto de la clase SELECT para la selección de la pizza, pudiendo ser:
Queso: $ 4.
Jamón y queso: $ 6.
Especial: $ 10.
A la cantidad de pizzas cargarla en un objeto de la clase TEXT y en otro objeto de la clase TEXT mostrar el importe total a abonar.

<script type="text/javascript">
function pizzas(){
 var pizza = document.getElementById('pizza'),
     cantidad = document.getElementById('cantidad'), total;

 pv = document.getElementById.value=pizza.options[pizza.selectedIndex].value;
 cv = document.getElementById.value=cantidad.options[cantidad.selectedIndex].value;

 pv = parseInt(pv);
 cv = parseInt(cv);

 total = pv * cv;

 document.getElementById('total').value=total;
}
</script>

<form>
 <select id="pizza">
  <option value="4">Queso</option>
  <option value="6">Queso y Jamon</option>
  <option value="10">Especial</option>
 <select>
 <select id="cantidad">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
 </select>
 <br /><br />
 <input type="button" onClick="pizzas()" value="calcular">
 <br /><br />
 Total <input type="text" id="total">
</form>

27.4 Confeccionar una página que permita tomar un examen múltiple choice.
Se debe mostrar una pregunta y seguidamente un objeto SELECT con las respuestas posibles.
Al presionar un botón mostrar la cantidad de respuestas correctas e incorrectas
(Disponer 4 preguntas y sus respectivos controles SELECT)

<html>
<head>
</head>
<body>

<script type="text/javascript">

function preguntas(){
 var p = document.getElementById('primera'),
     s = document.getElementById('segunda'),
     t = document.getElementById('tercera'),
     c = document.getElementById('cuarta'),
     pr, se, te, cu,
     correctas = 0, incorrectas = 0;

 pr = p.options[p.selectedIndex].value;
 se = s.options[s.selectedIndex].value;
 te = t.options[t.selectedIndex].value;
 cu = c.options[c.selectedIndex].value;

 pr = parseInt(pr);
 se = parseInt(se);
 te = parseInt(te);
 cu = parseInt(cu);

 if(pr == 2){
  correctas++;
 } else {
  incorrectas++;
 }

 if(se == 4){
  correctas++;
 } else {
  incorrectas++;
 }

 if(te == 3){
  correctas++;
 } else {
  incorrectas++;
 }

 if(cu == 3){
  correctas++;
 } else {
  incorrectas++;
 }

 document.getElementById('correctas').value=correctas;
 document.getElementById('incorrectas').value=incorrectas;
}

</script>

<h2>Cuestionario de 4 preguntas</h2>
<form>
 <label>1. Cual de los siguientes es un lenguaje de programacion</label>
 <br /><br />
 <select id="primera">
  <option value="1">CSS</option>
  <option value="2">javaScript</option>
  <option value="3">HTML</option>
  <option value="4">Exel</option>
 </select>

 <br /><br />
 <label>2. Cuanto es 2 + 2</label>
 <br /><br />
 <select id="segunda">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
 </select>

 <br /><br />
 <label>Cuanto es 12/2</label>
 <br /><br />
 <select id="tercera">
  <option value="1">2</option>
  <option value="2">4</option>
  <option value="3">6</option>
  <option value="4">8</option>
 </select>

 <br /><br />
 <label>Cual llego primero el huevo o la gallina</label>
 <br /><br />
 <select id="cuarta">
  <option value="1">su madre</option>
  <option value="2">su padre</option>
  <option value="3">gallina</option>
  <option value="4">huevo</option>
 </select>
 <br /><br />
 <input type="button" onClick="preguntas()" value="procesar">
 <br /><br />
 <label>Repuestas correctas</label>
 <input type="text" id="correctas">
 <br /><br />
 <label>Respuestas incorrectas</label>
 <input type="text" id="incorrectas">
</form>

</body>
</html>

*/
