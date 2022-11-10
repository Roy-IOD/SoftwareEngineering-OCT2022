const dice = document.getElementById('dice-btn');

function diceGameSix() {
	var randomDice = Math.floor((Math.random() * 6) + 1);
	var diceLocation = "img/" + "Dice-" + randomDice + ".jpg";
	var img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", diceLocation);
}

function diceGameTen() {
	var randomDice = Math.floor((Math.random() * 10) + 1);
	var diceLocation = "img/" + "Dice-" + randomDice + ".jpg";
	var img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", diceLocation);
}