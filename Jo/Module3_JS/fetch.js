//first run these commands :
// 1. npm init (to initialise this script with the npm)
// 2. npm install node-fetch (to install the browser function 'fetch' for node.js)
// 3. add "type": "module", to package.json
import fetch from 'node-fetch'


//fetch is a function built in to the browser which fetches from a remote URL and returns a Promise:

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) //this gets the entire HTTP response, so we use the .json() function which also returns a promise
    .then(json => console.log(`Post #1: ${JSON.stringify(json)}`)) //this promise includes the json returned from the fetched URL if successful
    //.catch(error => console.error(`Caught error: ${error}`)) //can optionally include this to show any errors
    //.finally(() => console.log('done fetching')) //can optionally include this after all fetching done


//OR we can also use await to wait until the promise resolves and then use the result:

let post2 = await fetch('https://jsonplaceholder.typicode.com/posts/2')
//console.log(post2)
//BUT now we see why we need line 11 - this is the whole HTTP response with lots of extra things we don't need
let post2Json = await post2.json()
console.log(`Post #2: ${JSON.stringify(post2Json)}`)


//to wrap this in a function it needs to be declared as async (which returns a promise)

async function fetchPostTitle(postId)
{
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    let postJson = await post.json()
    return postJson.title
}

//and then to use it we also need to use await again:
let post3Title = await fetchPostTitle(3)
console.log(post3Title)