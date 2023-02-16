import useToggle from "../hooks/useToggle";
import useWindowResize from "../hooks/useWindowResize";
import Button from '@mui/material/Button';

function WindowResizer() {

    const [isToggled, setIsToggled] = useToggle();
    const windowSize = useWindowResize();

    return (
        <div className="WindowResizer componentBox">
            <Button variant="outlined" onClick={setIsToggled}>{isToggled ? 'Toggled' : 'Click to Toggle'}</Button>
            <div>{windowSize.width <= 768 ? 'Small Screen Detected' : 'Large Screen Detected'}</div>
        </div>
    );
}

export default WindowResizer