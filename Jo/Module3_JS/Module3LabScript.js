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

//This function adds a new person to the END of the people object and prints a confirmation message
function addPerson(new_name, new_street, new_suburb, new_company)
{
    people.push({name: new_name, address: {street: new_street, suburb: new_suburb}, company: new_company});
    console.log(people);
    console.log('added '+new_name);
}

//This function adds a new person to the BEGINNING of the people object and prints a confirmation message
function insertPerson(new_name, new_street, new_suburb, new_company)
{
}

//This function adds a new company to the END of the companies object and prints a confirmation message
function addCompany(new_name, new_category, new_start, new_end)
{

}

//This function adds a new company to the BEGINNING of the companies object and prints a confirmation message
function insertCompany(new_name, new_category, new_start, new_end)
{

}

//This function replaces an existing person with a new person object created from new values, returns the replaced person, and prints a confirmation message
function replacePerson(old_name, new_name, new_street, new_suburb, new_company)
{
    //first get the full person details for old_name
    let old_person = people.find((person) => person.name == old_name) //this arrow function goes through each element in the people array and returns the first one that matches the equals test

    //now use that object to find the index in the people array of that person (for splicing)
    let old_index = people.indexOf(old_person);

    //create a new object for the new person
    let new_person = {name: new_name, address: {street: new_street, suburb: new_suburb}, company: new_company}

    //starting at the index of the old person, insert/replace the new one
    people.splice(old_index, 1, new_person) 

    console.log(`Replaced ${old_name} at index ${old_index} with ${new_name}`)

    return old_person;
}

//This function replaces an existing company with a new company object created from new values, returns the replaced company, and prints a confirmation message
function replaceCompany(old_name, new_category, new_start, new_end)
{
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

//This function changes the address of the given person to the new value and prints a confirmation message
function changeAddress(person_name, new_street, new_suburb)
{

}

//This function adds a new country property to each person (if it didnt exist already) and sets it to the given value
function setCountry(new_country)
{
    people.map(person => person.address.country = new_country)

    //a longer, more complete/readable way of writing the above which does exactly the same thing:
    //people.map(function(person) {
    //    person.address.country = new_country
    //})
}

//This function adds a new tax_status property to each company (if it didnt exist already) and sets it to the given value
function setTaxStatus(new_tax_status)
{

}

//This function returns the given most recent people (at the end of the array)
function getLatestPeople(latest_number)
{
    //so if latest_number is 2, it will start at end-2 and return the last 2 people
    let startFrom = people.length - latest_number;
    return people.slice(startFrom, people.length)

    //you could also do :
    //return people.slice(latest_numer*-1) //since passing in a negative number will start from the end and work backwards
}

//This function returns the given most recent companies (at the end of the array)
function getLatestCompanies(latest_number)
{
}

//This function gets the company category for a given person and prints and returns the category value
function getCompanyCategory(person_name)
{
    let company;
    let category;
    //first find the right company name for the given person
    for (let i = 0; i < people.length; i++)
    {
        if (people[i].name == person_name)
        {
            company = people[i].company;
        }
    }
    console.log(person_name+' works at '+company);

    //then use that company name to find the matching category
    for (let j = 0; j < companies.length; j++)
    {
        if (companies[j].name == company)
        {
            category = companies[j].category;
        }
    }

    //since we're trying to 'find' the right company, a better way than the above for loop could be to use find:
    let company_object = companies.find(comp => comp.name == company) //super short function that just returns true if the company name matches
    let found_category = company_object.category

    console.log(company+' is in the '+category+' ('+found_category+') category ');

    return category;
}

//This function gets the company starting year for a given person and prints and returns the value
function getCompanyStartYear(person_name)
{
}


//This function returns all companies in a given category
function getMatchingCompanies(category_name)
{
    return companies.filter(company => company.category == category_name)

    //a longer way of writing the exact same thing without arrow functions:
    //return companies.filter(function(company) {
    //    if (company.category == category_name)
    //    {
    //        return true
    //    }
    //    else
    //    {
    //        return false
    //    }
    //})
}

//This function returns all people in a given suburb
function getMatchingPeople(suburb_name)
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


//TODO: Create functions to remove a person; to remove a company; to filter and return all companies that started after a certain year

//examples of how to call and test the above functions
addPerson('Jo', '44 Forty St', 'Darwin', 'Company Nine');
countPeople();
changeCompany('Jill', 'Company Five');
getCompanyCategory('John');

replacePerson('John', 'Andrew', '55 Fifty St', 'Nowhere', 'Company Seven')
setCountry('Australia')
console.log(people)