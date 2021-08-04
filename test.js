//temporary code

// const backgroundColor = document.createElement('div')
// const localStorage = window.localStorage

// const container = document.getElementById('container')
const openingImg = document.getElementById('background-image')
const generate = document.getElementById('generate')
const generateButton = document.getElementById('generate-button')
const resetButton = document.getElementById('reset-button')
const startOver = document.getElementById('start-over')

//wallpaper generation 
//https://www.javascripttutorial.net/web-apis/javascript-canvas/
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// const newWallpaper = document.getElementById('wallpaper')

const colorArray = ['ee9b00', '005f73']
const fontArray = ['Shadows Into Light', 'Alex Brush']
const quoteArray = ['You are the architect', 'We must also do']
const quote = "The Price of Anything"
//size elements

//functions
// https://stackoverflow.com/questions/6887183/how-to-take-screenshot-of-a-div-with-javascript
function test(width, height) {
  const smallWallpaper = document.getElementById('wallpaperSmall')
  let context = smallWallpaper.getContext('2d')
  context.fillRect(0, 0, 500, 800)
  context.font = "48px cursive"
  context.fillStyle = '#ffa500'
  context.textAlign = "center"
  context.textBaseline = 'middle'
  context.fillText = (quote, 250, 250)
  
  return smallWallpaper
}

generateButton.addEventListener("click", () => {
  test()
  generate.style.display = 'none'
  openingImg.style.display = 'none'
  // let newWallpaper = smallWallpaper.toDataURL("image/png")
  // document.write('<img src="'+newWallpaper+'"/>>')
})

function randomizeArray(array) {
  let length = array.length
  index = Math.floor(Math.random() * length)
}

function save(image, imageName) {
  let link = document.createElement('a')
  link.download = imageName
  link.href = 'data:', + image
  link.click()
}


// function createWallpaper() {
//   const test = document.querySelector('smallWallpaper')
//   let ctx = test.getContext('2d')
//   ctx.fillStyle = 'red'
//   ctx.fillRect(10, 10, 100, 100)
// }

// function createWallpaper() {
//   // if (smallWallpaper.getContext) {
//    let context = smallWallpaper.getContext('2d')
//    smallWallpaper.height = 400
//     smallWallpaper.width = 300
//     let randomColor = randomizeArray(colorArray)
//     // context.fillStyle = randomColor
//     context.fillStyle = 'red'

//     //add overlay
//     // context.fillRect(25, 25, 200, 200)
//     // context.strokeRect(50, 50, 100, 100)

//     // get quote
//     let quote = "The Price of Anything"
//     // let quote = randomizeArray(quoteArray)
//     context.fillText = (quote, 0, 0)

//     //quote in font
//     // let font = randomizeArray(fontArray)
//     // smallWallpaper.style.fontFamily = "Rochester"
//     context.font = "48px Arial"

//     context.textAlign = "center"
//     context.textBaseline = 'bottom'

//     //add quote
//     smallWallpaper.append(quote)

//     wallpaper.download = 'image.png'
//     // wallpaper.href = imageURL

//     smallWallpaper.append(wallpaper)
//     // smallWallpaper.click()
//     // smallWallpaper.removeChild(wallpaper)

//     return smallWallpaper.toDataURL ('image/jpeg')
// //   } else {
// //     alert("Your device does not support this app. The quote of was:")
// //   }
// }

// generateButton.addEventListener('click', () => {
  // smallWallpaper.style.fontFamily = "Lovers Quarrel"
  // let quote = "The world breaks everyone"
  // smallWallpaper.style.display = 'block'
  // startOver.style.display = "block"
  // generate.style.display = "none"
  // createWallpaper()
//   test(500, 800)
  // smallWallpaper.style.height = 100vh
  // openingImg.style.display = "none"
//   window.open('', smallWallpaper.toDataURL())
// })

// resetButton.addEventListener('click', function () {
//   wallpaper.style.display = "none"
//   smallWallpaper.style.display = 'none'
//   startOver.style.display = "none"
//   generate.style.display = "block"
//   openingImg.style.display = "block"
// })

// function create() {
//   smallWallpaper.style.background = "#ffd700"
//   smallWallpaper.style.backgroundSize = "100%"
// }

//output color in mobile size

// smallWallpaper.style.maxHeight = "100%"
// smallWallpaper.style.width = "500px"