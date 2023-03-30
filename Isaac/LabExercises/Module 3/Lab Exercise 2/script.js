//basic const
const person = {
    name : 'Isaac',
    quality : 'Handsome',
    gender : 'man',
    greeting: function() {
        console.log(`Hello, said ${ this.name } the ${ this.quality } ${this.gender}.`);
    }
}

const person2 = {
    name : 'Sam',
    quality : 'Lame',
    color : 'blonde',
    greeting: function() {
        console.log(`Hello, said ${ this.name } the ${ this.quality } ${this.color}.`);
    }
}

console.log(person.greeting());
console.log(person2.greeting());


function personConstructor(newName, newHeight, newWeight) //constructor
{
    this.name = newName;
    this.height = newHeight;
    this.weight = newWeight;

    this.greeting = function() {
        console.log(`Hello, my name is ${ this.name } and i am ${ this.height } centimeters tall and ${ this.weight } kilograms.`);
    }
}

const Isaac = new personConstructor("Isaac", "193", "95")
console.log(Isaac.greeting());


class personClass //class constructor
{
    constructor(newTeam, newPlayer, newCountry)
    {
        this.team = newTeam;
        this.player = newPlayer;
        this.country = newCountry;
    }
    goat() {
        console.log(`The best player in the world is ${ this.player } who plays for ${ this.team } and is from ${ this.country }. `)
    }
}
const messi = new personClass('PSG', 'Lionel Messi', 'Argentina')
console.log(messi.goat());

