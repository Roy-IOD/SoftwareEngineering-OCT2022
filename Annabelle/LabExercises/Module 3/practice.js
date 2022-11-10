const n=12
console.log(n)
let p="190"
console.log(n-p)
let greet='hello my name is ...'
console.log(greet + n)

//split page

function dogConstructor(newName, newBreed, newColor) 
{
    this.name = newName;
    this.breed = newBreed;
    this.color = newColor;

    this.greeting = function() {
        console.log(`bark, said ${ this.name } the ${ this.color } ${ this.breed }.`);
    }
}

const sam = new dogConstructor('Sam', 'Border collie', 'Black and white')
sam.greeting();
const bobby = new dogConstructor('Bobby', 'Golden retriever', 'white')
bobby.greeting();

//split//

class BallGame {
    constructor() {
        this.score=0;
    }
        freeThrow() {
            this.score++;
            return this;
        }
        basket() {
            this.score += 2;
            return this;
        }
        threePointer() {
            this.score += 3;
            return this;
        }
        halfTime() {
            console.log('Halftime score is '+this.score);
            return this;
        }
        fullTime() {
            console.log('Fulltime final score is '+this.score)
            return this;
        }
}
const game1 = new BallGame()
game1.basket().basket().freeThrow().freeThrow().basket().threePointer().halfTime();