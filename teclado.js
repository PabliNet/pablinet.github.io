const input = document.getElementById('input'),
  p = document.getElementById('p'),
  keyboard = document.getElementById('keyboard'),
  keys = '1234567890qwertyuiopasdfghjklñzxcvbnm<>×'.split('')
keys.push('&#8679;', '!', ',', ' ', '.', '?', 'enter')

let cShift = 0
const changeCase = (caps=true) => {
  Array.from(keyboard.children).forEach(e => {
    if (/[A-Za-z!?]/.test(e)) {
      switch (e.id) {
        case 'exclama':
          e.dataset.value = caps && e.id === 'exclama' ? '¡' : '!'
          e.innerHTML = caps && e.id === 'exclama' ? '¡' : '!'
          break
        case 'interroga':
          e.dataset.value = caps && e.id === 'interroga' ? '¿' : '?'
          e.innerHTML = caps && e.id === 'interroga' ? '¿' : '?'
          break
        default:
          e.dataset.value = caps ? e.dataset.value.toUpperCase() : e.dataset.value.toLowerCase()
          e.innerHTML = caps ? e.innerHTML.toUpperCase() : e.innerHTML.toLowerCase()
          break
      }
    }
  })
  return caps
},
touch = e => {
  switch(e.target.id) {
    case 'shift':
      cShift++
      if (document.getElementById('q').dataset.value === 'q') {
        changeCase()
        shift.classList.add('activo--shift')
      } else if (cShift !== 2) {
        changeCase(false)
        shift.classList.remove('activo--shift')
        shift.classList.remove('activo--caps')
      } else {
        shift.classList.remove('activo--shift')
        shift.classList.add('activo--caps')
      }
      cShift = cShift === 3 ? 0 : cShift
      break
    case 'backspace':
      let inputLen = input.value.length
      input.value = inputLen > 0 ? input.value.slice(0, inputLen - 1) : ''
      break
    case 'enter':
      p.textContent = input.value
      input.value = ''
      break
    default:
      input.value = input.value + e.target.dataset.value
      if (cShift !== 2) {
        changeCase(false)
        cShift = 0
        shift.classList.remove('activo--shift')
      }
      break
  }
}

keys.forEach (e => {
  var tecla = document.createElement('div')
  tecla.id = e
  tecla.innerHTML = e
  switch (e) {
    case ' ':
      tecla.id = 'espacio'
      tecla.setAttribute('data-value', ' ')
      tecla.innerHTML = ' '
      tecla.classList.add('espacio')
      break
    case '&#8679;':
      tecla.id = 'shift'
      tecla.setAttribute('data-value', '')
      tecla.innerHTML = '&#8679;'
      break
    case '!':
      tecla.id = 'exclama'
      tecla.setAttribute('data-value', e)
      tecla.innerHTML = e
      break
    case '?':
      tecla.id = 'interroga'
      tecla.setAttribute('data-value', e)
      tecla.innerHTML = e
      break
    case '<':
      tecla.id = 'menor'
      tecla.setAttribute('data-value', e)
      tecla.innerHTML = e
      break
    case '>':
      tecla.id = 'mayor'
      tecla.setAttribute('data-value', e)
      tecla.innerHTML = e
      break
    case ',':
      tecla.id = 'coma'
      tecla.setAttribute('data-value', e)
      tecla.innerHTML = e
      break
    case '.':
      tecla.id = 'punto'
      tecla.setAttribute('data-value', e)
      tecla.innerHTML = e
      break
    case '×':
      tecla.id = 'backspace'
      tecla.setAttribute('data-value', '')
      tecla.innerHTML = e
      break
    case 'enter':
      tecla.id = 'enter'
      tecla.setAttribute('data-value', '')
      tecla.innerHTML = '&#x23CE;'
      break
    default:
      tecla.id = e
      tecla.setAttribute('data-value', e)
      tecla.innerHTML = e
      break
  }
  keyboard.appendChild(tecla)
})

const shift = document.getElementById('shift')
keyboard.addEventListener('click', touch)
//addEventListener('keypress', e => console.log(e))