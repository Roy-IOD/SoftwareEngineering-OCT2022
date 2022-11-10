// console.log('hello'); console.log('world');

// console.log('hello')
// console.log('world')



// console.log(typeof undefined) // "undefined"
// console.log(typeof 0) // "number"
// console.log(typeof 10n) // "bigint"
// console.log(typeof true) // "boolean"
// console.log(typeof "foo") // "string"
// console.log(typeof Symbol("id")) // "symbol"
// console.log(typeof Math) // "object"
// console.log(typeof null) // "object"
// console.log(typeof console.log) // "function"


// console.log("1" + 2 + 2) //"122"
// console.log(2 + 2 + "1") //"41"
// console.log("1" * 3 +2)
// console.log (6 / "3")
// console.log (6 * "3")
// console.log ("6" * "3")
// console.log ("6" * 3)
// console.log ("6" + 3)
// console.log ("hi" - 3)


function checkAge(age) {
    if ( age > 18 ) {
    return 'adult';
    
    }
    return 'non-adult';
}

let adultStatus = checkAge(4)

console.log(adultStatus)

const checkAge2 = function(age){
    if ( age > 18 ) {
        return 'adult';
        
        }
        return 'non-adult';
}

adultStatus = checkAge2(57)
console.log(adultStatus)

const checkAge3 = (age) => (age > 18) ? 'adult' : 'non-adult'

adultStatus = checkAge3(77)
console.log(adultStatus)

const group = {
    title: 'hi',
    say: () => console.log(this.title)
    };
    
    group.say(); // undefined, non-strict mode

    const group = {
        title: 'hi',
        say: () => console.log(this.title)
        };
        
        group.say(); // undefined, non-strict mode


const user = { name: 'john' };
const anotherUser = Object.create(user);
anotherUser.age = 15;
        'name' in anotherUser; //true, anotherUser.name exists        