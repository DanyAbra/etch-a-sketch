const defaultSize = 16
const defaultColor = "#fff"
let currentSize = defaultSize

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const grid = document.getElementById("grid")
const sizeSlider = document.getElementById("sizeSlider")
const sizeValue = document.getElementById("sizeValue")

sizeSlider.onmousemove = e => updateSizeValue(e.target.value)
sizeSlider.onchange = e => changeSize(e.target.value)

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function setCurrentSize(newSize) {
  currentSize = newSize
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  for (let i = 1; i <= size * size; i++) {
    const card = document.createElement("div")
    card.classList.add("card")
    card.addEventListener("mouseover", changeColor)
    grid.appendChild(card)
  }
}

function reloadGrid() {
  clearGrid()
  createGrid(currentSize)
}

function clearGrid() {
  grid.innerHTML = ""
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return
  e.target.style.backgroundColor = defaultColor
}

createGrid()

window.onload = () => {
  createGrid(defaultSize)
}
