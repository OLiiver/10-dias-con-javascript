/*
44. Array: Diferentes formas de crearlos
44.1 Confeccionar un programa que defina dos array, en uno almacenar los días de la semana y en otro los nombres de los meses.
Emplear dos sintaxis diferentes para crear e inicializar sus componentes.

 var semana = new Array(5);
 semana[0] = 'lunes';
 semana[1] = 'Martes';
 semana[2] = 'Miercoles';
 semana[3] = 'Jueves';
 semana[4] = 'Viernes';
 semana[5] = 'Sabado';
 semana[6] = 'Domingo';

 var meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
 ];

for (var i=0; i < semana.length; i++){
 document.write('Dia: ' + semana[i] + '<br />');
}

for (var i=0; i < meses.length; i++){
 document.write('Mes: ' + meses[i] + '<br />');
}

*/
/*45. Array: densos
45.1 Crear un vector con 10 valores aleatorios comprendidos entre 1 y 500.
Luego crear otros dos vectores y copiar los elementos menores a 250 en el segundo vector y
los mayores o iguales a 250 en el tercer vector.
Imprimir los tamaños del segundo y tercer vector. Imprimir los tres vectores.

var vec1=[], vec2=[], vec3=[],
    numero, a=0, b=0;

for (var i=0; i<10; i++){
  numero = parseInt((Math.random() * 1000)/ 2);

  vec1[i] = numero;
  if(numero < 250){
    vec2[a] = numero;
    a++;
  } else {
    vec3[b] = numero;
    b++;
  }
}

document.write('Cantidad de elementos en el segundo vector: ' + vec2.length);
document.write('Cantidad de elementos en el tercer vector: ' + vec3.length);
*/

/*46 Array: no densos o dispersos
46.1  Crear un vector disperso que representen premios de una rifa. Las posiciones indican los números que tienen premio.
Almacenar en dichas posiciones los premios.
Genera 10 premios con los montos 1000,2000,3000 etc.
La cantidad de números de la rifa son 1000.
Generar valores aleatorios para los números con premio.
Imprimir Los números con premio y los montos de los mismos.

var rifa=[], premio = 0;

for (var i=0; i<10; i++){
  numero = parseInt(Math.random()*1000);
  premio = premio + 1000;
  rifa[numero] = premio;
}
for (var i=0; i<rifa.length; i++) {
  if (rifa[i] !== undefined){
    document.write('El numero ganadore es: ' + i + '<br /> ');
    document.write('El valor del premio es de: ' + rifa[i] + '<br /><br />');
  }
}
*/
/*47 Array: métodos push y pop

47.1 Crear un vector con 5 valores aleatorios comprendidos entre 1 y 1000.
Luego extraer los dos últimos elementos sumarlos y mostrarlos. Imprimir también el tamaño final del vector.

var vector=[];
for (i=0; i<5; i++){
  vector[i] = parseInt(Math.random() * 1000);
}

document.write('Tamaño del vector: ' + vector.length + '<br />');
v1 = vector.pop();
v2 = vector.pop();
suma = v1 + v2;

document.write(v1 + ' + ' + v2 + ' = ' + suma + '<br />');
document.write('Tamaño del vector: ' + vector.length);
*/

/*48 Array: métodos unshift y shift
49 Array: instrucción delete
*/
/*50 Array: métodos sort y reverse
50.1 Cargar los sueldos de un conjunto de empleados.
Finalizar la carga al ingresar cero.
Mostrar por pantalla los sueldos ordenados de mayor a menor.

var empleados = [], i=0;
do {
  sueldo = prompt('Ingrese el sueldo del empleado, ingrese 0 para dejar de ingresar sueldos', '100');
  if (sueldo != 0){
    empleados[i]= sueldo;
    i++;
  }
}while(sueldo != 0);
empleados.sort(function(x, y){
  if(x>y){
    return 1;
  } else {
    return 2;
  }
})
for (var j=0; j < empleados.length; j++){
  document.write(empleados[j] + '<br />');
}

 empleados.reverse();
for (var j=0; j < empleados.length; j++){
  document.write(empleados[j] + '<br />');
}

*/
