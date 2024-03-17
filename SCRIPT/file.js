const gridContainer = document.querySelector('#container');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName('cell');

const inputGrid = document.querySelector('#inputGrid');
inputGrid.addEventListener('click', () => {
    let numberOfCells = parseFloat(prompt('How many cells do you want?'));
});


function makeRows(rowNum) {
    //Creates rows
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        row.className ='gridRow'; 
        gridContainer.appendChild(row);    
    };
};

function makeColumns(cellNum) {
    //Creates columns
    for (let c = 0; c < rows.length; c++) {
        for (let i = 0; i < cellNum; i++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            rows[c].appendChild(cell);
        };
    };
};
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}; 
defaultGrid();

//Colors in the cells
for (let j = 0; j < cells.length; j++) {
    cells[j].addEventListener('mouseover', () =>{
        cells[j].style.backgroundColor = 'red';
    });    
};