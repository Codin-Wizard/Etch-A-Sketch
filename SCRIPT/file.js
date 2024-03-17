const gridContainer = document.querySelector('#container');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function makeRows(rowNum) {
    //Creates rows
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        gridContainer.appendChild(row).className('gridRow');     
    };
};

function makeColumns(cellNum) {
    //Creates columns
    for (let c = 0; c < rows.length; c++) {
        for (let i = 0; i < cellNum; i++) {
            let cell = document.createElement('div');
            rows[i].appendChild(cell).className('cell');
        };
    };
};