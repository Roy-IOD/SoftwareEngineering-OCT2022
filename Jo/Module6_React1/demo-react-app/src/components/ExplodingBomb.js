import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    reset() {
        this.props.onReset();
        this.setState({hasError: false})
    }
  
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h1>Something went wrong.</h1> 
                    <button onClick={() => this.reset()}>{this.props.resetMsg}</button>
                </div>
            )
        }
    
        return this.props.children; 
    }
}
  
function Bomb() {
    throw new Error('💥 KABOOM 💥')
}

class ExplodingBomb extends Component {

    constructor(props) {
        super(props)
        this.state = {explode: false};
    }

    render() {
        const exploded = this.state.explode

        return (
            <div className="ExplodingBomb componentBox">
                <button onClick={() => this.setState({explode: !exploded}) }>DANGER: Click to explode bomb!</button>

                <ErrorBoundary onReset={() => this.setState({explode: false})} resetMsg="uh oh. try again?">
                    {exploded ? <Bomb /> : null}
                </ErrorBoundary>
            </div>
        )
    }
}

export default ExplodingBomb