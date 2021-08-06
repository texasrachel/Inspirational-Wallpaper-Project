//temporary code

const button = document.getElementById("button");
const visible = document.getElementById('visible')
const hiddenButton = document.getElementById("hidden-button")
const colorArray = ["thistle", "palevioletred", "lavender", "lime", "peru"];
const fontArray = ['Shadows Into Light', 'Alex Brush']
const hiddenDiv = document.getElementById('quote-hidden')

const apiURL = "https://zenquotes.io/api/quotes/"
const quoteURL = "https://zenquotes.io/api/random/84dcbeb778e17abd111cc16ad76e1e4caac13370?"

const wallpaper = document.getElementById("wallpaper");
const context = wallpaper.getContext('2d')
let fontSize = '40px'
let wallWidth = wallpaper.width
let wallHeight = wallpaper.height
let x = wallWidth / 4
let y = wallHeight / 4
// let maxWidth = wallWidth * 0.9
let maxWidth = '250px'
const lineHeight = 30
let xStart = (wallWidth - maxWidth) / 2
let yStart = 30


const [a, b] = fontArray
console.log(a);
console.log(b);

//wallpaper generation 
// https://www.javascripttutorial.net/web-apis/javascript-canvas/
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/

//functions

let drawMe = function () {
  let rectHeight = 50;
  text = "hi hello how are you, i want to fill all this rectangle dinamycally. So this text doesnt overflow the rectangle sadfkj sdaf lkadsjflkadjs jfadjslkfj kasdjlfa ssdfsdfsdf sdfds fsdf sdadsfasd fadsf adsfds fasdf";

  context.fillRect(20, 20, 250, 500);
  context.fillStyle = 'pink';

  let words = text.split(' ');
  drawWords(context, text, x, y, maxWidth, lineHeight, rectHeight, words)
}
function wrapText(context, text, x, y, maxWidth, lineHeight, rectHeight) {
  let words = text.split(' ');
  console.log(words)
  return words
}
function drawWords(context, text, x, y, maxWidth, lineHeight, rectHeight, words) {
  var line = '';
  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
      rectHeight=rectHeight + lineHeight; 
}
drawMe()

const getQuote = async function() {
  // removeElement(wallpaper)
  try {
    const response = await axios.get(quoteURL)
    console.log(response.data[0].q)
    let quote = response.data[0].q
    const quoteLength = quote.split(' ').length
    // console.log(quoteLength)
    // console.log(quote)
    return quote
    return quoteLength
  } catch (error) {
      console.error(error)
  }
}
// console.log(getQuote)

// http://www.java2s.com/Tutorials/HTML_CSS/HTML5_Canvas_Reference/strokeText.htm

function reset() {
  let context = wallpaper.getContext('2d')
  context.setTransform(1,0,0,1,0,0)
  context.clearRect(0, 0, wallWidth, wallHeight)
  context.restore()
  context.save()

  // while (element.lastChild) {
  //   element.removeChild(element.lastChild)}
}

// function wrap(context, quote, wallWidth, wallHeight, maxWidth, lineHeight) {
//   //split quote for wrapping
//   let words = quote.split(' ')
//   // typeof(getQuote)

//   let line = ' '
//   console.log(context.measureText(words))

//   for (let i = 0; i < words.length; i++) {
//     let testLine = line + words[i] + ' '
//     // console.log("testLine " + [i] + testLine)
//     let metrics = context.measureText(testLine)
//     // console.log("metrics " + metrics)
//     let testWidth = metrics.width
//     console.log(testWidth);
//     // console.log("testWidth " + testWidth)
//     if (testWidth > maxWidth && i > 0) {
//       context.fillText(line, xStart, yStart)
//       line = words[i]
//       console.log("line " + line)
//       yStart += lineHeight
//       // console.log("ystart: " + yStart)
//     } else {
//       line = testLine
//       // console.log("line " + line)
//     }
//   };
//   context.fillText(line, wallWidth, wallHeight)
// }
// let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]
// context.globalAlpha = 1
// context.globalCompositeOperation = "source-over"
// context.fillStyle = randomColor
// context.fillRect(0, 0, wallWidth, wallHeight)
// const quote = "heloo eoohg slhdei hhtills e extended to include paragraph support"
// quoteLength = getQuote.length

// // wrap(context, getQuote(), wallWidth, wallHeight, maxWidth, lineHeight)
// wrap(context, quote, wallWidth, wallHeight, maxWidth, lineHeight)

// function wall() {
//   let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]
//   // let randomFont = fontArray[Math.floor(Math.random() * fontArray.length)]

//   //below works!
//   let randomFont = ("50px Cursive")

//   context.globalAlpha = 1
//   context.globalCompositeOperation = "source-over"
//   context.fillStyle = randomColor
//   context.fillRect(0, 0, wallWidth, wallHeight)
  
//   const quote = ["heloo eoohg slhdei hhtills e extended to include paragraph support"]
//   quoteLength = getQuote.length
// }

button.addEventListener("click", () => {
  wallpaper.style.visibility = "visible"
  hiddenButton.style.visibility = 'visible'
  drawMe()
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

