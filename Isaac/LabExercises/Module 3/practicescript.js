//fundamental JS practice//
/*
const person = {
    name : 'Isaac',
    quality : 'Handsome',
    gender : 'man',
    greeting: function() {
        console.log(`Hello, said ${ this.name } the ${ this.quality } ${this.gender}.`);
    }
}

const person2 = {
    name : 'Sam',
    quality : 'Lame',
    color : 'blonde',
    greeting: function() {
        console.log(`Hello, said ${ this.name } the ${ this.quality } ${this.color}.`);
    }
}

console.log(person.greeting());
console.log(person2.greeting());


function personConstructor(newName, newHeight, newWeight) //constructor
{
    this.name = newName;
    this.height = newHeight;
    this.weight = newWeight;

    this.greeting = function() {
        console.log(`Hello, my name is ${ this.name } and i am ${ this.height } centimeters tall and ${ this.weight } kilograms.`);
    }
}

const Isaac = new personConstructor("Isaac", "193", "95")
console.log(Isaac.greeting());


class personClass //class constructor
{
    constructor(newTeam, newPlayer, newCountry)
    {
        this.team = newTeam;
        this.player = newPlayer;
        this.country = newCountry;
    }
    goat() {
        console.log(`The best player in the world is ${ this.player } who plays for ${ this.team } and is from ${ this.country }. `)
    }
}
const messi = new personClass('PSG', 'Lionel Messi', 'Argentina')
console.log(messi.goat());




//intermediate JS practice //

const user = {
    name: ' John' ,
    toString() {
            return this.name;
    }
};
console.log('hello' + user);

const apple = {
    price: 100,
    valueOf() {
        return this.price; 
    }  
};
console.log( apple*3);


const billion1 = 1000000000;
const billion2 = 1_000_000_000;
const billion3 = 1e9;

const microSeconds = 0.000001;
const microSeconds1 = 1e-6;


const fruits = ["Apple","Orange","Pear"];
fruits.pop();
console.log(fruits)

const cars = ["Audi","Tesla","Toyota"];
cars.push("Hyundai");
console.log(cars)

const players = ["Embiid", "Harris", "Maxey"];
players.shift();
console.log(players)

const names = ["John", "Jake", "Jack"];
names.unshift("Jerry");
console.log(names)



const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

*/
  const people = [
    {
        name: "Jane",
        address: {
            street: "12 Lalaland St",
            suburb: "Brisbane"
        },
        company: "Company One"
    },
    {
        name: "John",
        address: {
            street: "123 Somewhere Lane",
            suburb: "Adelaide"
        },
        company: "Company Two"
    },
    {
        name: "Jill",
        address: {
            street: "321 Nowhere Av",
            suburb: "Sydney"
        },
        company: "Company Three"
    }
];
/*
//This function adds a new person to the people object and prints a confirmation message
function addPerson(new_name, new_street, new_suburb, new_company)
{
    people.push({name: new_name, address: {street: new_street, suburb: new_suburb}, company: new_company});
    console.log(people);
    console.log('added '+new_name);
}

//This function adds a new company to the companies object and prints a confirmation message
function addCompany(new_name, new_category, new_start, new_end)
{
    companies.push({name: new_name, category: new_category, start: new_start, end: new_end});
    console.log(companies);
    console.log('added '+new_name)
}

//This function prints and returns how many people exist
function countPeople()
{
    console.log(people.length);
    return people.length;
}

//This function prints and returns how many companies exist
function countCompanies()
{
    console.log(companies.length);
    return companies.length;
}

//This function generates a HTML list of all the people names
function createPeopleList()
{
    let html = '<ul>';

    for (let i = 0; i < people.length; i++)
    {
        html += '<li>' + people[i].name + '</li>';
    }
    html += '</li>';

    return html;
}

//This function generates a HTML list of all the company names
function createCompanyList()
{
    let html = '<ul>';

    for (let i = 0; i < companies.length; i++)
    {
        html += '<li>' + companies[i].name + '</li>';
    }
    html += '</li>'

    return html;
}

//This function changes the company of the given person to the new value and prints a confirmation message
function changeCompany(person_name, new_company)
{
    people.forEach((person) => 
    {
        if (person.name == person_name)
        {
            console.log('Changing company for '+person_name+' from '+person.company+' to '+new_company);
            person.company = new_company;
        }
    })
}
*/

//This function changes the address of the given person to the new value and prints a confirmation message
function changeAddress(person_name, new_street, new_suburb)
{
    people.forEach((person) => 
    {
        if (person.name == person_name)
        {
            new_address = new_street +', '+ new_suburb;
            console.log('Changing address for '+person_name+' from '+person.address.street+ ', ' +person.address.suburb+' to '+new_address);
            person.address.street = new_street;
            person.address.suburb = new_suburb;
         
        }
    })
}
console.log(people)

/*
//This function gets the company category for a given person and prints and returns the category value
function getCompanyCategory(person_name)
{
    let company;
    let category;
    for (let i = 0; i < people.length; i++)
    {
        if (people[i].name == person_name)
        {
            company = people[i].company;
        }
    }
    console.log(person_name+' works at '+company);

    for (let j = 0; j < companies.length; j++)
    {
        if (companies[j].name == company)
        {
            category = companies[j].category;
        }
    }
    console.log(company+' is in the '+category+' category');

    return category;
}

//This function gets the company starting year for a given person and prints and returns the value
function getCompanyStartYear(person_name)
{



}


//This function generates a HTML table to format all of the people
function generatePeopleTable()
{
    let html = '<table>';
    html += '<thead><tr> <th>Name</th> <th>Address</th> <th>Company</th> </tr></thead>';
    for (let i = 0; i < people.length; i++)
    {

    }
    html += '</table>';

    return html;
}

//This function generates a HTML table to format all of the companies
function generateCompanyTable()
{
    let html = '<table>';
    html += '<thead><tr> <th>Name</th> <th>Category</th> <th>Start</th> <th>End</th> </tr></thead>';
    for (let i = 0; i < people.length; i++)
    {

    }
    html += '</table>';

    return html;
}








addPerson('Jo', '44 Forty St', 'Darwin', 'Company Nine');
countPeople();
changeCompany('Jill', 'Company Five');
getCompanyCategory('John');


//Company examples 
addCompany ('76ers', 'Sport', 1876, 2001 );
countCompanies();

*/
changeAddress('John', 'Waterview Drive', 'Lane Cove');

/*

//TODO: Create functions to remove a person; to remove a company; to filter and return all companies in a given category

//This function removes a person depending on index
function removePerson(a) {
    people.splice(a, 1)
    console.log(people)
}
removePerson(2);

//This function removes a company depending on index
function removeCompany(a) {
    companies.splice(a, 1)
    console.log(companies)
}
removeCompany(5);


//This function filters and returns all companies in the Retail Category

*/