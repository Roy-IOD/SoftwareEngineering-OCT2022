const dogs = [
    { name: "Charlie", breed: "Poodle", colour: "white" },
    { name: "Fido", breed: "Labrador", colour: "brown"},
    { name: "Abby", breed: "Border Collie", colour: "black" },
  ];

  
  const owners = [
    {
        name: "Jane",
        address: {
            street: "12 Lalaland St",
            suburb: "Brisbane"
        },
        dogs: "Charlie"
    },

    {
        name: "Ben",
        address: {
            street: "10 Smith St",
            suburb: "Queensland"
        },
        dogs: "Fido"
    },
    
];

function addOwners(new_name, new_street, new_suburb, new_dogs)
{
    owners.push({name: new_name, address: {street: new_street, suburb: new_suburb}, dogs: new_dogs});
    console.log(owners);
    console.log('added '+new_name);
}

function addDogs(new_name, new_breed, new_colour)
{
    dogs.push({name: new_name, breed:new_breed , colour: new_colour});
    console.log(dogs);
    console.log('added '+new_name);
}



function setAge(new_age)
{
    dogs.map(function(dog){
        dog.age = new_age
    })
}


addOwners("Jillian", "18 Northcote st", "Sydney", "Dooby")
addDogs("Dooby", "Bulldog", "Grey and White")

dogs.reverse()
console.log(dogs)