const gridContainer = document.querySelector('#container');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName('cell');
let numberOfCells

const inputGrid = document.querySelector('#inputGrid');
inputGrid.addEventListener('click', () => {
    numberOfCells = parseFloat(prompt('How many cells do you want?'));
    if (numberOfCells > 100) {
        alert('ERROR: The max number of cell is 100');
    }else {
    changeCells(); }
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


function changeCells() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    makeRows(numberOfCells);
    makeColumns(numberOfCells);

    //Colors in the cells
    for (let j = 0; j < cells.length; j++) {
        cells[j].addEventListener('mouseover', () =>{
            cells[j].style.backgroundColor = 'red';
        });    
    };
};

