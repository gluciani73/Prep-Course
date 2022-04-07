// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  for (var i=0; i< array.length; i++) {
    array [i] = array[i]+1
    }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(' ')
  // stringpalabras = ''
  // for (var i=0; i<palabras.length-1; i++) {
  //   palabras[i] = palabras[i] + ' '
  //   stringpalabras = stringpalabras + palabras[i]
  // }
  // return stringpalabras + palabras[palabras.length-1]
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento)
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0
  for (var i=0; i<numeros.length; i++) {
    var suma = suma + numeros[i]
    }

  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0
  for (var i=0; i< resultadosTest.length; i++) {
    var suma = suma + resultadosTest[i]
    }
  return suma / resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masGrande = numeros[0]
  for (var i=0; i< numeros.length; i++) {
    if (numeros[i] > masGrande) {
      masGrande = numeros[i]   
    }
  }
  return masGrande
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) {
    return 0
  }
  else if (arguments.length === 1) {
    return arguments[0]
  }
  else {
    var multiplicacion = 1
    for (var i=0; i< arguments.length; i++) {
    multiplicacion = multiplicacion * arguments[i]
    }
    return multiplicacion
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var mayor18 = 0
  for (var i = arreglo.length - 1; i >= 0; i--) {
     if (arreglo[i]>18) {
      mayor18++
    }
  }
return mayor18

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return 'Es fin de semana'
  }
  else {
    return 'Es dia Laboral'
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var text = n.toString()
  return text.charAt(0) === '9'
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var Igual = arreglo[0]
  for (var i = 0; i < arreglo.length; i++) {
      // console.log(Igual)
      // console.log(arreglo[i])
      // console.log(arreglo[i] === Igual)
    if (arreglo[i] !== Igual) {
       return false
    }
   }
  return true
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  newArray = []
  for (var i = 0; i < array.length; i++) {
  if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
    newArray.push(array[i])
  }    
  }
  if (newArray.includes('Enero') && newArray.includes('Marzo') && newArray.includes('Noviembre') ) {
    return newArray
  }
   return 'No se encontraron los meses pedidos'
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  newArray = []
  for (var i = 0; i < array.length; i++) {
    if (array[i]>100) {
      newArray.push(array[i])
    }
  }
  return newArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  sum = numero
  nuevoArray = []
  for (var i = 0; i < 10; i++) {
     sum = sum + 2
     nuevoArray.push(sum)
     if (sum === i) {
      break
    }
  }
  if (sum === i) {return 'Se interrumpió la ejecución'} 
    else {return nuevoArray }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
    sum = numero
  nuevoArray = []
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue
    }
     sum = sum + 2
     nuevoArray.push(sum)

    }
  
  //if (sum === i) {return 'Se interrumpió la ejecución'} 
  return nuevoArray 

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
