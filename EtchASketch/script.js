
//GRID 16X16
//const cdiv = document.querySelector('.container')

//for(let i = 1; i<257; i++){
//  const div = document.createElement("div");
//div.classList.add("box");
//cdiv.appendChild(div);
//}

//SLIDER and GRID CHANGE

const slider = document.querySelector('#slider');
const textSlider = document.querySelector('#number');

slider.addEventListener('input', function () {
    let val = document.getElementById('slider').value;
    textSlider.textContent = val;
    removeAllChildNodes(grid);
    createGrid(val);
});

// createGRid and erase grid content
const grid = document.querySelector("#grid");
let size = document.getElementById('slider').value;
function createGrid(size) {
    grid.style.setProperty("--n", size);
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        grid.appendChild(div);
    }
};
createGrid(16);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//ERASE
const eraseBtn = document.querySelector('.erase');
const cells = document.querySelectorAll('.cell');
eraseBtn.addEventListener('click', eraseCells);
function eraseCells() {
    cells.forEach(cell => cell.style.backgroundColor = "white");
}

//DRAW COLOR
const redButton = document.querySelector(".redButton");
const yellowButton = document.querySelector(".yellowButton");
const blueButton = document.querySelector(".blueButton");
blueButton.addEventListener('click',blueDraw);
yellowButton.addEventListener("click", yellowDraw)
redButton.addEventListener("click", redDraw);

function redDraw() {
    cells.forEach(cell => cell.addEventListener("mouseover", redColor));
}

function blueDraw() {
    cells.forEach(cell => cell.addEventListener("mouseover", blueColor));
}


function yellowDraw() {
    cells.forEach(cell => cell.addEventListener("mouseover", yellowColor));
}


//color
function blueColor(e) {
    e.target.setAttribute("style", "background-color:blue");
}

function redColor(e) {
    e.target.setAttribute("style", "background-color:red");
}

function yellowColor(e) {
    e.target.setAttribute("style", "background-color:yellow");
}