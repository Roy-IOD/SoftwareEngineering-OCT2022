"use strict";
const axios = require('axios')

const getHouses = (res) => {
    axios.get('https://anapioficeandfire.com/api/houses/').then(data => {
        console.log(data.data); 
        res.send({ result: 200, data: data.data }) 
    }).catch(err => {
        throw err
    })
}

const searchHouses = (req, res) => {
    axios.get('https://anapioficeandfire.com/api/houses/').then(data => {
        console.log(data.data); 
        let matchingHouses = data.data.filter(house => house.name.toLowerCase().indexOf(req.query.s.toLowerCase()) >= 0)
        res.send({ result: 200, data: matchingHouses }) 
    }).catch(err => {
        throw err
    })
}

const getBooks = (res) => {
    axios.get('https://anapioficeandfire.com/api/books/').then(data => {
        let apiData = data.data;
        console.log(apiData); 

        //we can modify the data here to just return what we need:
        let bookData = apiData.map(book => { return {name: book.name, url: book.url, numberOfPages: book.numberOfPages, released: book.released}; });

        res.send({ result: 200, data: bookData }) 
    }).catch(err => {
        throw err
    })
}

const getRandomBook = (res) => {
    let bookId = Math.floor(Math.random() * 10)
    axios.get(`https://anapioficeandfire.com/api/books/${bookId}`).then(data => {
        console.log(data.data); 
        res.send({ result: 200, data: data.data }) 
    }).catch(err => {
        throw err
    })
}

const getRandomCharacter = (res) => {
    let charId = Math.floor(Math.random() * 2000)
    axios.get(`https://anapioficeandfire.com/api/characters/${charId}`).then(data => {
        console.log(data.data); 
        res.send({ result: 200, data: data.data }) 
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getHouses, searchHouses, getBooks, getRandomBook, getRandomCharacter
}