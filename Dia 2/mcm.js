let numbers = [14, 38, 56, 114]
console.log('El conjunto de números es: ', numbers)
/**
 * Funcion que calcula el Mínimo Común Múltiplo (MCM) de un conjunto de números enteros
 *
 * @param {array} array - Conjunto de números enteros
 * @returns {integer} mcm - Mínimo Común Múltiplo
 */
function mcm (array) {
  let max = array.reduce((a, b) => a > b ? a : b) // Mayor de los números del arreglo
  let mcm = 1
  /*
Método 1: Inspección simple
============================
Verificar si el mayor de los números dados contiene exactamente a los demás
*/
  if (isMultiple(array, max)) {
    return max // Resultado
  } else {
    /*
Si no, Verificar que el menor múltiplo del número mayor contiene a los otros números
    */
    for (let i = 2; i < max; i++) {
      let multiplier = max * i
      if (isMultiple(array, multiplier)) {
        return multiplier // Resultado
      }
    }
  }
  /*
Si no,

Método 2: Método abreviado
==============================
*/
  for (let i = 2; i <= max; i++) {
    if (isDivisible(array, i)) {
      let newArray = array.map(a => a % i === 0 ? a / i : a)
      array = newArray
      mcm *= i
      i = 1
      console.log('array actual', array)
    }
  }
  return mcm // Resultado
}

console.log('El MCM es: ', mcm(numbers)) // Llamada a la función

/**
 * Función que verifica si un numero dado es multiplo de los elementos de un arreglo
 *
 * @param {array} a
 * @param {integer} b
 * @returns {boolean} isMultiple
 */
function isMultiple (a, b) {
  let isMultiple = false

  for (let i = 0; i < a.length; i++) {
    if (b % a[i] === 0) {
      isMultiple = true
    } else {
      isMultiple = false
      break
    }
  }
  return isMultiple
}

// Función muy similar a la utilizada en el día 1, excepto que solo es necesario que haya un elemento
// divisible para retornar true
function isDivisible (a, b) {
  let isDivisible = false

  for (let i = 0; i < a.length; i++) {
    if (a[i] % b === 0) {
      isDivisible = true
      break
    } else {
      isDivisible = false
    }
  }
  return isDivisible
}
