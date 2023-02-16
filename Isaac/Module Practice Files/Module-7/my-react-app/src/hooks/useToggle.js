import {useState} from 'react'

const useToggle = (initialState = false) => {

    // Initialize the state
    const [state, setState] = useState(initialState);

    // This function changes the boolean 'state' value to it's opposite value
    const toggle = () => setState(state => !state); 

    return [state, toggle]
}

export default useToggle