import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import PropsDisplayer from "./PropsDisplayer";
import Comment from "./Comment";
import Breweries from "./Breweries";

function App() {
  const myName = "Mopati";
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MyComponent />
      <PropsDisplayer
        test="hello"
        name={myName}
        drinks={["water", "coke", "juice", "beer"]}
        number1={4}
        number2={88}
      />
      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <Breweries />
    </div>
  );
}

export default App;
