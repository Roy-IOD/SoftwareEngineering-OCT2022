import React from 'react';


//this is a FUNCTIONAL component. The JSX is returned directly and props are the argument to the function
function Hello(props) {
    return <div>
        Hello {props.name ? props.name : 'World'}
    </div>
}


//this is the same component written as a CLASS. HINT: use the shortcut code 'rcc'
//it 'extends' the base React Component class, and then implements the render method which returns the JSX for this component.
class HelloClass extends React.Component {
    render() {
        return (
            <div>
                {/* conditional statements like this are really useful in React.
                    this one checks the 'name' prop and if it exists it displays that value, otherwise it shows the generic 'World' */}
                Hello {this.props.name ? this.props.name : 'World'}
            </div>
        );
    }
}

//to export multiple components from one file, use curly brackets like this
export {HelloClass, Hello};