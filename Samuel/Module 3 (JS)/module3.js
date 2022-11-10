

function DogConstructor(newName, newBreed, newColor)
{
    this.name = newName;
    this.breed = newBreed;
    this.color = newColor;

    this.greeting = function() {
        console.log(`WOOF WOOF, said ${this.name} the ${this.breed}.`);
    }
}

const boris = new DogConstructor('Boris', 'Rotweiler', 'black')
const cooper = new DogConstructor('Cooper', 'Collie', 'blonde')
boris.greeting();
cooper.greeting();


class NbaClass
{
    constructor(newTeam, newPlayer, newCity)
    {
        this.team = newTeam;
        this.player = newPlayer;
        this.city= newCity;
    }

    mvp() {
        console.log(`The MVP is ${this.player} who plays for the ${this.team} in ${this.city}.`)
    }
}

const jokic = new NbaClass('Nuggets', 'Jokic', 'Denver')
jokic.mvp();


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

