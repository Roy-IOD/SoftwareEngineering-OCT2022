// const dog = {
//     name : 'Charlie',
//     breed : 'Labradoodle',
//     color : 'chalk',
//     greeting: function() {
//         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
// }

// const dog2 = {
//     name : 'Vinnie',
//     breed : 'Spoodle',
//     color : 'tan',
//     greeting: function() {
//         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
// }

// //dog.greeting();
// //dog2.greeting();

// //instead of having 2 very similar cat objects (above), both with the same greeting function, we can rewrite it more efficiently with a constructor or a class:

// function DogConstructor(newName, newBreed, newColor) //constructor
// {
//     this.name = newName;
//     this.breed = newBreed;
//     this.color = newColor;

//     this.greeting = function() {
//         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
// }

// const vinnie = new DogConstructor('Vinnie', 'Spoodle', 'tan')
// vinnie.greeting();

// class DogClass //class
// {
//     constructor(newName, newBreed, newColor)
//     {
//         this.name = newName;
//         this.breed = newBreed;
//         this.color = newColor;
//     }

//     greeting() {
//         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
// }

// const charlie = new DogClass('Charlie', 'Labradoodle', 'chalk')
// charlie.greeting();

// // Try it again with something else

// const car = {
//     make : 'BMW',
//     color : 'blue',
//     year : '2021',
//     whatcar: function() {
// console.log(`This is a ${ this.color } ${ this.year } ${ this.make }.`);
//     }

// }

// const car2 = {
//     make : 'Subaru',
//     color : 'silver',
//     year : '2017',
//     whatcar: function() {
// console.log(`This is a ${ this.color } ${ this.year } ${ this.make }.`);
//     }

// }
// car.whatcar()
// car2.whatcar()

// function delayMsg(msg)
// {
//     console.log('This message will be printed after a delay: ${msg}')
// }

// const interval = setInterval(delayMsg, 1000, "interval function")
// setTimeout(() => clearTimeout(interval), 10*1000)

//This bit below should help with question 7
// function repeatTimeout(delay, limit)
// {
//     let counter = 1;
//     setTimeout(function repeatThis(current) {
//         console.log("repeatTImeout: repeated "+current+" of "+limit+" times")
//         if (current > limit) setTimeout(repeatThis, delay, current+1)

//     })
// }






// Question 7
const delay = (func, ms) => {
    return function (message) {
        setTimeout(func, ms, message)
    }
}

const hello = ( who ) => console.log(`Bonjour ` + who );
const delayHello = delay(hello, 5000);
delayHello(`world`);



//Help for question 9

const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
        return this;
    },
    fullTime() {
       console.log('Fulltime final score is'+this.score)
       return this;
    }
}

basketballGame.basket().basket().freeThrow().freeThrow().basket().threePointer().halfTime();


function Team(name) {
    this.score = 0;
    this.name = name;

    this.freeThrow = function() {
        this.score++;
        return this;
    }
    this.basket = function() {
        this.score += 2;
        return this;
    }
    this.threePointer = function() {
        this.score += 3;
        return this;
    }
    this.halfTime = function() {
        console.log('Halftime score for '+this.name+' is '+this.score);
        return this;
    }
    this.fullTime = function() {
        console.log(`Fulltime final score for ${this.name} is ${this.score}`)
        return this;
    }    
}

const bullets = new Team('bullets')
bullets.basket().threePointer().basket().freeThrow().basket().halfTime();

const celtics = new Team('celtics')
celtics.basket().freeThrow().threePointer().basket().basket().basket().halfTime()