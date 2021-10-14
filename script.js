//add 16x16 divs to page
let gridWidth = 16;
let container = document.querySelector(".container");


function createGrid(width){
    for (i = 0; i < (width*width); i++) {
        let divnode = document.createElement("div");
        divnode.className = "grid-element";
        divnode.classList.add("item"+(i+1));
        container.appendChild(divnode);
    }
}

function clearGrid(){
    
}

createGrid(gridWidth);

let gridSquare = document.querySelectorAll(".grid-element");
gridSquare.forEach((div) => {
    div.addEventListener("mouseenter", function(e){
        this.classList.add("grid-item-hover");
    });
});
