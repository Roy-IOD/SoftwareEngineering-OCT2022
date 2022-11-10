const delay = (func, ms) => {
    return function (message) {
        setTimeout (func, ms, message)
    }
}

const hello = ( who ) => console.log ('Hello ' + who );
const delayHello = delay(hello, 5000);
delayHello('world');


const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
        return this;
    },
    fullTime() {
        console.log('Fulltime final score is '+this.score)
        return this;
    }
}