class Animal {
    static type = 'animal'

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }

    static showType()
    {
        console.log(Animal.type) //why not this.type?
    }
}
    
class Rabbit extends Animal {

    static type = 'rabbit'
    constructor(name, earLength)
    {
        super(name)
        this.earLength = earLength
    }

    hide() {
        console.log(`${this.name} hides!`);
    }

    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }    

    static showType()
    {
        console.log(Rabbit.type) //why not this.type?
    }    
}

const pig = new Animal('Porky Pig')
const rabbit = new Rabbit("White Rabbit", 3);
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit hides!
Rabbit.showType()

// pig.run(3)
// pig.stop()
// //pig.hide() //undefined, doesnt exist

// rabbit.stop()
// Animal.showType()

//https://javascript.info/private-protected-properties-methods has more on private and protected