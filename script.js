let gridContainer = document.querySelector('#gridContainer')
let button = document.querySelector('btn');
const width = '30px';
const height = '30px';
//adds the grid
function addGrid () {
    for (let i = 0; i<256 ; i++) {
        let grid = document.createElement('div')
        grid.classList.add('grid');
        grid.style.border = '1px solid lightgray'
        grid.style.width = width
        grid.style.height = height
        gridContainer.appendChild(grid);
    }
}
//changes the background color
function changeBgColor (grid) {
    grid.style.backgroundColor = 'black';
    grid.classList.add('colored');
}
addGrid(); // adds the grid to the window
let grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
    grid.addEventListener('mouseenter', (e) => changeBgColor(e.target))
}); //set event listener to all grids
