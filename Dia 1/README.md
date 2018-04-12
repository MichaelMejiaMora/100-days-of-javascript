# Máximo Común Divisor

## Descripción
Función que calcula el Máximo Común Divisor (MCD) de un conjunto de números enteros.

El conjunto de números pasados como argumento y el resultado (MCD) se está mostrando en consola.

## Teoremas
### Simple inspección
Cuando los números son pequeños, se puede hallar fácilmente por simple inspección. Dado que el MCD de varios números tiene que ser divisor del **menor** de ellos, nos fijamos en el número **menor** de los dados y si divide a todos los demás, será el MCD. Si no los divide, buscamos el mayor de los divisores del menor que los divide a todos y este será el MCD que buscamos.

### Método abreviado
El MCD de varios números por descomposiciónen factores primos puede hallarse rápidmente dividiendo al mismo tiempo todos los números dados por un factor común, los cocientes nuevamente por un factor común y así sucesivamente hasta que los cocientes sea primos entre si. El MCD es el producto de los factores comunes.
