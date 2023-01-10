let grid = document.querySelector("#grid");

function makeGrid() {
  for (let i = 1; i <= 25; i++) {
    grid.insertAdjacentHTML("beforeend", `<div class="card"></div>`);
  }
}

makeGrid()