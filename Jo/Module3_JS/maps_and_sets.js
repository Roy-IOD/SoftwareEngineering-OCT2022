//how to create a map and put things into it

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '04123123') 
phoneBookABC.set('Barry', '04332211')
phoneBookABC.set('Caroline', '04552211')

const phoneBookDEF = new Map([ //set the values to begin with using an array
    ['David', '04332277'],
    ['Elizabeth', '04776622'],
    ['Fred', '04373737']
])

console.log(phoneBookABC) //why are the phone numbers printed differently? because if a number starts with 0 it's interpreted as octal. have to do them as strings instead
console.log(phoneBookDEF)

//how to iterate over the things in an array

for (let i = 0; i < phoneBookABC.size; i++)
{
    //why can't we use a for loop like this?
    //it doesnt make sense to use numerical indexes in maps, as the keys themselves are the indexes
}

console.log('\nprinting entries in phonebookabc:')
for (let entry of phoneBookABC) //instead we can use a for...of loop to iterate over the map entries (key/value pairs)
{
    console.log(entry)
}

console.log('\nprinting keys in phonebookabc:')

for (let name of phoneBookABC.keys()) //or a for...of loop to iterate over just the keys, then use .get to lookup the value for each key
{
    console.log(`Name: ${name} Phone Number: ${phoneBookABC.get(name)}`)
}

console.log('\nprinting values in phonebookabc:')

for (let phone of phoneBookABC.values()) //or a for...of loop to iterate over each value by itself
{
    console.log(`${phone}`)
}

//can also use forEach
phoneBookABC.forEach(phone => console.log(phone)) //this will iterate over the values in the map

//converting between maps, arrays and objects

//check the type of entries()
console.log(phoneBookABC.entries()) //Map Entries - not an actual Array, but an array-like object

//so to combine our two maps into one big object we could do this:
const phoneBookObject = Object.fromEntries(Array.from(phoneBookABC.entries()).concat(Array.from(phoneBookDEF.entries())));
console.log(phoneBookObject) //now an object, not a map

//or this to merge into one combined map:
const phoneBookObject2 = new Map( [...phoneBookABC.entries()].concat([...phoneBookDEF.entries()]) );
console.log(phoneBookObject2) //both maps merged into a new combined map

//which both turn the map entries objects into arrays, and then join those arrays together, and then make a new object/map from those joined arrays


//SETS
//sets are a lot like maps with the main differences being: 1. they only store values, not key/value pairs, and 2. they only store unique values

//so we can have multiple identical values in a map (eg. adding another person with the same phone number), but a Set will filter this out:
phoneBookDEF.set('Frank', '04332277') //same as David
console.log(phoneBookDEF)

const phoneNumbers = new Set(['04332277', '04332277', '04332277', '04332277', '04332278'])
console.log(phoneNumbers) //only two items since only 2 are unique