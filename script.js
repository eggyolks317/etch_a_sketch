let gridContainer = document.querySelector('#gridContainer')
const width = '30px';
const height = '30px';
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
function changeBgColor (grid) {
    grid.style.backgroundColor = 'black';
    grid.classList.add('colored');
}
addGrid();

let grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {grid.addEventListener('mouseenter', (e) => changeBgColor(e.target))});