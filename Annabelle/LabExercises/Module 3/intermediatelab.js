var todaysDate= new Date()
var bday = new Date('2002-08-16')
console.log('I am'+ (todaysDate.getFullYear()-bday.getFullYear())+' years old')

//2.1
function capitaliseWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log(capitaliseWord('hello')); 

//2.2
function truncate(str,maxlength){
    if (str.length<=maxlength){
        return str
    }
    return str.slice(0,maxlength) + '...'
}
console.log(truncate('hello there my name is annabelle',10))
//2.3

let styles = ['jazz','blues']
styles.push('rock and roll')
console.log(styles)
var index = styles.indexOf('blues');

if (index !== -1) {
    styles[index] = 'classic';
}
console.log(styles)
console.log(styles.shift())
styles.unshift('rap','reggae')
console.log(styles)
//2.4

function camelize(str){
    str.split('-')
    str.join('')
}
console.log(camelize('hello-world'))
//2.5
function calculator(){
    
}
//2.6