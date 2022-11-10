//question 1.2//
console.log(
"" + 1 + 0,
"" - 1 + 0,
true + false,
6 / "3",
"2" * "3",
4 + 5 + "px",
"$" + 4 + 5,
"4" - 2,
"4px" - 2,
" -9 " + 5,
" -9 " - 5,
null + 1,
undefined + 1,
" \t \n" - 2,
)

//question 1.3//
let a = (1);
let b = (2);
console.log(a + b); 

//question 1.4//
console.log(
    5 > 4,
    "apple" > "pineapple",
    "2" > "12",
    undefined == null,
    undefined === null,
    null == "\n0\n",
    null === +"\n0\n",
)

//question 1.5//
if ("0") {
    console.log( 'Hello' );
   }
   
//question 1.6//
let c=12
let d=10
let result = (c + d < 4)?('Below'):('over')
console.log(result)

//question 1.7//
const delay = (func, ms) => {
  return function (string){
    setTimeout(func,ms,string)
  }
}

const hello = ( who )=> console.log('Hello' + who );
const delayHello = delay(hello, 300);
delayHello('world');

//question 1.8//
const obj = {};
function isEmpty(object) {
  for (const thing in object) {
    return false;
  }
  return true;
}
console.log(isEmpty(obj));

//^^this one really made me think XD //

//question 1.10//