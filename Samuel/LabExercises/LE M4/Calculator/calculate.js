function mathCalculate() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = null

    switch(document.getElementById("operator").value){
      case "1":
        result = Number(number1) + Number(number2);
        break;
      case "2":
        result = Number(number1) - Number(number2);
        break;
      case "3":
        result = Number(number1) * Number(number2);
        break;
      case "4":
        result = Number(number1) / Number(number2);
        break;
    }
    document.getElementById('result').innerHTML = result;
  };

  function mathReset() {
    document.getElementById("form").reset();
    document.getElementById("result").innerHTML = "";
}