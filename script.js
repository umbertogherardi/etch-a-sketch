const gridContainer = document.querySelector('.grid-container');

function createGrid() {
    const SIDE_LENGTH = 16;

    for (let i = 0; i < SIDE_LENGTH; i++) {
        let gridRow = document.createElement('div');
        gridRow.setAttribute('style', 'display: flex; justify-content: center;')
        
        for (let j = 0; j < SIDE_LENGTH; j++) {
            let gridCell = document.createElement('div');
            gridCell.setAttribute('style', 'border: 2px solid blue; height: 30px; width: 30px;')
            gridRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridRow);
    }
}

createGrid();