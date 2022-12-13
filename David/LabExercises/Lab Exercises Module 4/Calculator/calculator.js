function calculate() {
    //get value of checkbox
    let operator = form.flexRadioDefault.value;
    console.log(operator)

    //get value of first and second number
    let firstNumber = document.getElementById ("firstnumber").value
    let secondNumber = document.getElementById ("secondnumber").value
    console.log(firstNumber)
    console.log(secondNumber)

    //do the calculation 
    if (operator == "+") {
        result = Number(firstNumber) + Number(secondNumber)
    }
    if (operator == "-") {
        result = Number(firstNumber) - Number(secondNumber)
    }
    if (operator == "*") {
        result = Number(firstNumber) * Number(secondNumber)
    }
    if (operator == "/") {
        result = Number(firstNumber) / Number(secondNumber)
    }
    
    //display the result
    document.getElementById("result").innerHTML = result;
}

function resetForm(){
    //reset the form
    document.getElementById("form").reset();
    //clear the result
    document.getElementById("result").innerHTML="";
} 
