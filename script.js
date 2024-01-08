const grid = document.querySelector('.grid');

function createGrid(dimDivs) {
    const DIM_PIXELS = 480;
    const cellDim = DIM_PIXELS / dimDivs;
    console.log(cellDim)

    for (let i = 0; i < dimDivs; i++) {
        let gridRow = document.createElement('div');
        
        gridRow.setAttribute('style', 'display: flex;')
        
        for (let j = 0; j < dimDivs; j++) {
            let gridCell = document.createElement('div');
            
            gridCell.setAttribute('style', `height: ${cellDim}px; width: ${cellDim}px;`)

            gridCell.addEventListener('mouseover', function(e) {
                console.log(e.target);
                e.target.setAttribute('style', `background-color: red; height: ${cellDim}px; width: ${cellDim}px;`)
            })

            gridRow.appendChild(gridCell);
        }
        grid.appendChild(gridRow);
    }

    grid.setAttribute('style', `border: 2px solid black;width: ${DIM_PIXELS}px;`)
}

createGrid(32);