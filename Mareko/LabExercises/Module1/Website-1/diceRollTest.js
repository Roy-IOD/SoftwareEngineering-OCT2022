let dice = {
    value: 6,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.value) + 1;
      return randomNumber;
    }
  }

  function newRoll(val){
    dice.value = val
    let result = dice.roll();
    printNumber (result);

    console.log("diceroll:" + val)
  }

  function printNumber(number) {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  let button = document.getElementById('button');
  
  button.onclick = function() {
    let result = dice.roll();
    printNumber(result);
  };

  // function printConsole(text) {
  //   let diceroll
  // }