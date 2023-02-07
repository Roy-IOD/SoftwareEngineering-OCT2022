import {useState, useEffect} from 'react'
// import axios from 'axios'

function RandomQuote() {

    const [quote, setQuote] = useState({})
    const [updated, setUpdated] = useState(false)

    // useEffect(() => {
    //     axios.get('/v1/quotes/en/random') //see change to package.json on line 5 for avoiding CORS issue
    //         .then(response => {
    //             let quote = response.data;
    //             console.log(quote)
    //             setQuote({text: quote.text, author: quote.author.name})
    //         })
    //         .catch(e => {
    //             setQuote({text: e.message, author:'Server Request Failed'})
    //         })
    // }, [updated]) //what happens if we change this?

    return (
        <div className="RandomQuote componentBox">
            <blockquote>{quote.text} <cite>{quote.author}</cite></blockquote>

            <button onClick={() => setUpdated(!updated)}>Get New Quote</button>
        </div>
    )
}

export default RandomQuote