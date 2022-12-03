// //see https://javascript.info/call-apply-decorators

// function slow(x) {
//     // there can be a heavy CPU-intensive job here like adding up to a large number
//     let goal = Math.floor(Math.random() * x * 1_000_000) //random number between 0 and a million times x
//     console.log('randomly generated goal for '+(x * 1_000_000) +' is ' + goal)
//     let random = 0;
//     for (let i = 0; i < goal; i++)
//     {
//         random++
//     }
//     return random;
// }

function cachingDecorator(func) {
    const cache = new Map();

    return function(x) {
        if (cache.has(x)) { // if there's such key in cache
            console.log('returned cached value for '+x)
            return cache.get(x); // read the result from it
        }
        let result = func.call(this, x); //needed for object functions that reference 'this' for context
        //let result = func(x) //works fine for standalone functions that don't rely on 'this' for context
        cache.set(x, result); // and cache (remember) the result
        console.log('generated new value '+result+' for '+x)
        return result;
    };
}

// let cachedSlow = cachingDecorator(slow); //this is where the decorating happens. we could use any function here instead of 'slow'

console.time('slow no caching')
console.log( cachedSlow(1) ); // slow(1) is run, cached and the result returned
console.timeEnd('slow no caching')

// console.time('slow with caching')
// console.log( "Again: " + cachedSlow(1) ); // slow(1) result returned from cache
// console.timeEnd('slow with caching')

// console.log('---')
// console.log( cachedSlow(2) ); // slow(2) is run, cached and the result returned
// console.log( "First time: " + cachedSlow(2) ); // slow(2) result returned from cache
// console.log( "Second time: " + cachedSlow(2) ); // slow(2) result returned from cache


let worker = {
    someMethod() {
      return 10;
    },
  
    slow(x) {
      //console.log("Called with " + x);
      console.log(arguments)
      return x * this.someMethod(); // (*)
    }
  };
  
  function cachingDecorator(func) {
    //console.log(func)

    //console.log(this)
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // "this" is passed correctly now
      //let result = func(x)

      cache.set(x, result);
      return result;
    };
  }
  
  worker.slow = cachingDecorator(worker.slow); // now make it caching
  

  console.log( worker.slow(2) ); // works
  console.log( worker.slow(2) ); // works, doesn't call the original (cached)