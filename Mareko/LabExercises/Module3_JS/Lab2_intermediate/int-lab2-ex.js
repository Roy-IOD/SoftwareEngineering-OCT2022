//2.1

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//console.log(ucFirst('europe')); // should return 'Europe'

//2.2

function truncate(str, maxLength) {
    if (str.length > maxLength){
        return str.substring(0, maxLength) + '...';
    }
    
    return str;

}

//console.log(truncate('This is a pulic service announcement', 20))

//2.3

const styles = ["Jazz", "Blues"]; //NORMAL
//console.log(styles);

const stylesA = ["Jazz", "Blues"]; //APPEND
stylesA.push("Rock-n-Roll");
//console.log(stylesA); 

const stylesB = ["Jazz", "Blues", "Rock-n-Roll"];  //Replace middle value
stylesB.splice(1, 1,  "Classics");
//console.log(stylesB);

const stylesC = ["Jazz", "Classics", "Rock-n-Roll"];  //Strip off the first value and show the array
let cutJazz = stylesC.slice(1);
//console.log(cutJazz);

cutJazz.unshift("Rap", "Reggae"); //PREPEND
//console.log(cutJazz);

//or

// const styles0 = ["Jazz", "Blues"]; //NORMAL
// console.log(styles0);

// styles0.push("Rock-n-Roll"); //APPEND
// console.log(styles0); 

// styles0.splice(1, 1,  "Classics"); //Replace middle value
// console.log(styles0);

// let cutJazzA = styles0.slice(1); //Strip off the first value and show the array
// console.log(cutJazzA);

// cutJazzA.unshift("Rap", "Reggae"); //PREPEND
// console.log(cutJazzA);

//2.4

function camelize(str) {
    return str
      .split('-') //removes dashes
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)) //index will leave first word the same, any following words will have their first letter appear and capitilised only ('E), with .slice adding the remainder of the word in lowercase letters ('xample').
      .join(''); //joins words with empty space
  }

//console.log(camelize("border-left-width"))

//2.5

function Calculate(str) {
    this.str = str
    parseInt(str)
}

let calc = new Calculate("3 + 7");

console.log(calc.Calculate); // 10







