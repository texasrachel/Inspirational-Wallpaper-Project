//https://forums.tumult.com/t/block-rotation-smartphone/6362/2
// /if (window.innerHeight < window.innerWidth) { // portrait orientation
//   // show a message that asks the user to use portrait mode
//   myElement = document.getElementById('ELEMENT_ID')
//   myElement.innerHTML = "Please use Portrait Orientation";
// }

//temporary code

const backgroundColor = document.createElement('div')
const wallpaper = document.createElement('div')
const localStorage = window.localStorage
const image = document.getElementById('image')

const overlay = document.getElementById('overlay')
const input = document.getElementById('input')
const button = document.getElementById('button') //?? check code

// // save colors into array and stringify for localStorage
// const colorArray = ['ee9b00', '005f73', '656d4a', 'c2c5aa', '6c757d', '577590', 'ecbcfd', 'c8e7ff', '892b64', '5c4d7d', 'fad2e1', 'd6e2e9', '4ecdc4', 'ee964b', 'b2967d']
// //below necessary?
// let colors = localStorage.setItem('colors', JSON.stringify(colorArray))

//font array
// const fontArray = ["
//   'Alex Brush',
//   'Amatic SC',
//   'Lovers Quarrel',
//   'Rochester',
//   'Shadows Into Light',
//   cursive
// "]

//saving to local storage
//localStorage.setItem('key', 'value')

// let backgroundColor = JSON.parse(localStorage.getItem("green"))
// let backgroundColor = {"color": "green"}
// store in localStorage: let colorString = JSON.stringify(green)
// use in JS: let colorObject = JSON.parse(colorString)
// let colorInput = localStorage.setItem('backgroundColor', colorString)
// localStorage.getItem('backgroundColor')
// localStorage.removeItem('backgroundColor')
// localStorage.clear()
// let keyName = localStorage.key(index)

// let newWallpaper.style.background = backgroundColor

wallpaper.style.backgroundColor = "green"
wallpaper.style.fontFamily = "Rochester"

// //randomize font
// function randomizeArray(array) {
//   let length = array.length
//   index = Math.floor(Math.random() * length)
// }
// let randomFont = randomizeArray(fontArray)
// document.getElementById('font').innerHTML = randomFont

// //randomize color
// let randomColor = randomizeArray(colorArray)
// document.getElementById('color').innerHTML = randomColor

//output color in mobile size
wallpaper.style.height = "900px"
wallpaper.style.width = "1600px"

//add overlay

//get quote
let quote = "hello"

//quote in font

//add quote
wallpaper.append(quote)
// console.log(return);

//function to get new Wallpaper
// function newWallpaper() {
  
// }

//event listener
// input.addEventListener('submit', function (e) {
//  stops form from submission
//   e.preventDefault()

//   newWallpaper(input.value)
//   input.value = ''
//   localStorage.setItem(backgroundColor, green)
// })

//clear stored wallpaper
//button.addEventListener('click', function (){
// localStorage.clear()
// })

//save image from https://html.com/javascript/popup-windows/
function popupImage(myform, windowname) {
    if (!window.focus) return true;
    window.open('', windowname, 'height=200,width=400,scrollbars=yes');
    myform.target = windowname;
    return true;
  }
function targetopener(mylink, closeme, closeonly) {
    if (!(window.focus && window.opener)) return true; window.opener.focus(); if (!closeonly) window.opener.location.href = mylink.href; if (closeme) window.close(); return false;
}
window.open(href, windowname, 'type=fullWindow,fullscreen,scrollbars=no');

function showWallpaper() {
  let image = document.getElementById('image')
  img.src = "picture.jpg"
  img.style.display="block"
}

//https://stackoverflow.com/questions/30694433/how-to-give-browser-save-image-as-option-to-button
function save() {
  window.open(wallpaper.toDataURL('image/png'))
  let gh = wallpaper.toDataURL('png')
  let a = document.createElement('a')
  a.href = gh
  a.download = 'image.png'
  a.click()
}
//or
let buttonDownload = document.getElementById('btn-download')
buttonDownload.addEventListener('click', function (e) {
  let dataURL = wallpaper.toDataURL('image/png')
  wallpaper.href = dataURL
})

// let mobileHeight = window.screen.height
// if orientation = portrait {
//   mobileWidth = mobileHeight / 9 * 16
// }
// if orientation = landscape {
//   mobileWidth= mobileHeight / 16 * 9
// }
// console.log(mobileHeight);