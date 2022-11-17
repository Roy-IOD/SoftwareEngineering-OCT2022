// // // //NUMBER TYPE
// // // /*let number = 123; //integer
// // // let number = 12.345; // floating point number
// // // console.log(n)*/

// // // console.log( 1/0 ); // Infinity
// // // console.log( -1/0 ); // -Infinity
// // // console.log( "not a number" / 2 ); //NaN, such division is erroneous

// // // //BigInt
// // // const bigInt = 123456789012345678912345n;
// // // console.log(bigInt)

// // // let age2;

// // // console.log(age2)


// // // console.log(typeof undefined) // "undefined"
// // // console.log (typeof 0) // "number"
// // // console.log(typeof 10n) // "bigint"
// // // console.log(typeof true) // "boolean"
// // // console.log(typeof "foo") // "string"
// // // console.log(typeof Symbol("id")) // "symbol"
// // // console.log(typeof Math) // "object"
// // // console.log(typeof null) // "object"
// // // console.log(typeof alert) // "function"

// // // const onefour = "1" + 4 //"122"
// // // console.log(2 * 2 - "1") //"41"

// // // const str=""

// // // if(str)
// // // {
// // //     console.log('this string is true')
// // // }
// // // else (str) ;{
// // //         console.log('this string is false')
// // //     }


// // // const dog = {
// // //     name : 'Sparticus',
// // //     breed : 'German Shepard',
// // //     color : 'black',
// // //     greeting: function() {
// // //         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
// // //     }
// // // }

// // // const dog2 = {
// // //     name : 'Zeus',
// // //     breed : 'Labrador',
// // //     color : 'gold',
// // //     greeting: function() {
// // //         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
// // //     }
// // // }

// // // console.log (dog)
// // // console.log (dog2)

// // // function 

// // // constructor(newName, newBreed, newColor)
// // // {
// // //     this.name = newName;
// // //     this.breed = newBreed;
// // //     this.color = newColor;

// // //     this.greeting = function() {
// // //         console.log(`Woof, said ${ this.name } the ${ this.breed }.`);
// // //     }
// // // }




// // // function CatConstructor(newName, newBreed, newColor) //constructor
// // // {
// // //     this.name = newName;
// // //     this.breed = newBreed;
// // //     this.color = newColor;

// // //     this.greeting = function() {
// // //         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
// // //     }
// // // }

// // // const elfie = new CatConstructor('Elfie', 'Aphrodite Giant', 'ginger')
// // // elfie.greeting();

// // // class DogClass //class
// // // {
// // //     constructor(newName, newBreed, newColor)
// // //     {
// // //         this.name = newName;
// // //         this.breed = newBreed;
// // //         this.color = newColor;
// // //     }

// // //     greeting() {
// // //         console.log(`Woof, said ${ this.name } the ${ this.breed }.`);
// // //     }
// // // }

// // // const jerry = new DogClass('Jerry', 'German Shepard', 'Black')
// // // jerry.greeting();
// // // class CitizenClass
// // // {
// // //     constructor(citizenName, citizenAge, citizenCountry)
// // //     {
// // //         this.name = citizenName;
// // //         this.age = citizenAge;
// // //         this.country = citizenCountry;
// // //     }

// // //     passport() {
// // //         console.log(`This is ${ this.name } they are ${ this.age } and they are from ${ this.country }.`);
// // //     }

// // // }

// // // const pat = new CitizenClass('Pat', '25', 'Germany')
// // // pat.passport();

// // //function chaining is when you can call functions straight after each other in a chain
// // //to achieve this, each function has to return the right/expected value for the next function to use

// // const basketballGame = {
// //     score: 0,
// //     freeThrow() {
// //         this.score++;
// //         return this;
// //     },
// //     basket() {
// //         this.score += 2;
// //         return this;
// //     },
// //     threePointer() {
// //         this.score += 3;
// //         return this;
// //     },
// //     halfTime() {
// //         console.log('Halftime score is '+this.score);
// //         return this;
// //     },
// //     fullTime() {
// //         console.log('Fulltime final score is '+this.score)
// //         return this;
// //     }
// // }

// // //this is what function chaining looks like, but it won't work yet ...
// // basketballGame.basket().basket().freeThrow().freeThrow().basket().threePointer().threePointer().threePointer().basket().freeThrow().freeThrow().threePointer().halfTime();


// // //if we wanted to have one of these objects for each team what could we do?
// // //copy-paste and rename object; make a shallow clone/copy of the original in a new variable; rewrite as a constructor or class

// // function Team(name) {
// //     this.score = 0;
// //     this.name = name;

// //     this.freeThrow = function() {
// //         this.score++;
// //         return this;
// //     }
// //     this.basket = function() {
// //         this.score += 2;
// //         return this;
// //     }
// //     this.threePointer = function() {
// //         this.score += 3;
// //         return this;
// //     }
// //     this.halfTime = function() {
// //         console.log('Halftime score for '+this.name+' is '+this.score);
// //         return this;
// //     }
// //     this.fullTime = function() {
// //         console.log(`Fulltime final score for ${this.name} is ${this.score}`)
// //         return this;
// //     }    
// // }

// // const bullets = new Team('bullets')
// // bullets.basket().threePointer().basket().freeThrow().basket().halfTime();

// // const celtics = new Team('celtics')
// // celtics.basket().freeThrow().threePointer().basket().basket().basket().halfTime()


// // class TeamClass
// // {
// //     team(name) {
// //         this.score = 0;
// //         this.name = name;
// //     };

// //     freeThrow() {
// //         this.score++;
// //         return this;
// //     };
// //     basket() {
// //         this.score += 2;
// //         return this;
// //     };
// //     threePointer() {
// //         this.score += 3;
// //         return this;
// //     };
// //     halfTime() {
// //         console.log('Halftime score is '+this.score);
// //         return this;
// //     };
// //     fullTime() {
// //         console.log('Fulltime final score is '+this.score)
// //         return this;
// //     }; 
// // }

// // const jazz = new TeamClass('Jazz')
// // jazz.basket().freeThrow().threePointer().basket().basket().basket().halfTime()

// // const bulls = new TeamClass('Bulls')
// // bulls.basket().threePointer().basket().freeThrow().basket().halfTime();

// const n = 3.232
// console.log(n)

// const bigInt = 2324525425345636356356363635632425667262623727276272347537346n
// console.log(bigInt)

// const k = 'mareko\'s string'
// console.log(k)

// const nameAirline = true;
// const ageAirplane = false;
// console.log(nameAirline)
// console.log(ageAirplane)

// const age1 = 22
// let age2 = 21

// console.log(age1 == age2)

// console.log(typeof nameAirline)

// function checkAge (blah){
//     if (blah > 22) {
//         return 'adult';
//     }
//     return 'non-adult';
// }

// let adultStatus = checkAge(29)
// console.log(adultStatus)

// const checkAge3 = (age) => (age > 22) ? 'adult' : 'non-adult'

// adultStatus = checkAge3 (7)
// console.log(adultStatus)

// const user = {name: 'Luka', age:20};
// console.log(user)

// const user2 = Object.create(user);
// console.log('name' in user2);
// user2.age = 21;
// console.log(user2)
// console.log(user2.name)

function User(myName) {
    // this = {}; (implicitly)
    
    // add properties to this
    this.name = myName;
    this.isAdmin = false;
    
    // return this; (implicitly)
    }

const lukaUser = new User('Luka')
const marekoUser = new User ('Mareko')

console.log(lukaUser)
console.log(marekoUser)