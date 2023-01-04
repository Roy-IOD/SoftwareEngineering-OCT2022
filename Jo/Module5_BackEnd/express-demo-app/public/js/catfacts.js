//keep track of which page/batch of facts we're up to
let currentPage = 1;

//calls our back end to load the required number of cat facts
function loadCatFacts(event) {
    
    //don't reload the page
    if (event) event.preventDefault();

    //keep track of how many facts we should show in each batch
    let limit = document.getElementById('numCatFacts').value

    //fetch the right amount and batch of facts
    fetch('/catfacts/list?limit='+limit+'&page='+currentPage)
        .then(response => response.json())
        .then(json => {

            //for each one, clone, populate and append the template
            json.facts.forEach((fact, index) => { //index can be used in foreach to keep track of which array element we're iterating over
                const template = document.getElementById("cat-fact").content.cloneNode(true);

                //the offset takes into account which page we're on and how many items per page
                let offset = (currentPage - 1) * limit;

                //the id for each fact will be a unique counter based on the index and the offset
                let id = index + 1 + offset;
                
                template.querySelector('.header').innerHTML = 'ID: #' + id;
                template.querySelector('.details').innerHTML = fact.fact;

                document.getElementById('facts').appendChild(template);
            })

            //once we've successfully loaded some facts, unless it's the last page, show the 'Load More' button
            document.getElementById('load-more').className = json.next_page ? 'visible' : 'hidden'
        })
        .catch(error => {
            console.log(error)

            //if we got an error, display the error message and hide the 'Load More' button
            document.getElementById('facts').innerText = error.message
            document.getElementById('load-more').className = 'hidden'
        })
}

//just increments the current page number and calls the same load facts function
function loadMoreFacts() {
    currentPage++;

    loadCatFacts(null); //no default event to prevent this time
}