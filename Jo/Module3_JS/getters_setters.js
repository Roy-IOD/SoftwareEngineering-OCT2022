//see https://javascript.info/property-accessors

let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },    

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }      
};

console.log(user.name)
console.log(user.surname)
console.log(user.fullName)

user.fullName = 'James Smith'

console.log(user.fullName)

for (let key in user) console.log(key); 



let newUser = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  newUser.name = "Pete";
  console.log(newUser.name); // Pete
  
  newUser.name = "Jo"; // Name is too short...


  function UserThree(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }
  
  let john = new UserThree("John", new Date(1992, 6, 1));
  
  console.log( john.birthday ); // birthday is available
  console.log( john.age );      // ...as well as the age