import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

//this is a FUNCTIONAL component. The JSX is returned directly and the props object is the argument to the function
function Hello(props) {

    const { theme } = React.useContext(ThemeContext);

    return <div className="Hello componentBox" style={{backgroundColor: theme.background, color: theme.foreground}}>
        Hello {props.name ? props.name : 'World'}
    </div>
}


export default Hello;