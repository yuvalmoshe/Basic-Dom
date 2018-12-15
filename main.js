console.log(document)

const down = document.getElementById("down")
console.log (down);



const playingField = document.getElementById("playing-field")
playingField.style.backgroundColor = "a5a4a5";

const ball = document.getElementById("block")
ball.style.backgroundColor = "#d3d0d2";


const moveRight = function () {
const block = document.getElementById("block")
let left= parseInt(block.style.left) || 0
if ( left < 400) {
left += 15
block.style.left = left + "px";
}
 }


 const subHeader = document.createElement ("h2")
 subHeader.innerHTML = "Game!"
 subHeader.setAttribute ("class" , "my-subHeader")
 document.body.appendChild (subHeader)


const box = document.getElementById ("box")
 box.clickColor = function () {
    box.style.backgroundColor = "#8e44ad"
    document.body.backgroundColor (box)
}


box.onmouseenter = function () {
    box.innerHTML = "onmouseenter"
}

const box1 = document.createElement("div")
box.setAttribute ("class" , "box");
box.onclick = function () {
    box.innerHTML = "i'm alive!"
    document.getElementById("some-id").appendChild(box1)
}

const moveLeft = function () {
    const block = document.getElementById("block")
    let left= parseInt(block.style.left) || 0
    if (left > 15){
    left -= 15
    block.style.left = left + "px";
}
}

const moveUp = function () {
        const block = document.getElementById("block")
        let up= parseInt(block.style.top) || 0;
        if (up >15){
            up -= 15
            block.style.top = up + "px";
        }
}

const moveDown= function () {
    const block = document.getElementById("block")
    let down= parseInt(block.style.top) || 0
    if (down < 320) {
    down += 15
    block.style.top = down + "px";
}
}








