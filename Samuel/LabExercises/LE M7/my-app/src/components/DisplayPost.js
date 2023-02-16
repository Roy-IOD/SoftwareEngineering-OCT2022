import axios from "axios";
import * as React from 'react';
import {useState, useEffect} from 'react';




function DisplayPost() {
    const {display, setDisplay} = useState([])

    
    useEffect( () => {
        fetchData()}, []
    )

    const fetchData = async () => {
        const {data} = await axios.get('https://jsonplaceholder.com/posts')

        setDisplay(data)
    }

    return(
        <div className="Posts">
            {display.map(post => (
                <div key={post.id}>
                    <h5>{post.city}</h5>
                    <p>{post.name}</p>
                </div>
            ))}
        </div>
    )

}

export default DisplayPost;