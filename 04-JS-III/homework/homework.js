// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i = 0; i<array.length; i++){
    array[i]++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  palabras = palabras.join(" ");
  return palabras;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 var indice = array.indexOf(elemento);
 // var indice = n.indexOf(n);
 if(indice !== -1){
  return true;
 }else{
   return false;
 }
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma = 0;
  for(var i = 0; i<numeros.length;i++){
    suma += numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  cantidad = resultadosTest.length;
  suma = 0;
  resultado = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }
  resultado = (suma/cantidad);
  return resultado;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  masGrande = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (masGrande < numeros[i]) {
      masGrande = numeros[i];
    }
  }
  return masGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length === 1){
    return arguments[0];
  }else if(!arguments.length){
    return 0;
  }

  var resultado = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
   resultado *= arguments[i];
  }
  return resultado;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  comprobar = 0;
  cont = 0;
  for (let i = 0; i < arreglo.length; i++) {
    comprobar = arreglo[i];
    if(comprobar > 19){
      cont++;
    }
  }
  return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  /*2 = lunes 
    3 = Martes
    4 = Miercoles
    5 = Jueves
    6 = Viernes
    7 = sabado
    1 = domingo
    */   
    if(numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana"
    }else{
      return "Es dia Laboral"
    }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  indice = 0;
  n = n.toString();
  indice = n.indexOf("9");
   if (indice != -1) {
     return true;
   }
   return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  posicion1 = 0;
  posicion1 = arreglo[0];
  //posicion1 = arreglo.indexOf(posicion1[0]);
  for (let i = 1; i < arreglo.length; i++) {
    if (posicion1 != arreglo[i]) {
      return false;
    }
    return true;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados (especificos de abajo), recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", (<= estos) guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = [];
  for(let i = 0; i < array.length; i++){
   if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      meses.push(array[i]);
   }
  }

  if(meses.length < 3){
    return "No se encontraron los meses pedidos";
  }
  return meses;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  mayorA100 = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i] > 100 && array[i] != 100){
      mayorA100.push(array[i]);
    }
  }
  return mayorA100;
}


function breakStatement(numero) {
  //Iterar(recore) en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array

  //Si en algún momento el valor de la suma y la cantidad de iteraciones (vueltas) coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement (sentencia) 'break'
  // Tu código:
  Vrecivido = [];
  vuelta = 10;
  for (let i = 0; i < vuelta; i++) {
    numero += 2;
    if(numero === vuelta){
      return "Se interrumpió la ejecución";
    }
    Vrecivido.push(numero);
  }
  return Vrecivido;
}


function continueStatement(numero) {
  //Iterar (recorer) en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array

  //Cuando el número de iteraciones (vueltas) alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement (sentecia) 'continue'
  // Tu código:
  Vrecivido = [];
  vuelta = 10;
  for (let i = 0; i < vuelta; i++) {
   
    if(i != 5){
      numero += 2; 
      Vrecivido.push(numero);
    }
    continue;
  }
  return Vrecivido;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
