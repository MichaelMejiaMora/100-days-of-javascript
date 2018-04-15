let from = document.getElementById('from')
let to = document.getElementById('to')
let input = document.getElementById('input')
let output = document.getElementById('output')
let button = document.getElementById('convert')
let error = document.getElementById('error')
button.addEventListener('click', e => {
  e.preventDefault()

  if (from.value !== to.value && input.value !== '') {
    output.value = convert(Number(from.value), Number(to.value), input.value)
  } else if (from.value === to.value) {
    error.innerText = 'Tipos de entrada y salida son iguales'
  } else {
    error.innerText = 'Introduzca un valor válido'
  }
})

function convert (from, to, value) {
  let result
  switch (from) {
    case 2:
      result = convertTo(to, convertFrom(from, value))
      break
    case 8:
      result = convertTo(to, convertFrom(from, value))
      break
    case 10:
      result = convertTo(to, Number(value))
      break
    case 16:
      result = convertTo(to, convertFrom(from, value))
      break
  }
  return result
}
function convertFrom (from, value) {
// Recibe un entero (from) y un string (value)
  let arr = value.split('')
  let retorno
  if (arr.length === 1 && from === 16) {
    return convertFromHex(arr[0])
  }

  let prev, curr
  retorno = arr.reduce((a, b) => {
    if (from === 16) {
      prev = convertFromHex(a)
      curr = convertFromHex(b)
    } else {
      prev = a
      curr = b
    }
    return Number(prev) * from + Number(curr)
  })
  return retorno
}

function convertTo (to, value) {
  let converted = []
  if (to === 10) {
    return String(value)
  }

  while (value !== 0) {
    let tempValue
    converted.unshift(convertToHex(value % to))
    tempValue = Math.floor(value / to)
    value = tempValue
  }
  return converted.join('')
}
function convertFromHex (hex) {
  let value
  switch (hex) {
    case 'A':
      value = 10
      break
    case 'B':
      value = 11
      break
    case 'C':
      value = 12
      break
    case 'D':
      value = 13
      break
    case 'E':
      value = 14
      break
    case 'F':
      value = 15
      break
    default:
      value = hex
  }
  return value
}
function convertToHex (dec) {
  let value
  switch (dec) {
    case 10:
      value = 'A'
      break
    case 11:
      value = 'B'
      break
    case 12:
      value = 'C'
      break
    case 13:
      value = 'D'
      break
    case 14:
      value = 'E'
      break
    case 15:
      value = 'F'
      break
    default:
      value = dec
  }
  return value
}
