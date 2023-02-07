const hour = document.querySelector('.hour'),
minute = document.querySelector('.minute'),
second = document.querySelector('.second'),
screw = document.querySelector('.screw')

const clockwise = () => {
  const date = new Date()
  let h = date.getHours() < 12 ? date.getHours() : date.getHours() - 12
  let m = date.getMinutes()
  let s = date.getSeconds()
  let ms = date.getMilliseconds()
  hour.style.transform = `rotate(${h * 30 + m / 2}deg)`
  minute.style.transform = `rotate(${m * 6}deg)`
  second.style.transform = `rotate(${s * 6}deg)`
}

setInterval(clockwise)