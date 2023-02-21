const clock = document.getElementById('clock')

const marks = u => {
  dots = []
  for (let i = 0; i < u; i++) {
    dots.push(document.createElement('DIV'))
    dots[i].classList.add('marks')
    dots[i].classList.add(i + 1 < 10 ? `mark-0${i + 1}` : `mark-${i + 1}`)
    clock.appendChild(dots[i])
  }
}

const hour = document.querySelector('.hour'),
minute = document.querySelector('.minute'),
second = document.querySelector('.second')

const clockwise = () => {
  const date = new Date()
  let h = date.getHours() < 12 ? date.getHours() : date.getHours() - 12
  let m = date.getMinutes()
  let s = date.getSeconds()
  hour.style.transform = `rotate(${h * 30 + m / 2}deg)`
  minute.style.transform = `rotate(${m * 6}deg)`
  second.style.transform = `rotate(${s * 6}deg)`
}

setInterval(clockwise)

marks(60)