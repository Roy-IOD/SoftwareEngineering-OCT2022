class CoffeeMachine {
    // ...
  
    constructor(power) {
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
  
    #waterLimit = 200;

    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value);
      }    
  }
  
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

//coffeeMachine.power = 25; // Error (no setter)

//console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

// can't access privates from outside of the class
//coffeeMachine.#fixWaterAmount(123); // Error
//coffeeMachine.#waterLimit = 1000; // Error