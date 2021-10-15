//add 16x16 divs to page
let gridWidth = 75;
let container = document.querySelector(".container");


function createGrid(width) {
    for (i = 0; i < (width * width); i++) {
        let divnode = document.createElement("div");
        divnode.className = "grid-element";
        divnode.classList.add("item" + (i + 1));
        container.appendChild(divnode);
    }
}

function clearGrid() {

}

createGrid(gridWidth);
let pointerType = "pencil";
let gridSquare = document.querySelectorAll(".grid-element");

gridSquare.forEach((div) => {
    div.addEventListener("mouseenter", function (e) {
        //this.classList.add("grid-item-hover");
        if (pointerType === "pencil") {
            let gridBGColor = getComputedStyle(document.querySelector(":root")).getPropertyValue("--line-color");
            this.style.setProperty("background-color", gridBGColor);
        }
    });
    div.addEventListener("click", function (e) {
        if (pointerType === "eraser") {
            this.style.setProperty("background-color", "white");
        }
    });
});

let lineColor = document.querySelector("#line-colour");
lineColor.addEventListener('change', () => {

    document.querySelector(":root").style.setProperty("--line-color", lineColor.value);
});

let eraser = document.querySelector(".eraser");
eraser.addEventListener('click', function (e) {
    pointerType = "eraser";
    document.documentElement.style.cursor = "url('clipart42077192.png') 0 15, default";
});

document.querySelector(".color-selection").addEventListener('click', function (e) {
    document.documentElement.style.cursor = "default";
    pointerType = "pencil";
});

document.querySelector(".clear").addEventListener('click', function (e) {
    clearGrid();
});

function clearGrid(){
    gridSquare.forEach((div)=>{
        div.style.setProperty("background-color", "white");
    });
}
