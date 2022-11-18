
//INTERMEDIATE EXCERCISES

//1.

function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1)
  }
  
console.log(ucFirst("john"));
console.log(ucFirst("steve"));


//2.

function truncate(str,maxlength){
    if (str.length > maxlength){
    return str.slice(0,maxlength -1) + '...'
    } else {
    return str}
}

console.log(truncate("Does this work properly, I wonder", 20))
console.log(truncate("Hello",20))

//3.1


const styles = ["Jazz", "Blues"]
console.log(styles)

//3.2

styles.push("Rock-n-Roll")
console.log(styles)

//3.3
styles[Math.floor((styles.length -1) / 2)] = "Classics";
console.log(styles)

//3.4
styles.shift()
console.log(styles)


//3.5
styles.unshift("Rap", "Reggae")
console.log(styles)


//4.

function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

  console.log(camelize("background-color"))

