//import logo from './logo.svg';
import './App.css';

import { Hello, HelloClass } from './components/Hello'; //to import multiple components from one file, use curly brackets like this
//import Weather from './components/Weather'
import MyComponent from './components/MyComponent';
import PropsDisplayer from './components/PropsDisplayer'
import Comment from './components/Comment';
import Weather from './components/Weather';
import Bike from './components/Bike'

function App() {

  const myName = "Jo Batkin"
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

      <MyComponent />

      <PropsDisplayer test="hello" name={myName} drinks={['water', 'juice','coke','rum']} number1={4} number2={88}/>

      <Comment author={comment.author} date={comment.date} text={comment.text}/>

      <Weather />

      <Bike />
      <hr/>

      <HelloClass />
      <Weather/>
    </div>
  );
}

export default App;
