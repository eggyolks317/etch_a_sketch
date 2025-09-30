let gridContainer = document.querySelector("#gridContainer");
let button = document.querySelector("#btn");
const width = "30px";
const height = "30px";

//get random integer between 0 and 255
function randInt() {
  return Math.floor(Math.random() * 255);
}

//get random color
function randColor() {
  return randInt() + "," + randInt() + "," + randInt();
}

//adds the grid
function addGrid(num) {
  for (let i = 0; i < num * num; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = 512 / num - 2 + "px";
    grid.style.height = 512 / num - 2 + "px";
    grid.style.border = "1px solid lightgray";
    gridContainer.appendChild(grid);
  }
  let grids = document.querySelectorAll(".grid");
  //set event listener to all grids
  grids.forEach((grid) => {
    grid.addEventListener("mouseenter", (e) => changeBgColor(e.target));
  });
}
//changes the background color
function changeBgColor(grid) {
  grid.style.backgroundColor = `rgb(${randColor()})`;
  grid.style.opacity = parseFloat(grid.style.opacity || 0) + 0.1;
  grid.classList.add("colored");
}
addGrid(16); // adds the grid to the window

//function to create a new grid
function newGrid() {
  num = prompt("How many squares per side?");
  if (num > 100) {
    alert("Please have numbers less than 100!");
    return;
  }
  let grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    gridContainer.removeChild(grid);
  });
  addGrid(num);
  grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseenter", (e) => changeBgColor(e.target));
  });
}

//set event listner to new grid button
button.addEventListener("click", () => newGrid());
