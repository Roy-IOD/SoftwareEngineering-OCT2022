import React, {useState, useEffect} from 'react'
import { UserContext } from '../context/UserContext';

function Counter() {

    const [count, setCount] = useState(0)
    const { username } = React.useContext(UserContext);

    useEffect(() => {
        document.title = `${username} clicked ${count} times`
    })

    return (
        <div className="Counter componentBox">
            <p>{username} clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click Me!</button>

            {/* how could we make a reset button to reset the count back to zero? */}
            <button onClick={() => setCount(0)}>Reset Me!</button>
        </div>
    )
}

export default Counter