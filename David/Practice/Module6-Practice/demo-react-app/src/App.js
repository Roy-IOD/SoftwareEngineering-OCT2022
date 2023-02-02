import logo from './logo.svg';
import './App.css';

import MyComponent from './components/MyComponent';
import PropsDisplayer from './components/PropsDisplayer';
import Comment from './components/Comment';
import ClockDisplay from './components/Clock';
import StudentList from './components/StudentList';
import Reservation from './components/Reservation';
import Emoji from './components/Emoji';
import Breweries from './components/Breweries';
import Calculator from './components/Calculator';


function App() {

  const myName = "david"

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

  return (
    <div className="App">

      <Calculator />

      {/* <Breweries /> */}

      <MyComponent />
      
      <PropsDisplayer test="hello" name={myName} drinks={['water', 'juice', 'coke']} number1={4} number2={8}/>
      
      <Comment date = {comment.date} text = {comment.text} author={comment.author}/>

      {/* <ClockDisplay /> */}

      <StudentList />

      <Reservation />

      <Emoji />

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

    </div>

  );
}

export default App;
