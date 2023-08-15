const btn = document.getElementById("btn");
const shapes = [
    'quad-circle-1',
    'quad-circle-2',
    'quad-circle-3',
    'quad-circle-4',
    'triangle-1',
    'triangle-2',
    'triangle-3',
    'triangle-4',
    'circle-1'
];
const colors = [
    '#D61C4E',
    '#F77E21',
    '#FAC213',
    '#FEF9A7'
];
const boxes = document.querySelectorAll(".container div");

let generatepattern = () => {
    boxes.forEach((bx) => {
        bx.className = "";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        bx.classList.add(shapes[i]);
        bx.style.backgroundColor = colors[j];
    });
};
btn.addEventListener("click", generatepattern);
window.addEventListener("load", generatepattern);
