const companies = [ 
    { name: "Company One", category: "Retail", start: 1981, end: 2004 },
    { name: "Company Two", category: "Finance", start: 2005, end: 2007 },
    { name: "Company Three", category: "Technology", start: 2007, end: 2014 },
    { name: "Company Four", category: "Healthcare", start: 2014, end: 2019 },
    { name: "Company Five", category: "Agriculture", start: 2019, end: 2023 },

];

const people = [
    {
        name: "Jane",
        address: {
            street: "72 MacDonald Street",
            suburb: "Erskineville",
            state: "NSW"
        },
        company: "Company One"
    },
    {
        name: "Brian",
        address: {
            street: "23 Brumby Street",
            suburb: "Surry Hills",
            state: "NSW"
        },
        company: "Company Two"
    },
    {
        name: "Sally",
        address: {
            street: "77 Kumala Road",
            suburb: "Bayswater",
            state: "VIC"
        },
        company: "Company Three"
    }
];

//This function adds a new person to the END of the people object and prints a confirmation message
function addPerson(new_name, new_street, new_suburb, new_state, new_company)
{
    people.push({name: new_name, address: {street: new_street, suburb: new_suburb, state: new_state}, company: new_company});
    console.log(people);
    console.log('Added '+new_name);
}

//This function prints and returns how many people exist
function countPeople()
{
    console.log('Number of people: '+people.length);
    return people.length;
}

addPerson('Ian', '123 Fake Street', 'Hoylake', 'Wirral', 'Catalyst Medical Recruitment');
countPeople();