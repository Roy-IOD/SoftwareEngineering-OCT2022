// const n = 1.23456;
// n.toFixed(2) ; // 1.23, an object wrapper for number with method `toFixed()`
// const str = 'hello world';
// str.toUpperCase() === (new String(str)).toUpperCase(); 

// console.log(n.toFixed(2))

// const user = {
//     name: 'John',
//     toString() {
//     return this.name;
//      }
//      };
//     console.log( 'hello ' + user); // hello John


//     const billion1 = 1000000000;
//     const billion2 = 1_000_000_000;
//     const billion3 = 1e9;

//     console.log (billion1 === billion3)

//     console.log(parseInt('100px'));// 100
//     console.log(parseInt('12.5em'));// 12.5
//     console.log(parseFloat('12.3.4')); //12.3
//     console.log(parseFloat('a123')); // NaN

//     const guestList = "Guests:\n * John\n * Pete\n * Mary";

//     console.log(guestList); // a multiline list of guests

// const fruits = ["Apple", "Orange", "Pear"];
// let lastFruit = fruits.pop(); // remove "Pear"
// console.log(lastFruit)
// console.log ( fruits ); // Apple, Orange
// fruits.push(lastFruit)
// console.log ( fruits )

// let firstFruit = fruits.shift()
// console.log(firstFruit)
// console.log(fruits)
// fruits.unshift(firstFruit)
// console.log(fruits)

// const teams = ["suns", "hornets", "bulls", "spurs"]

// let lastTeam = teams.pop()
// console.log(lastTeam)
// console.log(teams)
// teams.push(lastTeam)
// console.log(teams)

// let firstTeam = teams.shift()
// console.log(firstTeam)
// console.log(teams)
// teams.unshift(firstTeam)
// console.log(teams)

// const fruits = ["Apple", "Orange", "Pear"];
// fruits.shift() ; // remove Apple
// console.log( fruits ); // Orange, Pear

// fruits.unshift("Mandarin");
// console.log( fruits );

// const map = new Map();
// map.set('1', 'str1'); // a string key
// map.set(1, 'num1'); // a numeric key
// map.set(true, 'bool1'); // a boolean key
// map.set({ name: "John" }, 123) // an object key
// alert( map.get(1) ); // 'num1'
// alert( map.get('1') ); // 'str1'
// alert( map.size ); // 4

// console.log(map)

// const today = new Date()
// const birthday = new Date('December 17, 1995 03:24:00') // DISCOURAGED: may not work in all runtimes
// const birthday2 = new Date('1995-12-17T03:24:00')   // This is ISO8601-compliant and will work reliably
// const birthday3 = new Date(1995, 11, 17)            // the month is 0-indexed
// const birthday4 = new Date(1995, 11, 17, 3, 24, 0)
// const birthday5 = new Date(628021800000)            // passing epoch timestamp


// const date = new Date("2022-07-01");


// console.log(date)


// const today = new Date();

// const todaysDate = new Date();
// const birthday = new Date('1983-07-01');
// const myAge = todaysDate - birthday;

// console.log(todaysDate)
// console.log(birthday)



// console.log(myAge)

const user = {
    sayHi() { console.log("Hello");},
     [Symbol("id")]: 123,
    something: undefined
    };
    
    
    let jsonString = JSON.stringify(user, function(key, value) {
        console.log(key)
        console.log(value)
    if( typeof value === 'function') {
    return value.toString();
     }
    if( typeof value === 'undefined' ) {
    return ''; // convert undefined value to empty string
     }
    return value;
    });

    console.log (jsonString);
    console.log(JSON.stringify(user))


