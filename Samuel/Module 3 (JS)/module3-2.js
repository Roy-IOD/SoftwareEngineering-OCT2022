
const n = 1.23456;
const number_n = n.toFixed(2)
const object_n = new Number(1.23456).toFixed(2)

console.log(number_n == object_n)


//String-like object
const user = {
    name: 'John',
    toString() {
        return this.name;
    }
};
console.log('Hello ' + user);


//Number like object
const apple = {
    price: 100,
    valueOf() {
        return this.price;
    }
};
console.log(apple*3)


//Decimal Numbers
const billion1 = 1000000000;
const billion2 = 1_000_000_000;
const billion3 = 1e9;

//Hexadecimal
