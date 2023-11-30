function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a , b) {
    if (b != 0) return a / b;
    else return "Division by zero";
}

let input = document.querySelector(".input");
let a, b, operator;

let numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener('click', e => {
    input.textContent += e.target.textContent;
}));

