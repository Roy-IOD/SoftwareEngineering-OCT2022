// Function to generate random number 
function rollDice() { 
    let selectedValue = document.getElementById("sidedDice").value;
    min = Math.ceil(1);
    max = Math.floor(selectedValue);
   let rolled = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("total").innerHTML = ('You rolled a ' + " " + rolled)
    changeImg(rolled)
    changePara(selectedValue)

} 
  
function changeImg(rolled) {
    document.getElementById("dicepic").src="/Lab Exercise v1/img/dice-0"+ rolled +".png"
}


function changePara(selectedValue){
    document.getElementById("game").innerHTML = "Playing with a " + " " + selectedValue +" sided dice."
}