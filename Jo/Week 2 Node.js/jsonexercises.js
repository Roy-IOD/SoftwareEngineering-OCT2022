const user = {
    "first_name" : "Sammy",
    "last_name" : "Shark",
    "age" : 25,
    "followers" : 987,
    "address" : {
        "street_name" : "123 Test St",
        "suburb" : "Brisbane",
        "state": "Qld"
    }
}

console.log(user)
console.log(user.first_name);
console.log(user.age)
console.log(user.address)

console.log(user["last_name"]);
console.log(user["followers"])

//this is an array of objects
const books = [
    {
        "title" : "Anne of Green Gables",
        "author" : "LM Montgomery",
        "description" : "Anne is a young orphan who is adopted by an older couple on PE Island",
        "number_pages" : 180
    },
    {
        "title" : "Matilda",
        "author" : "Roald Dahl",
        "description" : "Matilda is a young girl who discovers she has telepathic powers",
        "number_pages" : 163
    }    
]

//so to access the individual properties of each object you have to say which item in the array using the index
console.log(books)
console.log(books[0].title)
console.log(books[1].title)

//this is a single object
const book = {
    "title" : "The Lion, The Witch and The Wardrobe",
    "author" : "CS Lewis",
    "description" : "Four English children discover a secret magical world inside their uncle's wardrobe",
    "number_pages" : 124    
}

//so we can access its properties directly
console.log(book)
console.log(book.title)