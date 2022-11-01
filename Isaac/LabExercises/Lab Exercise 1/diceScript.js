function diceRoll() {
    let selectedValue = document.getElementById("diceSelector").value;
    let dice = Math.floor(Math.random() * selectedValue) +1;
    document.getElementById("result").innerHTML = dice;
}

