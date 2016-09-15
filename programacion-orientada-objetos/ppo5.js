/*69 Eventos: focus y blur
document.getElementById('text2').addEventListener('focus',tomarfoco2,false);
document.getElementById('text1').addEventListener('blur',perderfoco1,false);

70 Parámetro del método asociado al addEventListener.
Implementar un tablero de TaTeTi.
Asociar el evento click de los 9 botones a una única función. Alternar entre las "X" y "O". Mostrar un mensaje cuando gana un jugador.

window.addEventListener('load', inicio, false);
var jugador = 'x';
function inicio(){
  for (var i=1; i <= 9; i++){
    document.getElementById('boton' + i).addEventListener('click', presion, false);
  }
}

function presion(evt){
  //this.value = jugador;
  evt.target.value = jugador;

  if (jugador == 'x') {
    jugador = 'o';
  } else {
    jugador = 'x';
  }

  verificar();
}

function verificar() {
  var
  v1 = document.getElementById('boton1').value,
  v2 = document.getElementById('boton2').value,
  v3 = document.getElementById('boton3').value,
  v4 = document.getElementById('boton4').value,
  v5 = document.getElementById('boton5').value,
  v6 = document.getElementById('boton6').value,
  v7 = document.getElementById('boton7').value,
  v8 = document.getElementById('boton8').value,
  v9 = document.getElementById('boton9').value,
  ganador = document.getElementById('ganador');

  if(v1 == 'x' && v2 == 'x' && v3 == 'x'){
    ganador.innerHTML = 'Gano la x';
  }
  if(v4 == 'x' && v5 == 'x' && v6 == 'x'){
    ganador.innerHTML = 'gano la x';
  }
  if(v7 == 'x' && v8 == 'x' && v9 == 'x'){
    ganador.innerHTML = 'gano la x';
  }
  if(v1 == 'x' && v4 == 'x' && v7 == 'x'){
    ganador.innerHTML = 'gano la x';
  }
  if(v2 == 'x' && v5 == 'x' && v8 == 'x'){
    ganador.innerHTML = 'gano la x';
  }
  if(v3 == 'x' && v6 == 'x' && v9 == 'x'){
    ganador.innerHTML = 'gano la x';
  }
  if(v1 == 'x' && v5 == 'x' && v9 == 'x'){
    ganador.innerHTML = 'gano la x';
  }
  if(v7 == 'x' && v5 == 'x' && v3 == 'x'){
    ganador.innerHTML = 'gano la x';
  }

  if(v1 == 'o' && v2 == 'o' && v3 == 'o'){
    ganador.innerHTML = 'Gano la o';
  }
  if(v4 == 'o' && v5 == 'o' && v6 == 'o'){
    ganador.innerHTML = 'Gano la o';
  }
  if(v7 == 'o' && v8 == 'o' && v9 == 'o'){
    ganador.innerHTML = 'Gano la o';
  }
  if(v1 == 'o' && v4 == 'o' && v7 == 'o'){
    ganador.innerHTML = 'Gano la o';
  }
  if(v2 == 'o' && v5 == 'o' && v8 == 'o'){
    ganador.innerHTML = 'Gano la o';
  }
  if(v3 == 'o' && v6 == 'o' && v9 == 'o'){
    ganador.innerHTML = 'Gano la o';
  }
  if(v1 == 'o' && v5 == 'o' && v9 == 'o'){
    ganador.innerHTML = 'Gano la o';
  }
  if(v7 == 'o' && v5 == 'o' && v3 == 'o'){
    ganador.innerHTML = 'Gano la o';
  }
}

<form class="" action="" method="get">
  <label for="">Tateti</label><br />
  <input type="button" value="-" id="boton1" name="boton1">
  <input type="button" value="-" id="boton2" name="boton2">
  <input type="button" value="-" id="boton3" name="boton3">
  <br />
  <input type="button" value="-" id="boton4" name="boton4">
  <input type="button" value="-" id="boton5" name="boton5">
  <input type="button" value="-" id="boton6" name="boton6">
  <br />
  <input type="button" value="-" id="boton7" name="boton7">
  <input type="button" value="-" id="boton8" name="boton8">
  <input type="button" value="-" id="boton9" name="boton9">
  <br />
</form>
<h2 id="ganador"></h2>
*/

/* 71 Evento: submit

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
