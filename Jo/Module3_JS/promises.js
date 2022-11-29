//https://javascript.info/promise-basics
//produces a random song after 1 second: if successful calls the resolve function, if unsuccessful calls the reject function
//functions passed as params like this are called 'callbacks'
function produceSong(resolve, reject) 
{
    const artists = ['Taylor Swift', 'Beyonce', 'Drake', 'Ed Sheeran', 'Rihanna', 'The Weeknd', 'Harry Styles']
    const randomArtist = Math.floor(Math.random() * artists.length) //random number corresponding to one of the above artists

    const songs = ['Unstoppable', 'Numb Little Bug', 'About Damn Time', 'Music For a Sushi Restaurant', 'Anti-Hero', 'Glimpse of Us']
    const randomSong = Math.floor(Math.random() * songs.length) //random number corresponding to one of the above songs

    const randomOutcome = Math.round(Math.random()) //returns either 0 or 1 randomly for failure (0) or success (1)

    let successResult = artists[randomArtist] + ' has just released their newest song called ' + songs[randomSong]
    let failResult = artists[randomArtist] + ' has no new songs'

    setTimeout(() => randomOutcome ? resolve(successResult) : reject(failResult), 1000)
}


//using the above WITHOUT a Promise:
produceSong(
    (successMsg) => console.log(`Success #0: ${successMsg}`),
    failMsg => console.error(`Failure #0: Sorry fans, ${failMsg}`)
)


//using the above WITH a Promise:

let songPromise = new Promise(produceSong) //songPromise can be used to capture and act on the unknown result of produceSong

//use .then to run when there is a result. takes two parameters: first a function for success, second a function for error (optional)
songPromise.then(
    successMsg => console.log(`Success #1: ${successMsg}`),
    failMsg => console.error(`Failure #1: Sorry fans, ${failMsg}`) //can leave this out to only handle success
)

// or if we only want to do something in case of error there are two options:
songPromise.then(
    null,
    failMsg => console.error(`Failure #2: Sorry fans, ${failMsg}`)
)

// or use catch (with or without then):
songPromise.then(successMsg => console.log(`Success #3: ${successMsg}`)).catch(failMsg => console.error(`Failure #3: Sorry fans, ${failMsg}`))

// can also use finally (optional) if anything needs to happen at the end regardless of success/failure:
songPromise
    .then(successMsg => console.log(`Success #4: ${successMsg}`))
    .finally(() => console.log('Song production now finalised.'))
    .catch(failMsg => console.error(`Failure #4: Sorry fans, ${failMsg}`))



// -----------------------

// we can also handle promises using async and await keywords instead of .then (without flexibility of error handling)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function


// if we want to handle errors using this syntax we need to use a try...catch

try {
    let latestSong = await songPromise;
    console.log(`Success #5: ${latestSong}`)
} catch(error) {
    console.error(`Failure #5: Sorry fans, ${error}`)
}
finally {
    console.log('Song production now finalised.')
}

// if using await inside a function, the function has to be declared as async like this: 
// async function myFunction() {...}