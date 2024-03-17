const gridContainer = document.querySelector('#container');
let rows = document.getElementsByClassName("gridRow");


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
}

defaultGrid();

