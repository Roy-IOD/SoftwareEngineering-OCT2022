// console.log('hello'); console.log('world');

// console.log('hello')
// console.log('world')

// console.log('world'); // This comment follows the statement

// const n = 123;
// const n2 = 12.345

// console.log(n, n2)

// console.log( 1/0 );
// console.log ( -1/0 );
// console.log ( "nfgfgfgfgf" / 2);

// const bigInt = 123456789012345678912345n;

// console.log(bigInt)

// const strDouble = "hello";
// const strSingle = 'hello';
// const strBackticks = `hello, I can embed another ${1 +1}`;

// console.log(strDouble);
// console.log(strSingle);
// console.log (strBackticks);

// const nameFieldChecked = true;
// const ageFieldChecked = false;

// console.log(nameFieldChecked, ageFieldChecked)

// const age = 2;

// console.log(typeof age)

// console.log(Boolean( "" )) //false
// Boolean( 0 ) //false
// Boolean( null ) // false
// Boolean( undefined ) // false
// Boolean( NaN ) // false
// Boolean( "hello" ) //true
// console.log(Boolean( 1 )) //true

// function returnUndefined() {
//     return;
//     }

// console.log(returnUndefined);
// function checkAge(age) {
//   if (age > 18) {
//     return "over 18";
//   }
//   else {return "non adult";}
// }

// console.log(checkAge(55));

// const sayHi = function () {
//   console.log("Hello");
// };

// sayHi()

// sayHi1('David', 'Cook')
// function sayHi1(name, lastName) {
//   console.log(`Hello, ${name} ${lastName}`);
// }

// let sayHi2 = function (name) {
//  console.log( `Hello, ${name}`);
// }
// sayHi2('John');

// const sum = function (a,b) {
//     return a + b;
// }

// const sum2 = (a,b) => a + b;

// console.log (sum(2,3))
// console.log (sum2(2,3))

// const group = {
//     title =hi',
//     say: () => console.log(title)
//     };
//     group.say();

// Traditional anonymous function

//   // 1. Remove the word "function" and place arrow between the argument and opening body bracket
//   (a) => {
//     return a + 100;
//   };

//   // 2. Remove the body braces and word "return" — the return is implied.
//   (a) => a + 100;

//   // 3. Remove the parameter parentheses
//   a => a + 100;

// function num(a, b) {
//     const chuck = 42;
//     return a + b + chuck;
//   };

// (a,b) => {
//     const chuck = 42;
//     return a + b + chuck;
// };

// console.log (num(1,2))

// function bob(a) {
//   return a + 100;
// }

// const bob2 = (a) => a + 100;

// console.log(bob(1));
// console.log(bob2(1));

// const user = {
//   // an object
//   name: "joe", // by key 'name' store value 'joe'
//   age: 20, //by key 'age' store value 20
//   "has a dog": false, //multi word prop name 'has a dog' store value false
// };
// console.log(user);
// console.log(user.name, user.age);

// user.name; //get a prop value of 'name'
// user.name = "Ben"; //set a prop value of 'name'

// console.log(user.name, user.age);

// console.log(user["has a dog"]); //get a prop value of multi word 'has a dog'

// delete user.name; // delete a prop with key of 'name'
// delete user["has a dog"]; //delete a prop with key of 'has a dog'

// console.log(user);

// const funcKey = () => console.log('func as key');
// const user = {
//  [funcKey]: 'I am a value of a function'
// };

// console.log(user[funcKey])

// const obj = {
    // 2: 'I am a value of a number key'
    // };
    
    // const obj = {
    // '2': 'I am a value of a number key'
    // };

    // console.log(obj[2])

// const user = {
//     dfdfs : 'hello'
// };
// console.log( user.dfdfs)

// const user = { name: 'john' };
// const anotherUser = Object.create(user);
// anotherUser.age = 15;
// console.log('name' in anotherUser) //true, anotherUser.name exists

// const user = { name: 'john' };
// const anotherUser = Object.create(user);
// anotherUser.age = 15;
// for ( const key in anotherUser ) {
// console.log( key );
// }

// console.log(user)

// const user = { name : 'john' };
// console.log(user.name)

// const admin = user;
// admin.name = 'Jesse'; // changed by the 'admin' reference
// console.log(user.name); // 'Jesse', changes are seen from the 'user' reference

// const user = {
//     name : 'john',
//     age: 30
//     };
//     const clone = {}; //empty object as place holder, let's copy all user properties into it
//     for ( const key in user ) {
//      clone[key] = user[key];
//     }

//     console.log(clone)
//     console.log(user)

// const box = {
//     weight: '20kg',
//     dimensions: {
//     height: '0cm',
//     width: '10cm',
//      }
//     };
//     const anotherClonedBox = _.cloneDeep(box);
//     box.dimensions === anotherClonedBox.dimensions; 

// const user = {
//     doSomething: function() {
//      console.log("do it");
//      }
//     };
//     const user = {
//     doSomething() { // a shorthand, same as above
//      console.log("do it");
//      }
//     };

// user.doSomething()

// const user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//      console.log(this.name, this.age); // 'this' is the current object
//      }
//     };
//     user.sayHi(); // John

//     console.log(user.name)

// function sayHi() {
//     console.log( this.name ); // 'this' is not bound, but no syntax error
//    }

//    sayHi()

// const user = new User(); 

// function User(name) {
//     // this = {}; (implicitly)
//     // add properties to this
//     this.name = name;
//     this.isAdmin = false;
//     // return this; (implicitly)
//     }

//a Constructor function. Uses a capital letter to start (a convention to differentiate it from a normal function), is called using 'new'
// function User(newName) {
//     //this = {}; (implicitly)
    
//     //add properties to this
//     this.name = newName;
//     this.isAdmin = false;

//     this.changeAdminStatus = function() { this.isAdmin = !this.isAdmin }
    
//     //return this; (implicitly)
// }

// const joUser = new User('jo')
// const royUser = new User('roy')

// console.log('creating new objects using a constructor function:')
// console.log(joUser)
// console.log(royUser)
// royUser.changeAdminStatus()
// console.log(royUser)

class User {
    isAdmin= true;
   constructor(name) {
   this.name = name;
    }
   }
   const user = new User('Jack');
   console.log(user.isAdmin); //true
   console.log(user.name); //Jack
