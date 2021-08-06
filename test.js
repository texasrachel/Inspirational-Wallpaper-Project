//temporary code

const button = document.getElementById("button");
const visible = document.getElementById('visible')
const hiddenButton = document.getElementById("hidden-button")
const colorArray = ["thistle", "palevioletred", "lavender", "lime", "peru"];
const fontArray = ['Shadows Into Light', 'Alex Brush']
const hiddenDiv = document.getElementById('quote-hidden')

const apiURL = "https://zenquotes.io/api/quotes/"
const quoteURL = "https://zenquotes.io/api/random/84dcbeb778e17abd111cc16ad76e1e4caac13370?&a"

//wallpaper generation 
//https://www.javascripttutorial.net/web-apis/javascript-canvas/
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

//functions

const getQuote = async () => {
  // removeElement(wallpaper)
  try {
    const response = await axios.get(quoteURL)
    console.log(response.data);
    response.data.forEach((element) => {
      const quoteInd = document.createElement('p')
      quoteInd.textContent = element.q
      hiddenDiv.append(quoteInd)
      const author = document.createElement('p')
      author.textContent = element.a
      hiddenDiv.append(author)
      const blockquote = document.createElement('p')
      blockquote.innerHTML = element.h
      hiddenDiv.append(blockquote)
      // console.log(author)
      // console.log(quoteInd)
    })
console.log(hiddenDiv)
    } catch (error) {
      console.error(error)
  }
}
console.log(getQuote)
const indiv = async () => {
  const ind = await getQuote()
  // console.log(Object.entries(indiv))
}
indiv()

//http://www.java2s.com/Tutorials/HTML_CSS/HTML5_Canvas_Reference/strokeText.htm

function reset() {
  let context = wallpaper.getContext('2d')
  context.setTransform(1,0,0,1,0,0)
  context.clearRect(0, 0, wallWidth, wallHeight)
  context.restore()
  context.save()

  // while (element.lastChild) {
  //   element.removeChild(element.lastChild)}
}
https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/

function wrap(context, quote, wallWidth, wallHeight, maxWidth, lineHeight) {
  //split quote for wrapping
  let words = quote.split(' ')
  let line = ' '
  // console.log(context.measureText(words))

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' '
    // console.log("testLine " + [i] + testLine)
    let metrics = context.measureText(testLine)
    // console.log("metrics " + metrics)
    let testWidth = metrics.width
    // console.log("testWidth " + testWidth)
    if (testWidth > maxWidth && i > 0) {
      context.fillText(line, xStart, yStart)
      line = words[i]
      // console.log("line " + line)
      yStart += lineHeight
      // console.log("ystart: " + yStart)
    } else {
      line = testLine
      // console.log("line " + line)
    }
  };
  let x = context.fillText(line, wallWidth, wallHeight)
  return x
  console.log(x);
}

const wallpaper = document.getElementById("wallpaper");
const context = wallpaper.getContext('2d')
const wallWidth = wallpaper.width
let wallHeight = wallpaper.height
let x = wallWidth / 4
let y = wallHeight / 4
let maxWidth = wallWidth * 0.9
const lineHeight = 30
const xStart = (wallWidth - maxWidth) / 2
let yStart = 30
let quote = "Hello animals and others"
let quoteLength = quote.split(' ').length
console.log(quoteLength);
// context.font = "20px Arial"
// context.fillStyle = "gold"
const [a, b] = fontArray
console.log(a);
console.log(b);

function wall() {
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]
  // let randomFont = fontArray[Math.floor(Math.random() * fontArray.length)]
  // document.getElementById('one').style.fontFamily = randomFont.value
  // console.log(randomColor);
  // console.log(randomFont);

  //below works!
  let randomFont = ("50px Cursive")

  context.globalAlpha = 1
  context.globalCompositeOperation = "source-over"
  context.fillStyle = randomColor
  context.fillRect(0, 0, wallWidth, wallHeight)

  if (quoteLength > 2) {
    function drawQuote(text, x, y) {
      // let quoteFont = randomFont
      // console.log("font: " + quoteFont);
      context.font = randomFont
      console.log(context.font)
      context.fillStyle = 'blue'
      context.fillText(quote, x, y)
      context.textAlign = 'center'
      // context.textBaseLine = 'middle'
    }
    drawQuote(quote, wallWidth / 2, wallHeight / 2)
  } else
  wrap(context, quote, wallWidth, wallHeight, maxWidth, lineHeight)
}

button.addEventListener("click", () => {
  wallpaper.style.visibility = "visible"
  hiddenButton.style.visibility = 'visible'
  wall()
  button.style.visibility = 'hidden'
  visible.style.visibility = 'hidden'
});

hiddenButton.addEventListener('click', () => {
  reset()
  button.style.visibility = 'visible'
  visible.style.visibility = 'visible'
  hiddenButton.style.visibility = 'hidden'
  wallpaper.style.visibility = 'hidden'
})

