import { useState, useEffect } from "react";

const useWindowResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    //callback function. will be called whenever the resize event is triggered
    const listener = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    //we can use standard React hooks inside custom hooks. this adds a side effect of capturing (listening to) window resize events
    //when the component unmounts, the return function is called which stops listening to window resize events
    useEffect(() => {
        window.addEventListener("resize", listener);
        return () => {
            window.removeEventListener("resize", listener);
        };
    }, []);

    //returns an object containing the new width and height
    return {
        width,
        height,
    };
}

export default useWindowResize;