# Mínimo Común Múltiplo

## Descripción
Función que calcula el Mínimo Común Múltiplo (MCM) de un conjunto de números enteros.

El conjunto de números pasados como argumento y el resultado (MCM) se está mostrando en consola.

## Teoremas
### Simple inspección
Cuando los números son pequeños, se puede hallar fácilmente por simple inspección. Dado que el MCM de varios números tiene que ser múltiplo del **mayor** de ellos, nos fijamos en el número **manor** de los dados y si contiene exactamente a todos los demás, será el MCM. Si no los contiene, buscamos el menor múltiplo del número mayor que los contiene exactamente a todos y este será el MCM que buscamos.

### Método abreviado
El MCM de varios números por descomposición en factores primos puede hallarse rápidmente dividiendo cada uno de los números dados por su menor divisor; lo mismo se hace con los cocientes hasta que los cocientes sean 1. El MCM es el producto de todos los divisores primos.
