const billion1 = 1000000000;
const billion2 = 1_000_000_000;
const billion3 = 1e9;

//console.log(billion1 === billion2 === billion3)

let point1 = 0.2
let point2 = 0.1

let fixedpoint1 = point1.toFixed(2);
let fixedpoint2 = point2.toFixed(2);

const top4 = ['Arsenal', 'Manchester City', 'Newcastle', 'Tottenham Hotspurs'];
top4.pop();
//console.log(top4)
//console.log(top4.pop)

const top4a = ['Arsenal', 'Manchester City', 'Newcastle'];
top4a.push('Tottenham Hotspurs');
//console.log(top4a)
//console.log(top4a.push)



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

//This function adds a new person to the people object and prints a confirmation message
function addPerson(new_name, new_street, new_suburb, new_company)
{
    people.push({name: new_name, address: {street: new_street, suburb: new_suburb}, company: new_company});
    //console.log(people);
    //console.log('added '+new_name);
}

addPerson('Luka', '12 Tui Cres', 'Manurewa', 'Company Three')

//This function adds a new company to the companies object and prints a confirmation message
function addCompany(new_name, new_category, new_start, new_end)
{
    companies.push({name: new_name, category: new_category, start: new_start, end: new_end})
    //console.log(companies)
    //console.log(new_name+' has been added to the directory')
}

//addCompany('Company Ten', 'Healthcare', 2001, 2021)

//This function prints and returns how many people exist
function countPeople()
{
    console.log(people.length);
    return people.length;
}

//countPeople()

//This function prints and returns how many companies exist
function countCompanies()
{
    console.log(companies.length+' companies are available to search from')
    return companies.length
}

//countCompanies()

//This function changes the company of the given person to the new value and prints a confirmation message
function changeCompany(person_name, new_company)
{
    people.forEach((person) => 
    {
        if (person.name == person_name)
        {
            //console.log('Changing company for '+person_name+' from '+person.company+' to '+new_company);
            person.company = new_company;
            //console.log(people)
        }
    })
}

//changeCompany('Luka', 'Company Ten')

//This function changes the address of the given person to the new value and prints a confirmation message
function changeAddress(person_name, new_street, new_suburb)
{   
    people.forEach((person) =>
    {
        if (person.name == person_name)
        {
            console.log('Changing the address for '+person_name+' from '+person.address.street+', '+person.address.suburb+' to '+new_street+', '+new_suburb);
            person.address.street= new_street;
            person.address.suburb = new_suburb;
            //console.log(people)
            //person.address == new_address({new_street, new_suburb});
        }
    })
}

//changeAddress('Luka', '123 Fake Street', 'Auckland')


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

//getCompanyCategory('Luka')

//This function gets the company starting year for a given person and prints and returns the value
function getCompanyStartYear(person_name)
{
    let company;
    let start;
    let end;
    for (let m = 0; m < people.length; m++)
    {
        if (people[m].name == person_name)
        {
            company = people[m].company;
        }
    }
    console.log(person_name+' works at '+company);

    for (let n = 0; n < companies.length; n++)
    {
        if (companies[n].name == company)
        {
            start = companies[n].start;
            end = companies[n].end;
        }
    }
    console.log(company+' began operating in '+start+' and ceased operations in '+end+' due the COVID-19 pandemic.');

    //return start;

}

//getCompanyStartYear('Luka')

const today = new Date()
const birthday = new Date('December 17, 1995 03:24:00') // DISCOURAGED: may not work in all runtimes

const birthday2 = new Date('2001-10-15')   // This is ISO8601-compliant and will work reliably
const birthday3 = new Date(2001, 10, 15)            // the month is 0-indexed
const birthday5 = new Date(628021800000)            // passing epoch timestamp

console.log(today)
console.log(birthday2)


const ageTest = (today.getFullYear() - birthday2.getFullYear())
console.log('Mareko is ' + ageTest +' years old')