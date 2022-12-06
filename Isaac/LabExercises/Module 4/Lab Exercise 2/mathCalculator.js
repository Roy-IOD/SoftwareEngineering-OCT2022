function mathCalculate() {
    let selectedOperator = document.getElementById("operatorSelector").value;
    let firstNumber = document.getElementById("fnumber").value;
    let lastNumber = document.getElementById("lnumber").value;

    if (selectedOperator = "addition") {
        let result = Number(firstNumber) + Number(lastNumber)
        return document.getElementById('result').innerHTML = result;
    } 
    else if (selectedOperator = "subtraction") {
        let result = Number(firstNumber) - Number(lastNumber)
        return document.getElementById('result').innerHTML = result;
    } 
    else if (selectedOperator = "divide") {
        let result = Number(firstNumber) / Number(lastNumber)
        return document.getElementById('result').innerHTML = result;
    } 
    else if (selectedOperator = "multiply") {
        let result = Number(firstNumber) * Number(lastNumber)
        return document.getElementById('result').innerHTML = result;
    } 
};

function mathReset() {
    let firstNumber = document.getElementById("fnumber")
    let lastNumber = document.getElementById("lnumber")
    let resetNumber = document.getElementById('result')
    .reset(firstNumber)
    .reset(lastNumber)
    .reset(resetNumber)
}