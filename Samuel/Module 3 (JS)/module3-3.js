//Decorating

function slow(x) {
    // there can be a heavy CPU-intensive job here
    console.log(`Called with ${x}`);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {    // if there's such key in cache
        console.log('returned cached value for '+x)
        return cache.get(x); // read the result from it
      }
  
      let result = func(x);  // otherwise call func
  
      cache.set(x, result);  // and cache (remember) the result
      console.log('generated new value'+result+'for'+x)
      return result;
    };
  }
  
  slow = cachingDecorator(slow);
  
  console.log( slow(1) ); // slow(1) is cached and the result returned
  console.log( "Again: " + slow(1) ); // slow(1) result returned from cache
  
//   console.log( slow(2) ); // slow(2) is cached and the result returned
//   console.log( "Again: " + slow(2) ); // slow(2) result returned from cache