let news = [
    { id: 1, title: 'News1', content:"bla"},
    { id: 2, title: 'News2', content:"ble"},
    { id: 3, title: 'News3', content:"blu"}
];        

function addNews() {
    
}

function addNewsItems() {
    //this function needs to clear out the previous contents of the news-list placeholder div
    //and then re-fill it with a cloned, populated template for each of the current items in the news array
} 

//then we call the above function every 5 seconds
const intervalTimer = setInterval(addNewsItems, 5000)


