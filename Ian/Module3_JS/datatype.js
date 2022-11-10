// // const threetwothree = "3" + 2 + 3;

// // console.log(threetwothree)

// function checkAge(age) {
//     if ( age > 18 ) {
//         return "adult" ;
//     }
//     return "non-adult";
// }

// let adultStatus = checkAge(4)
// console.log(adultStatus)

// const checkAge2 = function(age) {
//     if ( age > 18 ) {
//         return "adult" ;
//     }
//     return "non-adult";
// }

// adultStatus = checkAge2(21)
// console.log(adultStatus)

// const checkAge3 = (age) => (age > 18) ? "adult" : "non-adult"

// adultStatus = checkAge3(51)
// console.log(adultStatus)

// const group = {
//     title: "hi",
//     say: function() {console.log(this.title)}
// };

// group.say(); //undefined, non-strict mode

const user = { name: "john};
console.log(user)

const anotherUser = Object.create(user);
console.log(anotherUser)

anotherUser.age - 15;
"name" in anotherUser;

console.log(anotherUser)