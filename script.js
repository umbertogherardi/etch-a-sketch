let dimDivs = 16;

const grid = document.querySelector('.grid');

const pixelBtn = document.querySelector('.pixel-btn');
pixelBtn.addEventListener('click', () => {
    let newDimDivs = prompt("Enter the number of pixels for the sides (1 - 100)");

    if (newDimDivs) {
        if (newDimDivs < 1) {
            dimDivs = 1;
        } else if (newDimDivs > 100) {
            dimDivs = 100;
        } else {
            dimDivs = newDimDivs;
        }
    }
    
    removeGrid();
    createGrid(dimDivs);
});

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    removeGrid();
    createGrid(dimDivs);
});

function removeGrid() {
    let rows = document.querySelectorAll(".grid > div");
    rows.forEach(row => {
        console.log(row);
        let cells = row.querySelectorAll("div");
        cells.forEach(cell => {
            row.removeChild(cell);
        })
        grid.removeChild(row);
    })
}

function createGrid(dimDivs) {
    const DIM_PIXELS = 480;
    const cellDim = DIM_PIXELS / dimDivs;

    for (let i = 0; i < dimDivs; i++) {
        let gridRow = document.createElement('div');
        
        gridRow.setAttribute('style', 'display: flex;')
        
        for (let j = 0; j < dimDivs; j++) {
            let gridCell = document.createElement('div');
            
            gridCell.setAttribute('style', `height: ${cellDim}px; width: ${cellDim}px; background-color: lightgray;`)

            gridCell.addEventListener('mouseover', function(e) {
                console.log(e.target);
                e.target.setAttribute('style', `background-color: gray; height: ${cellDim}px; width: ${cellDim}px;`)
            })

            gridRow.appendChild(gridCell);
        }
        grid.appendChild(gridRow);
    }

    grid.setAttribute('style', `border: 4px solid darkred; width: ${DIM_PIXELS}px;`)
}

createGrid(dimDivs);