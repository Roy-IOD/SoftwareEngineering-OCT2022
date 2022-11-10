//function chaining is when you can call functions straight after each other in a chain
//to achieve this, each function has to return the right/expected value for the next function to use

// const basketballGame = {
//     score: 0,
//     freeThrow() {
//         this.score++;
//         return this;
//     },
//     basket() {
//         this.score += 2;
//         return this;
//     },
//     threePointer() {
//         this.score += 3;
//         return this;
//     },
//     halfTime() {
//         console.log('Halftime score is '+this.score);
//         return this;
//     },
//     fullTime() {
//         console.log('Fulltime final score is '+this.score)
//         return this;
//     }
// }

// //this is what function chaining looks like, but it won't work yet ...
// basketballGame.basket().basket().freeThrow().freeThrow().basket().threePointer().halfTime();


//if we wanted to have one of these objects for each team what could we do?
//copy-paste and rename object; make a shallow clone/copy of the original in a new variable; rewrite as a constructor or class

function Team(name) {
    this.score = 0;
    this.name = name;

    this.freeThrow = function() {
        this.score++;
        return this;
    }
    this.basket = function() {
        this.score += 2;
        return this;
    }
    this.threePointer = function() {
        this.score += 3;
        return this;
    }
    this.halfTime = function() {
        console.log('Halftime score for '+this.name+' is '+this.score);
        return this;
    }
    this.fullTime = function() {
        console.log(`Fulltime final score for ${this.name} is ${this.score}`)
        return this;
    }    
}

const bullets = new Team('bullets')
bullets.basket().threePointer().basket().freeThrow().basket().halfTime();

const celtics = new Team('celtics')
celtics.basket().freeThrow().threePointer().basket().basket().basket().halfTime()


class NbaTeam
{
    constructor(newTeam)
    {
        this.team = newTeam;
        this.score = 0;
        this.fouls = 0;
    }

    basket() {
        this.score++;
        return this;
     }

     freethrow() {
        this.score++;
        return this;
     }

     threePointer(){
        this.score += 3;
        return this;
     }

     foul() {
        this.fouls++;
        return this;
     }

     halfTime() {
        console.log('Halftime score for '+this.team+' is '+this.score + ' points and '+ this.fouls + ' fouls');
        return this;
     }

     fullTime() {
        console.log(`Fulltime final score for ${this.team} is ${this.score} points and ${this.fouls} fouls`)
        return this;
     }

    
}

const nuggets = new NbaTeam ('Nuggets')
const sixers = new NbaTeam ('76ers')
nuggets.basket().threePointer().threePointer().threePointer().fullTime()
sixers.foul().foul().foul().foul().foul().foul().foul().foul().fullTime()

