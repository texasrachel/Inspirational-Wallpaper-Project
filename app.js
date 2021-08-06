const button = document.getElementById("button");
const visible = document.getElementById('visible')
const hiddenButton = document.getElementById("hidden-button")
const saveButton = document.getElementById("save-button")
const fontArray = [
  'Alex Brush',
  'Amatic SC',
  'Lovers Quarrel',
  'Rochester',
  'Shadows Into Light'
]
const hiddenDiv = document.getElementById('quote-div')
const colorArray = [
  "#ee9b00",
  "#005f73",
  "#656d4a",
  '#c2c5aa',
  '#6c757d',
  '#577590',
  '#ecbcfd',
  '#6495ed',
  '#892b64',
  '#5c4d7d'
]
const quoteURL = "https://zenquotes.io/api/random/84dcbeb778e17abd111cc16ad76e1e4caac13370?"

const wallpaper = document.getElementById("wallpaper");
const context = wallpaper.getContext('2d')
let size = window.matchMedia('(max-width: 99xpx)')
const wallWidth = wallpaper.width
const wallHeight = wallpaper.height

let x = wallWidth / 4
let y = wallHeight / 4
let maxWidth = wallWidth * 0.9
let xStart = (wallWidth - maxWidth) / 2

//wallpaper generation 
// https://www.javascripttutorial.net/web-apis/javascript-canvas/
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/

//pulls quotes
  const getQuote = async () => {
    wall()
    try {
      const response = await axios.get(quoteURL)
      const quote = response.data[0].q
      hiddenDiv.append(quote)
      wrap(quote)
    } catch (error) {
        console.error(error)
    }
  }

  // http://www.java2s.com/Tutorials/HTML_CSS/HTML5_Canvas_Reference/strokeText.htm

  function reset() {
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.clearRect(0, 0, wallWidth + 10, wallHeight + 10)
    context.fillStyle = 'pink'
    context.fillRect(0, 0, wallWidth, wallHeight)
    context.save()
  }
function wrap(quote) {
  screen(size)
  context.fillStyle = 'ivory'
  let yStart = 30
  let fontSize = 15
  let words = quote.split(' ')
  let line = ' '
  const lineHeight = fontSize * 1.4

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' '
    let metrics = context.measureText(testLine)
    let testWidth = metrics.width
    if (testWidth > maxWidth) {
      context.fillText(line, xStart, yStart)
      line = words[i] + ' '
      yStart += lineHeight
    } else {
      line = testLine
    }
  };
  context.fillText(line,xStart,yStart)
}
//changes color
function wall() {
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]
  let randomFont = fontArray[Math.floor(Math.random() * fontArray.length)]
  context.font = ('20px ' + randomFont + ", cursive")
  context.globalAlpha = 1
  context.globalCompositeOperation = "source-over"
  context.fillStyle = randomColor
  context.fillRect(0, 0, wallWidth, wallHeight)
}

function save() {
  let link = document.createElement('a')
  link.download = 'download.png'
  link.href = wallpaper.toDataURL()
  link.click()
  link.delete
}
function screen(size) {
  if (size.matches) {
    fontSize = 15
  } else
    fontSize = 25
}

button.addEventListener("click", () => {
    wallpaper.style.visibility = "visible"
    hiddenButton.style.visibility = 'visible'
    saveButton.style.visibility = 'visible'
    getQuote()
    button.style.visibility = 'hidden'
    visible.style.visibility = 'hidden'
  });

hiddenButton.addEventListener('click', () => {
    reset()
    button.style.visibility = 'visible'
    visible.style.visibility = 'visible'
    hiddenButton.style.visibility = 'hidden'
    wallpaper.style.visibility = 'hidden'
    saveButton.style.visibility = 'hidden'
  })
saveButton.addEventListener('click', () => {
  save()
})