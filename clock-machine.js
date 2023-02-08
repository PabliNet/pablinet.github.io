const hour = document.querySelector('.hour'),
minute = document.querySelector('.minute'),
second = document.querySelector('.second'),
screw = document.querySelector('.screw')

const clockwise = () => {
  const date = new Date()
  let h = date.getHours() < 12 ? date.getHours() : date.getHours() - 12
  let m = date.getMinutes()
  let s = date.getSeconds()
  hour.style.transform = `rotate(${h * 30 + m / 2}deg)`
  document.documentElement.style.setProperty('--clock-hour-fill', h * 30 + m / 2)
  minute.style.transform = `rotate(${m * 6}deg)`
  document.documentElement.style.setProperty('--clock-minute-fill', m * 6)
  second.style.transform = `rotate(${s * 6}deg)`
  document.documentElement.style.setProperty('--clock-second-fill', s * 6)
}

setInterval(clockwise)