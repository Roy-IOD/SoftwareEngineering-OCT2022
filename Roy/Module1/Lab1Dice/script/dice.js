// create a dice with roll function
var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        displayResult(randomNumber);
    }
}
//display dice roll result to the page
function displayResult(number) {
    var diceElement = document.getElementById('dice');
    diceElement.innerHTML = number;
}

var rollAction = document.getElementById('rollAction');

rollAction.onclick = function () {
    dice.roll();
};