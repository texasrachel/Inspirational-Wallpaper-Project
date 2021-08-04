//temporary code

// const backgroundColor = document.createElement('div')
// const canvas = document.createElement('img')
// const localStorage = window.localStorage

const container = document.getElementById('container')
const openingImg = document.getElementById('image')
const input = document.getElementById('input')
const inputButton = document.getElementById('input-button')
const resetButton = document.getElementById('reset-button')
const startOver = document.getElementById('start-over')

//https://www.javascripttutorial.net/web-apis/javascript-canvas/
const canvas = document.getElementById('wallpaper')
const wallpaperWidth = canvas.width
const wallpaperHeight = canvas.height
const colorArray = ['ee9b00', '005f73']
const wallpaper = document.createElement('a')
const quoteArray = ['You are the architect', 'We must also do']

//functions

function randomizeArray(array) {
  let length = array.length
  index = Math.floor(Math.random() * length)
}

// function create() {
//   canvas.style.background = "#ffd700"
//   canvas.style.backgroundSize = "100%"
// }

//output color in mobile size

// canvas.style.maxHeight = "100%"
// canvas.style.width = "500px"

function createWallpaper() {
  let context = canvas.getContext('2d')
  if (canvas.getContext) {
    canvas.height = 400
    canvas.width = 300
    // let randomColor = randomizeArray(colorArray)
    // context.fillRect(25, 25, 200, 200)
    // context.strokeRect(50, 50, 100, 100)
    context.fillStyle = "b22222"
    context.fillText = ("Quote time", 0, 0)
    context.font = "48px Arial"
    context.textAlign = "center"
    context.textBaseline = 'bottom'
    
    wallpaper.download = 'image.png'
    // wallpaper.href = imageURL

    canvas.append(wallpaper)
    // canvas.click()
    // canvas.removeChild(wallpaper)

    return canvas.toDataURL ('image/jpeg')
  } else {
    alert("Your device does not support this app")
  }
}

//add overlay

//get quote
let quote = "The Price of Anything"
//let quote = randomizeArray(quoteArray)

//quote in font
canvas.style.fontFamily = "Rochester"

//add quote
canvas.append(quote)

let newWallpaper = new Image(wallpaperWidth, wallpaperHeight)

// newWallpaper.src = 

inputButton.addEventListener('click', function () {
  // canvas.style.fontFamily = "Lovers Quarrel"
  let quote = "The world breaks everyone"
  canvas.style.display = 'block'
  startOver.style.display = "block"
  input.style.display = "none"
  createWallpaper()
  // canvas.style.height = 100vh
  openingImg.style.display = "none"
})

resetButton.addEventListener('click', function () {
  wallpaper.style.display = "none"
  canvas.style.display = 'none'
  startOver.style.display = "none"
  input.style.display = "block"
  openingImg.style.display = "block"
})
