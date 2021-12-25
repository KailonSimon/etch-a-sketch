const header = document.querySelector('h1');
const gridContainer = document.querySelector('.container');
const newButton = document.createElement('button');
const changeColorButton = document.createElement('button');
let currentColor = "red"
let gridSize = 4;
header.style.color = currentColor;
newButton.textContent = "New";
changeColorButton.textContent = "Random Color";
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 120px)`;
function clearGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};
function generateGrid(gridSize) {
    for (let i = 0; i < (Math.pow(gridSize, 2)); i++) {
        const square = document.createElement("div");
        square.classList.add('square');
        square.style.width = `${100 / gridSize}%`;
        square.style.height = `${100 / gridSize}%`;
        gridContainer.appendChild(square);
        square.addEventListener("mouseenter", function(e) {
            e.target.style.backgroundColor = `${currentColor}`;
            
        });
    };
}
function randomColorPicker() {
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
};

changeColorButton.addEventListener('click', () => {
    currentColor = randomColorPicker();
    header.style.color = currentColor;
    return currentColor;
});
generateGrid(4);
newButton.addEventListener('click', () => {
    gridSize = prompt("Please enter a grid size:");
    if (gridSize > 100) {
        gridSize = 100;
    };
    console.log(`New grid size: ${gridSize}`);
    clearGrid(gridContainer);
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 120px)`;
    generateGrid(gridSize);
});
/*gridContainer.appendChild(newButton);
gridContainer.appendChild(changeColorButton);*/
document.body.insertBefore(newButton, gridContainer);
document.body.insertBefore(changeColorButton, gridContainer);
