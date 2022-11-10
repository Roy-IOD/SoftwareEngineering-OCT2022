//function chaining is when you can call functions straight after each other in a chain
//to achieve this, each function has to return the right/expected value for the next function to use

const basketballGame = {
    score: 0,
    freeThrow() {
        score++;
    },
    basket() {
        score += 2;
    },
    threePointer() {
        score += 3;
    },
    halfTime() {
        console.log('Halftime score is '+score);
    },
    fullTime() {
        console.log('Fulltime final score is '+score)
    }
}

//this is what function chaining looks like, but it won't work yet ...
basketballGame.basket().basket().freeThrow().freeThrow().basket().threePointer().halfTime();


//if we wanted to have one of these objects for each team what could we do?
//copy-paste and rename object; make a shallow clone/copy of the original in a new variable; rewrite as a constructor or class

