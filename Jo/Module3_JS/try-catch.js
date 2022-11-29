// try {
//     //setTimeout(function() {
//         noSuchVariable; // script will die here
//     //}, 1000);
// } catch (err) {
//     console.log( "won't work" );
//     console.log(err.message)
// }


const json = '{ "age": 30, "name" : "Jo" }'; // incomplete data
try {
    const user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }
    blabla(); // unexpected error
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log( "JSON Error: " + err.message );
    } else {
        throw err; // rethrow other non-syntax errors
    }
}
finally {
    console.log('at the end')
}