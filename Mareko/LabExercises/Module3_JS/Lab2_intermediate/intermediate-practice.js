const billion1 = 1000000000;
const billion2 = 1_000_000_000;
const billion3 = 1e9;

//console.log(billion1 === billion2 === billion3)

let point1 = 0.2
let point2 = 0.1

let fixedpoint1 = point1.toFixed(2);
let fixedpoint2 = point2.toFixed(2);

const top4 = ['Arsenal', 'Manchester City', 'Newcastle', 'Tottenham Hotspurs'];
top4.pop();
console.log(top4)
console.log(top4.pop)

const top4a = ['Arsenal', 'Manchester City', 'Newcastle'];
top4a.push('Tottenham Hotspurs');
console.log(top4a)
console.log(top4a.push)