//temporary code

const button = document.getElementById("button");
const visible = document.getElementById('visible')
const hiddenButton = document.getElementById("hidden-button")
const wallpaper = document.getElementById("wallpaper");
const colorArray = ["thistle", "palevioletred", "lavender", "lime", "peru"];
const fontArray = ['Shadows Into Light', 'Alex Brush']
const quote = "The Price of Anything"
const apiURL = "https://zenquotes.io/api/quotes/"
const quoteURL = "https://zenquotes.io/api/random/84dcbeb778e17abd111cc16ad76e1e4caac13370"
const wallWidth = wallpaper.width
const wallHeight = wallpaper.height
const fontDiv = document.getElementById('font-div')

//wallpaper generation 
//https://www.javascripttutorial.net/web-apis/javascript-canvas/
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

// function randomizeArray(array) {
//   let length = array.length
//   index = Math.floor(Math.random() * length)
// }
//size elements

//functions

//get quote WORKS
// async function getQuote() {
//   // removeElement(wallpaper)
//   try {
//       const response = await axios.get(quoteURL)
//       console.log(response.data);

//     } catch (error) {
//       console.error(error)
//     }
// }
// getQuote(apiURL)

//http://www.java2s.com/Tutorials/HTML_CSS/HTML5_Canvas_Reference/strokeText.htm

function wall() {
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]
  let randomFont = fontArray[Math.floor(Math.random() * fontArray.length)]

  const context = wallpaper.getContext('2d')
  context.save()
  context.globalAlpha = 1
  context.globalCompositeOperation = "source-over"
  context.fillStyle = randomColor
  context.fillRect(0, 0, wallWidth, wallHeight)

  function drawOverlay(e) {
    context.fillStyle = '#000000'
    context.globalAlpha = 0.2
    context.scale(0.67, 0.67)
    context.fillRect(wallWidth/4, wallHeight/4, wallWidth, wallHeight)
  }

  function drawQuote(text, x, y) {
    context.font = `"50px" + ${randomFont} + cursive`
    context.fillStyle = 'blue'
    context.fillText(text, x, y)
    context.textAlign = 'center'
    context.textBaseLine = 'middle'
  }
  drawOverlay()
  drawQuote("hello", wallWidth/2, wallHeight/2)

  hiddenButton.addEventListener('click', () => {
    context.setTransform(0,0,0,0,0,0)
    context.clearRect(0, 0, wallWidth, wallHeight)
    context.restore()
  })
}
function reset() {

  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}
button.addEventListener("click", () => {
  wallpaper.style.visibility = "visible"
  hiddenButton.style.visibility = 'visible'
  wall()
  button.style.visibility = 'hidden'
  visible.style.visibility = 'hidden'
});

hiddenButton.addEventListener('click', () => {
  button.style.visibility = 'visible'
  visible.style.visibility = 'visible'
  hiddenButton.style.visibility = 'hidden'
  wallpaper.style.visibility = 'hidden'
})

