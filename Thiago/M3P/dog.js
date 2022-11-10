class DogClass //class
{
    constructor(newName, newBreed, newColor)
    {
        this.name = newName;
        this.breed = newBreed;
        this.color = newColor;
    }

    greeting() {
        console.log(`Woof, said ${ this.name } the ${ this.breed }.`);
    }
}

const charlie = new DogClass('Charlie', 'Bulldog', 'Brown')
charlie.greeting();

const toby = new DogClass('Toby', 'Poodle', 'White')
toby.greeting();

function DogConstructor(newName, newBreed, newColor) //constructor
{
    this.name = newName;
    this.breed = newBreed;
    this.color = newColor;

    this.greeting = function() {
        console.log(`Woof, said ${ this.name } the ${ this.breed }.`);
    }
}

const peter = new DogConstructor('Peter', 'Rottweiler', 'Black')
peter.greeting();

