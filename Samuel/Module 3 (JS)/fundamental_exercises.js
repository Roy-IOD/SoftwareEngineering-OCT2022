//const prompt = require("prompt-sync")();
//copy the above line and run 'npm init' (accept all defaults) and then 'npm install prompt-sync' to get the prompt function working in node.js

//different types of numbers
console.log('\n1. Different type of numbers:')
console.log('-----------------------------\n')

console.log( 1/0 ); // Infinity
console.log( -1/0 ); // -Infinity
console.log( "not a number" / 2 ); //NaN, such division is erroneous


//different types of strings and quotes
console.log('\n2. Strings and quotes:')
console.log('-----------------------------\n')

const singleQuotes = '"jo" is my name'; //can contain double quotes, but have to escape apostrophes with a backslash: \'
const doubleQuotes = "jo's name is jo: ${singleQuotes}" //can contain apostrophes, but not other variables, and have to escape double quotes with \"
const backTicks = `this string contains a double quote " and an apostrophe ' and my other string: ${singleQuotes}`

console.log(singleQuotes)
console.log(doubleQuotes)
console.log(backTicks)


//variable types
console.log('\n3. Null, undefined and typeof:')
console.log('-----------------------------\n')

let nullAge = null;
let undefinedAge;

console.log(nullAge) //null
console.log(undefinedAge) //undefined

console.log('is nullAge equivalent to undefinedAge? ' + (nullAge == undefinedAge))
console.log('is nullAge strictly equal to undefinedAge? ' + (nullAge === undefinedAge))

console.log('typeof singleQuotes is ' + typeof singleQuotes)

console.log('typeof nullAge is '+ typeof nullAge)

nullAge = 6

console.log('typeof nullAge after re-assigning value is ' + typeof nullAge)

console.log(typeof undefined) // "undefined"
console.log(typeof 0) // "number"
console.log(typeof 10n) // "bigint"
console.log(typeof true) // "boolean"
console.log(typeof "foo") // "string"
console.log(typeof Symbol("id")) // "symbol"
console.log(typeof Math) // "object"
console.log(typeof null) // "object"
console.log(typeof console.log) // "function"

const onetwotwo = "1" + 2 + 2;
const twotwoone = 2 + 2 + "1"

console.log('"1" + 2 + 2 + = ' +onetwotwo + ' which is type '+ typeof onetwotwo + '. After parsing as int: '+typeof parseInt(onetwotwo))
console.log('2 + 2 + "1" = ' +twotwoone + ' which is type '+ typeof twotwoone + '. After parsing as int: '+typeof parseInt(twotwoone))

console.log('\nThese math operations involve at least one string but still calculate correctly:')
console.log(5 / "2") //2.5
console.log("5" / 2) //2.5
console.log("5" / "2") //2.5
console.log("5" * "2") //10

const div10 = onetwotwo / 10
console.log(div10) // 122 / 10 = 12.2
console.log(typeof div10)


//different types of ifs
console.log('\n4. Different styles of IF statement:')
console.log('-----------------------------\n')

//full longhand way of writing an if - useful if the if and/or else block contains multiple statements
if (typeof onetwotwo == "string")
{
    console.log(onetwotwo + ' is a string!')
}
else 
{
    console.log(onetwotwo + ' is not a string')
}

//shorthand way of writing an if - useful for simple single-statement logic
(typeof twotwoone == "string") ? console.log(twotwoone + ' is a string (shorthand)') : console.log(twotwoone + ' is not a string (shorthand)')

//even shorter ...
console.log((typeof twotwoone == "string") ? twotwoone + ' is a string (shorthand #2)' : twotwoone + ' is not a string (shorthand #2)')


//different types of function definitions
console.log('\n5. Different styles of function definition:')
console.log('-----------------------------\n')

let adultStatus = checkAge(4)
console.log(adultStatus)

//standard, original function definition. can be 'hoisted' ie. called BEFORE it is defined
function checkAge(age) {

    console.log(checkAge.arguments) //supports the functionname.arguments property
    if ( age > 18 ) {
        return age + ' is an adult';
    
    }
    return age + ' is a non-adult';
}

//function expression - cannot be hoisted (neither can any other variable declared using const or let)
const checkAge2 = function(age) {
    if ( age > 18 ) {
        return age + ' is an adult';
    
    }
    return age + ' is a non-adult';
}

adultStatus = checkAge2(21)
console.log(adultStatus)

//arrow function - newer ES6 syntax. cannot be hoisted, will automatically return the calculated value after the =>
const checkAge3 = (age) => (age > 18) ? age + ' is an adult' : age + ' is a non-adult'

adultStatus = checkAge3(51)
console.log(adultStatus)


console.log('\n6. Object syntax and memory referencing:')
console.log('-----------------------------\n')

//'group' is an object with three properties: title, and two versions of the say function
const group = {
    title: 'hi',
    sayArrow: () => console.log(this.title),
    sayFunction: function() { console.log(this.title) }
};
    
group.sayArrow(); // undefined. Because arrow functions can't use 'this'
group.sayFunction(); // 'hi'. Because function expressions/definitions can use 'this'

const userObj = { name: 'john' };
const userObjDupe = userObj; //both userObj and userObj2 now point to the same place in memory

userObj.name = 'fred'
console.log(userObj) //so changing one of them will change both
console.log(userObjDupe) //so changing one of them will change both

userObjDupe.name = 'charlie'
console.log(userObj) //so changing one of them will change both
console.log(userObjDupe) //so changing one of them will change both

const anotherUser = Object.create(userObj); //this creates a new object based on the original
const spreadUser = {...userObj}; //this creates a shallow copy of the userObj object, so spreadUser points to a different place in memory

userObj.name = 'jane'
console.log('userObjDupe name changes to whatever userObj name is: '+userObjDupe.name) //since they both point to the same memory location
console.log('anotherUser name still references the original at this point: '+anotherUser.name) //Object.create means anotherUser references userObj, but only until it has its own specific values set
console.log('spreadUser name is independent: '+spreadUser.name) //spreadUser is completely independent, since they reference different memory locations

anotherUser.age = 15;
anotherUser.name = 'paul' //now anotherUser has its own reference to name, so won't be affected by changes to the parent userObj
console.log('name' in anotherUser); //true, anotherUser.name exists since it was created from userObj

for ( const key in anotherUser ) { //type of for loop that iterates over object properties
    console.log( 'anotherUser contains '+key+' with value '+anotherUser[key] ); // age, name
}
console.log(userObj) //but userObj is still jane, not paul
userObj.name = 'frank' //and changing it will affect userObjDupe but not anotherUser or spreadUser

console.log(userObj)
console.log(userObjDupe)
console.log(anotherUser)
console.log(spreadUser)

//functions inside objects
const user = {
    name: 'jo',
    age: 25,
    doSomething: function() {
        console.log("do it");
    }
};

//functions inside objects
const user2 = {
    doSomething() { // a shorthand, same as above
        console.log("do it again");
    }
};    

user.doSomething()
user2.doSomething()


console.log('\n7. Classes vs. objects:')
console.log('-----------------------------\n')

//a Constructor function. Uses a capital letter to start (a convention to differentiate it from a normal function), is called using 'new'
function User(newName) {
    //this = {}; (implicitly)
    
    //add properties to this
    this.name = newName;
    this.isAdmin = false;

    this.changeAdminStatus = function() { this.isAdmin = !this.isAdmin }
    
    //return this; (implicitly)
}

const joUser = new User('jo')
const royUser = new User('roy')

console.log('creating new objects using a constructor function:')
console.log(joUser)
console.log(royUser)
royUser.changeAdminStatus()
console.log(royUser)

//using the 'class' keyword (new to javascript in ES6), does the same thing as Constructor function above, using different syntax similar to classes in other languages
class ClassUser {
    isAdmin = true;

    constructor(myName) {
        this.name = myName;
    }

    changeAdminStatus() {
        this.isAdmin = !this.isAdmin //changes the value of isAdmin to the opposite of what it previously was using the not operator '!'
    }
}

console.log('creating new objects using a class:')
const joUserClass = new ClassUser('jo')
const royUserClass = new ClassUser('roy')

console.log(joUserClass)
joUserClass.changeAdminStatus()

console.log(joUserClass)
console.log(royUserClass)


console.log('\n8. More examples of classes vs. objects:')
console.log('-----------------------------\n')

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors


//first way of making a 'class' - as a function with an internal object 'obj'
function createPerson(name) {
    const obj = {};
    obj.name = name;

    obj.introduceSelf = function () {
      console.log(`Hi! I'm a function printing ${this.name}.`);
    };
    return obj;
}

//second way of making a 'class' - with a constructor function (don't need the internal object)
function PersonConstructor(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm a constructor printing ${this.name}.`);
    };
}

//third way of making a class - using the class keyword
class PersonClass {

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi! I'm a class printing ${this.name}.`);
    }

}

const functionPerson = createPerson('amy') //no new keyword here since it's really just a function we're calling
functionPerson.introduceSelf()

const constructorPerson = new PersonConstructor('jake') //uses the new keyword to create a new instance of the 'class' using the constructor
constructorPerson.introduceSelf()

const classPerson = new PersonClass('terry') //uses the new keyword to create a new instance of the class, uses the internal constructor method
classPerson.introduceSelf()


//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics

const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
        console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
}

const cat2 = {
    name : 'Elfie',
    breed : 'Aphrodite Giant',
    color : 'ginger',
    greeting: function() {
        console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
}

//cat.greeting();
//cat2.greeting();

//instead of having 2 very similar cat objects (above), both with the same greeting function, we can rewrite it more efficiently with a constructor or a class:

function CatConstructor(newName, newBreed, newColor) //constructor
{
    this.name = newName;
    this.breed = newBreed;
    this.color = newColor;

    this.greeting = function() {
        console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
}

const elfie = new CatConstructor('Elfie', 'Aphrodite Giant', 'ginger')
elfie.greeting();

class CatClass //class
{
    constructor(newName, newBreed, newColor)
    {
        this.name = newName;
        this.breed = newBreed;
        this.color = newColor;
    }

    greeting() {
        console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
}

const bertie = new CatClass('Bertie', 'Cymric', 'white')
bertie.greeting();