let dimDivs = 32;

const sketchBtns = document.querySelectorAll('.sketch-btns button');

sketchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setSketchType(btn.textContent);
    })
})

const grid = document.querySelector('.grid');

const pixelBtn = document.querySelector('.pixel-btn');
const clearBtn = document.querySelector('.clear-btn');

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

    let selectedBtn = document.querySelector('.selected-btn').textContent;

    removeGrid();
    createGrid(dimDivs, selectedBtn);
});

clearBtn.addEventListener('click', () => {
    let selectedBtn = document.querySelector('.selected-btn').textContent;

    removeGrid();
    createGrid(dimDivs, selectedBtn);
});

function setSketchType(selectedBtn) {
    sketchBtns.forEach(btn => {
        if (btn.textContent === selectedBtn) {
            btn.classList.add('selected-btn');
        } else {
            btn.classList.remove('selected-btn');
        }
    });

    removeGrid();
    createGrid(dimDivs, selectedBtn);
}

function removeGrid() {
    let rows = document.querySelectorAll(".grid > div");
    rows.forEach(row => {
        let cells = row.querySelectorAll("div");
        cells.forEach(cell => {
            row.removeChild(cell);
        })
        grid.removeChild(row);
    })
}

function createGrid(dimDivs, sketchType) {
    const DIM_PIXELS = 480;
    const cellDim = DIM_PIXELS / dimDivs;

    for (let i = 0; i < dimDivs; i++) {
        let gridRow = document.createElement('div');
        
        gridRow.setAttribute('style', 'display: flex;')
        
        for (let j = 0; j < dimDivs; j++) {
            let gridCell = document.createElement('div');
            
            gridCell.setAttribute('style', `height: ${cellDim}px; width: ${cellDim}px; background-color: lightgray;`)

            gridCell.addEventListener('mouseover', function(e) {
                let cellColor = 'gray';

                switch(sketchType) {
                    case 'Rainbow':
                        cellColor = randomColor();
                        break;
                    case 'Gradient':
                        break;
                }


                e.target.setAttribute('style', `background-color: ${cellColor}; height: ${cellDim}px; width: ${cellDim}px;`)
            })

            gridRow.appendChild(gridCell);
        }
        grid.appendChild(gridRow);
    }

    grid.setAttribute('style', `border: 4px solid darkred; width: ${DIM_PIXELS}px;`)
}

function randomColor() {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    return `rgb(${red}, ${green}, ${blue})`;
}

// set defaults
setSketchType(document.querySelector('.classic').textContent);