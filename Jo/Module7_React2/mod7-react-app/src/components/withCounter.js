import { useState } from "react";

//see https://blog.logrocket.com/understanding-react-higher-order-components/

const withCounter = (OriginalComponent) => { //how could we also make it use a custom starting value?

    //this is a fairly standard component that uses its own state to manage a counter,
    //and pass those state values as props to the original component
    function NewComponent(props) {

        const startAt = props.startAt ? props.startAt : 1; //allow the defaults to be overridden via props
        const incrementBy = props.incrementBy ? props.incrementBy : 1;

        const [counter, setCounter] = useState(startAt);

        //we return the original component, passing in our custom state values as props
        ///what does {...props} do?
        return (
            <OriginalComponent {...props}
                counter={counter}
                incrementCounter={() => setCounter((size) => size + incrementBy)}
            />
        );
    }

    //our component that manages the state is returned
    return NewComponent;
};

//we export the HOC - the wrapped original component with extra props
export default withCounter;

//https://www.robinwieruch.de/react-higher-order-components/ is another good tutorial with a different usecase