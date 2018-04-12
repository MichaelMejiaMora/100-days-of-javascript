
let numbers = [2645, 4232, 4761, 5819]
console.log('El conjunto de números es: ', numbers)
/**
 * Funcion que calcula el Máximo Común Divisor (MCD) de un conjunto de números enteros
 *
 * @param {array} array - Conjunto de números enteros
 * @returns {integer} mcd - Máximo Común Divisor
 */
function mcd (array) {
  let min = array.reduce((a, b) => a < b ? a : b) // Menor de los números del arreglo
  let mcd = 1
  /*
Método 1: Inspección simple
============================
Verificar si el menor de los números dados divide a los demás
*/
  if (isDivisible(array, min)) {
    return min // Resultado
  } else {
    /*
Si no, Verificar que el máximo divisor del número menor divide a los otros números
    */
    for (let i = 2; i < min; i++) {
      let divisor = min / i
      if (min % i === 0) {
        if (isDivisible(array, divisor)) {
          return divisor // Resultado
        }
      }
    }
  }
  /*
Si no,

Método 2: Método abreviado
==============================
*/
  for (let i = 2; i < min; i++) {
    if (isDivisible(array, i)) {
      let newArray = array.map(a => a / i)
      array = newArray
      mcd *= i
      i = 2
    }
  }
  return mcd // Resultado
}

console.log('El MCD es: ', mcd(numbers)) // Llamada a la función

/**
 * Función que verifica si los elementos de un arreglo son divisibles por un numero dado
 *
 * @param {array} a
 * @param {integer} b
 * @returns {boolean} isDivisible
 */
function isDivisible (a, b) {
  let isDivisible = false

  for (let i = 0; i < a.length; i++) {
    if (a[i] % b === 0) {
      isDivisible = true
    } else {
      isDivisible = false
      break
    }
  }
  return isDivisible
}
