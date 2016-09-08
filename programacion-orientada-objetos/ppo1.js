/* 40. Programación orientada a objetos en JavaScript.

ejemplo


<html>
<head>
<title>Problema</title>

<script type="text/javascript">
  function Cliente(nombre,saldo)
  {
    this.nombre=nombre;
    this.saldo=saldo;
    this.depositar=depositar;
    this.extraer=extraer;
  }

  function depositar(dinero)
  {
    this.saldo=this.saldo+dinero;
  }

  function extraer(dinero)
  {
    this.saldo=this.saldo-dinero;
  }

</script>

</head>
<body>

<script type="text/javascript">
  var cliente1;
  cliente1=new Cliente('diego',1200);
  document.write('Nombre del cliente:'+cliente1.nombre+'<br>');
  document.write('Saldo actual:'+cliente1.saldo+'<br>');
  cliente1.depositar(120);
  document.write('Saldo luego de depositar $120---->'+cliente1.saldo+'<br>');
  cliente1.extraer(1000);
  document.write('Saldo luego de extraer $1000---->'+cliente1.saldo+'<br>');
</script>

</body>
</html>
*/

/*
40.1 Confeccionar una clase llamada suma, que contenga dos atributos (valor1, valor2)
y tres métodos: cargarvalor1, cargarvalor2 y retornarresultado. Implementar la clase suma.
La definición de un objeto de la clase que deben plantear es:
var s=new suma();
s.primervalor(10);
s.segundovalor(20);
document.write('La suma de los dos valores es:'+s.retornarresultado());

<html>
<head>

<script type="text/javascript">
  function Suma(valor1,valor2)
  {
    this.valor1=valor1;
    this.valor2=valor2;
    this.primerValor=primerValor;
    this.segundoValor=segundoValor;
    this.retornarResultado=retornarResultado;
  }

  function primerValor(valor1)
  {
    this.valor1=valor1;
  }

  function segundoValor(valor2)
  {
    this.valor2=valor2;
  }

  function retornarResultado()
  {
    return this.valor1+this.valor2;
  }
</script>

</head>
<body>

<script type="text/javascript">
  var suma1;
  suma1=new Suma(5,10);
  document.write('La suma de 5 y 10 es:'+suma1.retornarResultado()+'<br>');
  suma1.primerValor(70);
  suma1.segundoValor(30);
  document.write('La suma de 70 y 30 es:'+suma1.retornarResultado()+'<br>');
</script>

</body>
</html>
*/
/*
<html>
<head>
</head>
<body>

<script type="text/javascript">
function Suma(valor1, valor2){
this.valor1 = valor1;
this.valor2 = valor2;
this.ingresarValor1 = ingresarValor1;
this.ingresarValor2 = ingresarValor2;
this.retornarresultado = retornarresultado;
}

function ingresarValor1(valor){
this.valor1 = valor;
}
function ingresarValor2(valor){
this.valor2 = valor;
}
function retornarresultado(){
return this.valor1 + this.valor2;
}
</script>
<script>
var sum1;
sum1 = new Suma(12, 12);
document.write('Primer valor: ' + sum1.valor1);
document.write('<br>'); document.write('<br>');
document.write('Primer valor: ' + sum1.valor2);
document.write('<br>'); document.write('<br>');
sum1.ingresarValor1(23);
sum1.ingresarValor2(21);
document.write('<br>'); document.write('<br>');
document.write('Primer valor: ' + sum1.valor1);
document.write('<br>'); document.write('<br>');
document.write('Primer valor: ' + sum1.valor2);
document.write('<br>'); document.write('<br>');
document.write('<br>'); document.write('<br>');
document.write('La suma de los dos valores es: ' + sum1.retornarresultado());

</script>
</body>
</html>


*/
