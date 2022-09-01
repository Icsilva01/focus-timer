//Variáveis
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase-minutes')
const buttonDecrease = document.querySelector('.decrease-minutes')
const SoundForest = document.querySelector('.forest')
const SoundRain = document.querySelector('.rain')
const SoundCoffee = document.querySelector('.coffee')
const SoundFire = document.querySelector('.fire')

//Ações do botão de comando

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

function countdown() {
  timerTimeOut = setTimeout(function() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if(seconds <= 0 ) {
      seconds = 60

      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    if(minutes <= 0 ) {
      minutesDisplay.textContent = "00"
      secondsDisplay.textContent = "00"
      return
    }
    countdown()
  }, 1000)
}

buttonIncrease.addEventListener('click', function(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})
buttonDecrease.addEventListener('click', function(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
})

buttonPlay.addEventListener('click', function() {
  countdown()
})

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
  minutesDisplay.textContent = '25'
  secondsDisplay.textContent = '00'
})

// Ações dos botões de som

const buttonPressForest = new Audio("./Audio/Floresta.wav")
const buttonPressRain = new Audio("./Audio/Chuva.wav")
const buttonPressCoffee = new Audio("./Audio/Cafeteria.wav")
const buttonPressFire = new Audio("./Audio/Lareira.wav")

SoundForest.addEventListener('click',function(){
  buttonPressForest.play()
})

SoundRain.addEventListener('click',function(){
  buttonPressRain.play()
})

SoundCoffee.addEventListener('click',function(){
  buttonPressCoffee.play()
})

SoundFire.addEventListener('click',function(){
  buttonPressFire.play()
})


