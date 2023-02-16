//see https://daveceddia.com/usestate-hook-examples/

// First: import useState. It's a named export from 'react'
// Or we could skip this step, and write React.useState
import React, { useState } from 'react';

// This component expects 2 props:
//   text - the text to display
//   maxLength - how many characters to show before "read more"
//this syntax is 'destructuring' the props object and extracting the properties we need
function ReadMore({ text, maxLength }) {

    // Create a piece of state, and initialize it to `true`
    // `hidden` will hold the current value of the state,
    // and `setHidden` is a function to let us change it
    //the useState hook returns both the variable to hold the state (hidden) and the function for updating it (setHidden)
    //the convention is to name the function using 'set' followed by the name of the state variable 
    const [hidden, setHidden] = useState(true);

    // If the text is short enough, just render it
    if (text.length <= maxLength) {
        return <span className="ReadMore">{text}</span>;
    }

    // Render the text (shortened or full-length) followed by
    // a link to expand/collapse it.
    // When a link is clicked, update the value of `hidden`,
    // which will trigger a re-render
    return (
        <span className="ReadMore">
            {hidden ? `${text.substr(0, maxLength).trim()} ... ` : text}
            <a onClick={() => setHidden(!hidden)} href="#">read {hidden ? 'more' : 'less'}</a>
        </span>
    );
}

export default ReadMore