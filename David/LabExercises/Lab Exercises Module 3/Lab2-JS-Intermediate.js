// 2. Intermediate

// 1

function ucFirst(str) {
    
    return str.charAt(0).toUpperCase() + str.slice(1);

}

console.log(ucFirst('david'))

//2

function truncate(str, maxlength) {
    return str.length 
}

//3

const styles = [
    {style : 'Jazz'},
    {style : 'Blues'}
]
console.log(styles)

styles.push ({style: "Rock n Roll"})
console.log(styles)

styles.splice (1,1, {style : 'Classics'})
console.log(styles)

styles.shift(styles)
console.log(styles)

styles.unshift({style: 'Rap'}, {style: 'Reggae'})
console.log(styles)

// 4 

function camelize(str) {
    //search for and remove '-' split function?
    
    return str = str.split("-")

    //put back together and capitalise
}
console.log(camelize("background-color"))

//5 