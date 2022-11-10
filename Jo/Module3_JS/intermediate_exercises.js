let point2 = 0.2
let point1 = 0.1

console.log(point1 + point2 == 0.3)

let fixedpoint1 = Number.parseFloat(point1).toFixed(2);
let fixedpoint2 = Number.parseFloat(point2).toFixed(2);

console.log( fixedpoint1 + fixedpoint2)

console.log(point1*100 + point2*100 == 0.3*100)