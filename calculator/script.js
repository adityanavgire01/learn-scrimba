

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sum = document.getElementById("sum-el")
function add() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    let result = num1 + num2;
    document.getElementById("sum-el").textContent = "Sum : " + result;
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    let result = num1 - num2;
    document.getElementById("sum-el").textContent = "Difference : " + result;
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    let result = num1 * num2;
    document.getElementById("sum-el").textContent = "Product : " + result;
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    let result = num1 / num2;
    document.getElementById("sum-el").textContent = "Quotient : " + result;
}
