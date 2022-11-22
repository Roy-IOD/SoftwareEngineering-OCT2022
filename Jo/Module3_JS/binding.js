//see https://javascript.info/bind

let user = {
    firstName: "John",
    lastName: 'Smith',

    sayHi(msg = '') {
        console.log(`Hello, ${this.firstName} ${this.lastName}! ${msg}`);
    }
};

//we would normally just call the object function like this, which works fine:
user.sayHi() //Hello, John Smith!

//but to reuse this function elsewhere, like in setTimeout, we need to pass in the reference to the sayHi function instead of executing it directly
//when this happens we lose its object context (this)
setTimeout(user.sayHi, 1000); // Hello, undefined undefined!

//how do we keep the context? actually call the function instead of just pass a reference to it, but then we need to wrap that in a function
setTimeout(() => user.sayHi(), 1500) //Hello, John Smith!

//BUT if the user object changed during the delay, line 20 above would print slightly differently after the timeout, which may not be desired:
user = {...user, firstName: 'Jo'} //just a shortcut of taking the original and overriding a single property
//console.log(user)

//To avoid this we can use 'bind' which binds the context into the returned function
let boundUserSayHi = user.sayHi.bind(user)
setTimeout(boundUserSayHi, 2000); // works
//even if we change the user in the meantime...
user = {...user, lastName: 'Jones'}

//and we can still pass regular arguments to the bound function
//boundUserSayHi('extra message')