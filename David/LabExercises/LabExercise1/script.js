function selectDice(event,form) {
    event.preventDefault();

//get value of radio button
let diceSides = form.dice.value
  
//generate a random number limited by value of radio button
let x = Math.floor(Math.random() * diceSides) +1

//display the random number
 document.getElementById("result").innerHTML= x;
}