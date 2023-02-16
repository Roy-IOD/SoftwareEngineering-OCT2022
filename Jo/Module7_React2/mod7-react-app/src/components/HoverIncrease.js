import { useState } from "react";
import withCounter from "./withCounter";

function HoverIncrease(props) {

    const [fontSize, setFontSize] = useState(props.fontSize ? props.fontSize : 10);
    const { counter, incrementCounter } = props; //what does this line do?

    return (
        <div className="HoverIncrease componentBox">
            <h3>Hover Increase</h3>

            <p style={{ fontSize }} onMouseOver={() => setFontSize((size) => size + 1)}>
                Size of font after hovering: {fontSize}
            </p>

            <button onMouseOver={() => incrementCounter()}>Hover Count: {counter}</button>
        </div>
    );

}

export default withCounter(HoverIncrease);