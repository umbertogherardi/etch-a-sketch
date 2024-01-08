const grid = document.querySelector('.grid');

const dimBtn = document.querySelector('button');
dimBtn.addEventListener('click', () => {
    let dimDivs = prompt("Enter the width/length for the grid: ");


    document.removeChild(grid);
});

function removeGrid(dimDivs) {
    for (let i = 0; i < dimDivs; i++) {
        curRow = document.querySelector(".grid div");
        console.log(curRow.target);
        
        gridRow.setAttribute('style', 'display: flex;')
        
        for (let j = 0; j < dimDivs; j++) {
            let gridCell = document.createElement('div');
        }
    }   
}

function createGrid(dimDivs) {
    const DIM_PIXELS = 480;
    const cellDim = DIM_PIXELS / dimDivs;
    console.log(cellDim)

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

createGrid(32);