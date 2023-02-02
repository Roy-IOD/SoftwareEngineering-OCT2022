function Greeting(props) {
    return <h1>Hello World</h1>;
  }
function SpecificGreeting(props) {
    return <h1>Hello, {props.name}</h1>
}
export default Greeting
