/* 
// This version uses if else statements

function mathCalculate() {
    let selectedOperator = document.getElementById("operatorSelector").value;
    let firstNumber = document.getElementById("fnumber").value;
    let lastNumber = document.getElementById("lnumber").value;
    let result = null

    if (selectedOperator == "addition") {
        result = Number(firstNumber) + Number(lastNumber)
    } 
    else if (selectedOperator == "subtraction") {
        result = Number(firstNumber) - Number(lastNumber)
    } 
    else if (selectedOperator = "divide") {
        result = Number(firstNumber) / Number(lastNumber)
    } 
    else if (selectedOperator = "multiply") {
        result = Number(firstNumber) * Number(lastNumber)
    } 
    document.getElementById('result').innerHTML = result;
};
*/


// This version uses switch/break statement

function mathCalculate() {
    let firstNumber = document.getElementById("fnumber").value;
    let lastNumber = document.getElementById("lnumber").value;
    let result = null

    switch(document.getElementById("operatorSelector").value) {
        case "addition":
            result = Number(firstNumber) + Number(lastNumber);
            break;
        case "subtraction":
            result = Number(firstNumber) - Number(lastNumber);
            break;
        case "multiply":
            result = Number(firstNumber) * Number(lastNumber);
            break;
        case "divide":
            result = Number(firstNumber) / Number(lastNumber);
            break;
    }
    document.getElementById('result').innerHTML = result;
};


function mathReset() {
    document.getElementById("form").reset();
    document.getElementById("result").innerHTML = "";
}