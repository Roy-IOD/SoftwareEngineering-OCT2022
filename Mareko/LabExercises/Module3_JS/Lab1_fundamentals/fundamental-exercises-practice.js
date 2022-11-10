// //NUMBER TYPE
// /*let number = 123; //integer
// let number = 12.345; // floating point number
// console.log(n)*/

// console.log( 1/0 ); // Infinity
// console.log( -1/0 ); // -Infinity
// console.log( "not a number" / 2 ); //NaN, such division is erroneous

// //BigInt
// const bigInt = 123456789012345678912345n;
// console.log(bigInt)

// let age2;

// console.log(age2)


// console.log(typeof undefined) // "undefined"
// console.log (typeof 0) // "number"
// console.log(typeof 10n) // "bigint"
// console.log(typeof true) // "boolean"
// console.log(typeof "foo") // "string"
// console.log(typeof Symbol("id")) // "symbol"
// console.log(typeof Math) // "object"
// console.log(typeof null) // "object"
// console.log(typeof alert) // "function"

// const onefour = "1" + 4 //"122"
// console.log(2 * 2 - "1") //"41"

// const str=""

// if(str)
// {
//     console.log('this string is true')
// }
// else (str) ;{
//         console.log('this string is false')
//     }


// const dog = {
//     name : 'Sparticus',
//     breed : 'German Shepard',
//     color : 'black',
//     greeting: function() {
//         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
// }

// const dog2 = {
//     name : 'Zeus',
//     breed : 'Labrador',
//     color : 'gold',
//     greeting: function() {
//         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
// }

// console.log (dog)
// console.log (dog2)

// function 

// constructor(newName, newBreed, newColor)
// {
//     this.name = newName;
//     this.breed = newBreed;
//     this.color = newColor;

//     this.greeting = function() {
//         console.log(`Woof, said ${ this.name } the ${ this.breed }.`);
//     }
// }




// function CatConstructor(newName, newBreed, newColor) //constructor
// {
//     this.name = newName;
//     this.breed = newBreed;
//     this.color = newColor;

//     this.greeting = function() {
//         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
// }

// const elfie = new CatConstructor('Elfie', 'Aphrodite Giant', 'ginger')
// elfie.greeting();

// class DogClass //class
// {
//     constructor(newName, newBreed, newColor)
//     {
//         this.name = newName;
//         this.breed = newBreed;
//         this.color = newColor;
//     }

//     greeting() {
//         console.log(`Woof, said ${ this.name } the ${ this.breed }.`);
//     }
// }

// const jerry = new DogClass('Jerry', 'German Shepard', 'Black')
// jerry.greeting();
// class CitizenClass
// {
//     constructor(citizenName, citizenAge, citizenCountry)
//     {
//         this.name = citizenName;
//         this.age = citizenAge;
//         this.country = citizenCountry;
//     }

//     passport() {
//         console.log(`This is ${ this.name } they are ${ this.age } and they are from ${ this.country }.`);
//     }

// }

// const pat = new CitizenClass('Pat', '25', 'Germany')
// pat.passport();
