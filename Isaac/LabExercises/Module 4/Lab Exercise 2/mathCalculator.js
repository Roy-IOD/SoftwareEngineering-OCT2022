function mathCalculate() {
    let selectedOperator = document.getElementById("operatorSelector").value;
    let firstNumber = document.getElementById("fnumber").value;
    let lastNumber = document.getElementById("lnumber").value;

    if (selectedOperator = "addition") {
        let result = Number(firstNumber) + Number(lastNumber)
        return document.getElementById('result').innerHTML = result;
    } 
    if (selectedOperator = "subtraction") {
        let result = Number(firstNumber) - Number(lastNumber)
        return document.getElementById('result').innerHTML = result;
    } 
    
}