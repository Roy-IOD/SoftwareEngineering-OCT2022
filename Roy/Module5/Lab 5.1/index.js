//require the express package
const express = require('express')
//const port = 4000
const ports = [5000,6000]
//create an app using the express
// package
const servers=[]

// we create express instances based on how many ports we have
ports.forEach(port=>{
    let app=express()
    servers.push(app)
})


servers.forEach(server=>{
    // we  pop one of the ports , this returns its value and removes it from the
    // array ports, this way we know is not going to be used again
    let tempPort=ports.pop()

    //we attach the port to the public folder, you could make it 
    // more complex and have multiple public folders
    server.use('/', express.static('public'))
    server.listen(tempPort, () => {
        console.log(`Example app listening at http://localhost:${tempPort}`)
    })
      

})

  