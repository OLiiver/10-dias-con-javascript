/*
document.write('<h1>10 Dias con <i>javaScript</i></h1>');
document.write('<p>Este proyecto le quiero hacer un seguimiento para el futuro y si no bueno quedara como algo marcado y para eso es genial asi a darle</p>');
document.write('<p class="nota">Advertencia puede que mas adelante esto necesite una edicion</p>');
document.write('<br>');
document.write('**   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **    **   --   **     ');document.write('<br> <br><br>');

16. Funciones
17. Funciones con parámetros.
17.1 Elaborar una función a la cual le enviemos tres enteros y muestre el menor.

function menor() {
  var v1, v2, v3;
  v1 = prompt('Ingrese el primer valor', '');
  v2 = prompt('Ingrese el segundo valor', '');
  v3 = prompt('Ingrese el tercer valor', '');

  v1 = parseInt(v1);
  v2 = parseInt(v2);
  v3 = parseInt(v3);

  if(v1 < v2 && v1 < v3){
    document.write(v1 + ' es el menor');
  } else {
    if(v2 < v1 && v2 < v3){
      document.write(v2 + ' es el menor');
    } else {
      document.write(v3 + ' es el menor');
    }
  }
}

menor();

17.2 Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.

function menorAMayor(v1, v2, v3) {
  var v1, v2, v3;

  if(v1 < v2 && v1 < v3){
    primeraVariable = v1;
    if( v2 < v3){
      segundaVariable = v2;
      terceraVariable = v3;
    } else {
      segundaVariable = v3;
      terceraVariable = v2;
    }
  } else {
    if(v2 < v1 && v2 < v3){
      primeraVariable = v2;
      if( v1 < v3 ){
        segundaVariable = v1;
        terceraVariable = v3;
      } else {
        segundaVariable = v3;
        terceraVariable = v1;
      }
    } else {
      primeraVariable = v3;
      if( v1 < v2) {
        segundaVariable = v1;
        terceraVariable = v2;
      } else {
        segundaVariable = v2;
        terceraVariable = v1;
      }
    }
  }

  document.write('valor 1:  ' + v1 + ',  valor 2:  ' + v2+ ',  valor 3:  ' + v3);
  document.write('<br>');document.write('<br>');
  document.write('los valores de menor a menor son: ' + primeraVariable + '  ' + segundaVariable + '  ' + terceraVariable);
}

var valor1, valor2, valor3;
valor1 = prompt('Ingrese el primer valor', '');
valor2 = prompt('Ingrese el segundo valor', '');
valor3 = prompt('Ingrese el tercer valor', '');

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);
valor3 = parseInt(valor3);

menorAMayor(valor1, valor2, valor3);
*/
/*18.
18.1 Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos.

function mayor(v1, v2 , v3) {

  if(v1 > v2 && v1 > v3){
    return v1;
  } else {
    if(v2 > v1 && v2 > v3){
      return v2;
    } else {
      return v3;
    }
  }
}

var valor1, valor2, valor3, r;
valor1 = prompt('Ingrese el primer valor', '');
valor2 = prompt('Ingrese el segundo valor', '');
valor3 = prompt('Ingrese el tercer valor', '');

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);
valor3 = parseInt(valor3);

r = mayor(valor1, valor2, valor3);
document.write('El valor mayor es: ' + r);

18.2 Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.

function perimetroCuadrado(lado){
  var p = 0;

  p = lado * 4;
  return p;
}
var l, r;
l = prompt('Ingrese el lado del cuadrado: ', '12');
r = perimetroCuadrado(l);
document.write('El perimetro del cuadrado es: ' + r);

18.3 Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva.

function cantidadDigitos(x)
  {
    if (x<10)
    {
      return 1;
    }
    else
    {
      if (x<100)
      {
        return 2;
      }
      else
      {
        if (x<1000)
        {
          return 3;
        }
        else
        {
          if (x<10000)
          {
            return 4;
          }
          else
          {
            if (x<100000)
            {
              return 5;
            }
            else
            {
              if (x<1000000)
              {
                return 6;
              }
              else
              {
                if (x<10000000)
                {
                  return 7;
                }
                else
                {
                  if (x<100000000)
                  {
                    return 8;
                  }
                  else
                  {
                    if (x<1000000000)
                    {
                      return 9;
                    }
                    else
                    {
                      if (x<10000000000)
                      {
                        return 10;
                      }
                      else
                      {
                        if (x<100000000000)
                        {
                          return 11;
                        }
                        else
                        {
                          if (x<1000000000000)
                          {
                            return 12;
                          }
                          else
                          {
                            if (x<10000000000000)
                            {
                              return 13;
                            }
                            else
                            {
                              if (x<100000000000000)
                              {
                                return 14;
                              }
                              else
                              {
                                if (x<1000000000000000)
                                {
                                  return 15;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  var valor;
  valor=prompt('Ingrese un valor positivo:','');
  valor=parseInt(valor);
  document.write('La cantidad de dígitos del valor ingresado es:'+cantidadDigitos(valor));

18.4 Elaborar una función que reciba tres enteros y retorne el promedio.

function promedio(n1, n2, n3){
  var p = 0;

  p = (n1 + n2 + n3)/ 3;
  return p;
}

var numero1, numero2, numero3, r;
numero1 = prompt('Ingrese el primer numero: ');
numero2 = prompt('Ingrese el segundo numero: ');
numero3 = prompt('Ingrese el tercer numero: ');

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

r = promedio(numero1, numero2, numero3);
document.write('promedio de los numeros:  ' + r);

18.5 Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

function parametro(n1, n2, n3, n4, n5){
  var s = 0;
  s = n1 + n2 + n3 + n4 + n5;
  return s;
}
var numero1 = prompt('Ingrese un numero:  '),
    numero2 = prompt('Ingrese un numero:  '),
    numero3 = prompt('Ingrese un numero:  '),
    numero4 = prompt('Ingrese un numero:  '),
    numero5 = prompt('Ingrese un numero:  '),

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);
numero4 = parseInt(numero4);
numero5 = parseInt(numero5);

r = parametro(numero1, numero2, numero3, numero4, numero5);
document.write('La suma de los numeros es: ' + r);
*/
/*19. Programación orientada a objetos.
20. Clase Date
20.1 Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes.

function cuatrimestre(){
  var fecha = new Date(),
  mes = fecha.getMonth();

  document.write('Mes: ' + mes);
  document.write('<br>');
  if(mes < 4){
    document.write('primer cuatrimestre');
  } else {
    if( mes < 8){
      document.write('segundo cuatrimestre');
    } else {
      document.write('tercer cuatrimestre');
    }
  }
}

cuatrimestre();
*/
