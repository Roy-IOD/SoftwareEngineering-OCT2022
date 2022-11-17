// const date = Date.now();

// console.log(date)

// const myBirthday = new Date('January 2, 1984');
// const myBirthday2 = new Date('1984-01-02');
// const myBirthday3 = new Date(1984, 00, 02);
// const myBirthday4 = new Date(1984, 01, 02, 4, 30, 0);
// const myBirthday5 = new Date(628021800000);

// console.log(myBirthday)
// console.log(myBirthday2)
// console.log(myBirthday3)
// console.log(myBirthday4)
// console.log(myBirthday5)

// const todaysDate = new Date();

// console.log('Today is ' + todaysDate)

// 2. Intermediate

//1. 
function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(ucFirst("capitalised"));

//2. Truncate the text

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//         str.slice(0, maxlength - 1) + "…" : str;
// }

// truncate("Well, this is a story all about how my life got flip turned upside down!", 15)

// console.log(truncate()) // How do I test this using console.log? 

//3. Array Operations. 

const styles = ["Jazz", "Blues"];
console.log(styles)
styles.push("Rock-n-roll");
console.log(styles)
styles.splice(1, 1, "Classics"); // "your code for finding the middle value should work for any arrays with odd length"
console.log(styles)
styles.shift(0);
console.log(styles)
styles.unshift("Rap", "Reggae");
console.log(styles)

//4. Translate border-left-width to borderLeftWidth

function camelize(str) {

    return str
}
