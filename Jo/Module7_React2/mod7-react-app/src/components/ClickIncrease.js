import { useState } from "react";
import withCounter from "./withCounter";

function ClickIncrease(props) {

    const { counter, incrementCounter } = props; //what does this line do?
    const [fontSize, setFontSize] = useState(props.fontSize ? props.fontSize : 10);

    return (
        <div className="ClickIncrease componentBox">
            <h3>Click Increase</h3>

            <button onClick={() => setFontSize((size) => size + 1)}>
                Increase with click
            </button>
            <p style={{ fontSize }}>Size of font after clicking: {fontSize}</p>

            <button onClick={() => incrementCounter()}>Click Count: {counter}</button>
        </div>
    );

}

export default withCounter(ClickIncrease); //what does the 3 do?