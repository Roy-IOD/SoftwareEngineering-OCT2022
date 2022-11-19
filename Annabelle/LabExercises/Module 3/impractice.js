let point1 = 0.1
let point2 = 0.2
console.log(point1+point2)

let fpoint1 = point1.toFixed(2)

console.log(fpoint1)

console.log(parseInt('100px'));// 100
console.log(parseInt('12.5em'));// 12.5
console.log(parseFloat('12.3.4')); //12.3
console.log(parseInt('a123')); // NaN


const dogs = ["Border collie", "Golden Retriever", "Poodle"]
let lastdog=dogs.pop()
dogs.pop();
console.log(dogs)
dogs.push(lastdog);
console.log(dogs)