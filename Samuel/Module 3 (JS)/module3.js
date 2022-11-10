

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