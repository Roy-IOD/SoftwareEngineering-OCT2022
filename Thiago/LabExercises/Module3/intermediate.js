//Intermediate Exercises
//1

let jo = "john";
function capFirst(str) {
    return str.charAt(0).toUpperCase() +str.slice(1);
}

console.log(capFirst(jo)) 

//2

function truncate(str, maxlength) { if (maxlength >= str.length)
    return str; if (maxlength <= 1) return str.slice(0, maxlength) + "...";
    return str.slice(0, maxlength - 1) + "...";
  }
  
  truncate("What I'd like to tell on this topic is:", 20);

  console.log (truncate("What I'd like to tell on this topic is:" , 20))