const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Tech", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Tech", start: 2011, end: 2016 },
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
    people.unshift({name: new_name, address: {street: new_street, suburb: new_suburb}, company:new_company});
    console.log(people);
    console.log('inserted '+new_name);
}

//This function adds a new company to the END of the companies object and prints a confirmation message
function addCompany(new_name, new_category, new_start, new_end)
{
    companies.push({name: new_name, category: new_category, start: new_start, end: new_end});
    console.log(companies);
    console.log('added ' +new_name)
}



//This function adds a new company to the BEGINNING of the companies object and prints a confirmation message
function insertCompany(new_name, new_category, new_start, new_end)
{
    companies.unshift({name: new_name, category: new_category, start: new_start, end: new_end});
    console.log(companies);
    console.log('inserted '+new_name);
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
function replaceCompany(old_name, new_name, new_category, new_start, new_end)
{
    let old_company = companies.find((company) => company.name == old_name);
    let old_index = companies.indexOf(old_company);
    let new_company = {name: new_name, category: new_category, start: new_start, end: new_end};
    companies.splice(old_index, 1, new_company);
    console.log(`replaced ${old_name} at index ${old_index} with ${new_name}`)
    return old_company;
}

// console.log(companies);
// replaceCompany("Company Two", 'Company new', 'Arts', 3001, 3002);
// console.log(companies);


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

// countCompanies()


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
// createCompanyList()
// document.getElementById("demo").innerHTML = createPeopleList();
// document.getElementById("demo2").innerHTML = createCompanyList();

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

// changeCompany("Jane", "Bose")
// console.log(people)



// This function changes the address of the given person to the new value and prints a confirmation message
function changeAddress(person_name, new_street, new_suburb)
{
    people.forEach ((person) =>
    {
        if (person.name == person_name)
        {
            console.log(`Changing address for ${person_name} from ${person.address.street} ${person.address.suburb} to ${new_street} ${new_suburb}`);
            
            person.address.street = new_street;
            person.address.suburb = new_suburb;
            
        }

    }
    )
}

// changeAddress("John", "Parra Rd", "Stanmore")
// console.log(people)


//This function adds a new country property to each person (if it didnt exist already) and sets it to the given value
function setCountry(new_country)
{
    people.map(person => person.address.country = new_country)

    //a longer, more complete/readable way of writing the above which does exactly the same thing:
    //people.map(function(person) {
    //    person.address.country = new_country
    //})
}
// setCountry('Australia');
// console.log(people);

//This function adds a new tax_status property to each company (if it didnt exist already) and sets it to the given value
function setTaxStatus(new_tax_status)
{
    // people.map(person => person.tax_status = new_tax_status);

    people.map (function (person){
        person.taxstatus = new_tax_status;
    })
}

// setTaxStatus('tax free');
// console.log(people)

//This function returns the given most recent people (at the end of the array)
function getLatestPeople(latest_number)
{
    //so if latest_number is 2, it will start at end-2 and return the last 2 people
    let startFrom = people.length - latest_number;
    return people.slice(startFrom, people.length)
}

// console.log(getLatestPeople(2))

//This function returns the given most recent companies (at the end of the array)
function getLatestCompanies(latest_number)
{
    let startFrom = companies.length - latest_number;
    return companies.slice (startFrom, companies.length)
}

// console.log(companies);
// console.log(getLatestCompanies(3));


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
    console.log(company+' is in the '+found_category+' category ');

    return category;
}

// getCompanyCategory("Jane")

//This function gets the company starting year for a given person and prints and returns the value
function getCompanyStartYear(person_name)
{
    for (let i = 0; i < people.length; i++)
    {
        if (people[i].name == person_name)
        {
            company = people[i].company;
        } 
    }
    console.log(person_name+' works at '+company);

    // for (let j = 0; j < companies.length; j++)
    // {
    //     if (companies[j].name == company)
    //     {
    //         start = companies[j].start;
    //     }
    // } 
    // console.log(company+ ' started in ' + start);

    let compamy_object = companies.find(comp => comp.name == company)
    let found_category= compamy_object.start

    console.log(company+ ' started in ' +found_category)
}

// getCompanyStartYear("Jane")


//This function returns all companies in a given category
function getMatchingCompanies(category_name)
{
    
    return companies.filter(company => company.category == category_name);
    

    // // a longer way of writing the exact same thing without arrow functions:
    // return companies.filter(function(company) {
    //    if (company.category == category_name)
    //    {
    //        return true
    //    }
    //    else
    //    {
    //        return false
    //    }
    // })
}

// console.log(getMatchingCompanies("Finance"))

//This function returns all people in a given suburb
function getMatchingPeople(suburb_name)
{
    return people.filter(company => company.address.suburb == suburb_name);
}
// console.log(getMatchingPeople("Brisbane"))
console.log(getMatchingPeople("Adelaide"))


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

// addPerson('Jo', '44 Forty St', 'Darwin', 'Company Nine');
// insertPerson("David", "Parra Rd", "Stanmore", "FR");
// addCompany("company 10", "repair", 1900, 2001);
// console.log(companies)
// insertCompany("company 0", "retail", 1954, 2065);

// countPeople();
// changeCompany('Jill', 'Company Five');
// getCompanyCategory('John');
// console.log(people);
// replacePerson('John', 'Andrew', '55 Fifty St', 'Nowhere', 'Company Seven');
// console.log(people);
// setCountry('Australia')
// console.log(people)

