//temporary code

const backgroundColor = document.createElement('div')
const wallpaperDiv = document.createElement('div')
const localStorage = window.localStorage
const image = document.getElementById('image')

const overlay = document.getElementById('overlay')
const input = document.getElementById('input')
const inputButton = document.getElementById('input-button') //?? check code

wallpaper.append(wallpaperDiv)
wallpaperDiv.style.backgroundColor = "green"

//output color in mobile size
wallpaperDiv.style.height = "100px"
wallpaperDiv.style.width = "200px"

//add overlay

//get quote
let quote = "Rochester"

//quote in font
wallpaperDiv.style.fontFamily = "Rochester"

//add quote
wallpaperDiv.append(quote)

inputButton.addEventListener('click', function () {
  wallpaperDiv.style.fontFamily = "Lovers Quarrel"
  let quote = "Lovers Quarrel"
})

