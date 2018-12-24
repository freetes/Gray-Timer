let hour = document.querySelector('span.hour')
let minute = document.querySelector('span.minute')
let second = document.querySelector('span.second')
let normal = document.querySelector('span.normal')
let time = document.querySelector('div#time')

begin()

function setTime(){
  let now = new Date()

  hour.textContent = now.getHours()
  minute.textContent = now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes()
  second.textContent = now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()
}

function begin(){
  let width = document.body.clientWidth
  time.style.fontSize = width/8 + 'px'
  setTime()
  setInterval(()=>{setTime()}, 500)
}

function toggleFullScreen(){
  let html = document.querySelector('html')

  
}
