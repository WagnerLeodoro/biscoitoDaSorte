const screen1 = document.querySelector('.card-1')
const screen2 = document.querySelector('.card-2')
const closedCookie = document.querySelector('.card-1 img')

let randomMsg = Math.round(Math.random() * 10)

let phrases = [
  'Você é mais forte do que imagina.',
  'O sucesso é uma escolha, escolha ser bem-sucedido.',
  'Não desista, a vitória está logo ali.',
  'Você é capaz de alcançar seus sonhos.',
  'Tudo é possível se você acredita.',
  'Se você quer algo, vá atrás dele.',
  'O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.',
  'Não importa o quão lento você vá, desde que não pare.',
  'A determinação é a chave do sucesso.',
  'Não importa o que aconteça, nunca desista dos seus sonhos.',
  'É em meio a dificuldade que se encontra a oportunidade',
]

/* Eventos */

screen2.querySelector('button').addEventListener('click', btnReset)
closedCookie.addEventListener('click', openCookie)

/* Funções */

function toogleScreens() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function newMsg() {
  screen2.querySelector('p').innerText = phrases[randomMsg]
}

function openCookie() {
  toogleScreens()
  newMsg()
}

function btnReset() {
  toogleScreens()
  randomMsg = Math.round(Math.random() * 10)
}
