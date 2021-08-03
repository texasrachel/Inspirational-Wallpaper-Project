//https://forums.tumult.com/t/block-rotation-smartphone/6362/2
// /if (window.innerHeight < window.innerWidth) { // portrait orientation
//   // show a message that asks the user to use portrait mode
//   myElement = document.getElementById('ELEMENT_ID')
//   myElement.innerHTML = "Please use Portrait Orientation";
// }

//temporary code

const localStorage = window.localStorage
const image = document.getElementById('image')
const backgroundColor = document.createElement('div')
const overlay = document.getElementById('overlay')
const input = document.getElementById('input')
const button = document.getElementById('button') //?? check code

// save colors into array and stringify for localStorage
const colors = ['ee9b00', '005f73', '656d4a', 'c2c5aa', '6c757d', '577590', 'ecbcfd', 'c8e7ff', '892b64', '5c4d7d', 'fad2e1', 'd6e2e9', '4ecdc4', 'ee964b', 'b2967d']
localStorage.setItem('colors', JSON.stringify(colors)

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

let newWallpaper.style.background = backgroundColor

//randomize font

//randomize color

//output color in mobile size

//add overlay

//get quote

//quote in font

//add quote

//function to get new Wallpaper
// function newWallpaper() {
  
// }

//event listener
// input.addEventListener('submit', function (e) {
//   e.preventDefault()

//   newWallpaper(input.value)
//   input.value = ''
//   localStorage.setItem(backgroundColor, green)
// })

//clear stored wallpaper
//button.addEventListener('click', function (){
// localStorage.clear()
// })