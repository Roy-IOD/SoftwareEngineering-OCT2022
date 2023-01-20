import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent'
import PropsDisplayer from './components/PropsDisplayer';
import Comment from './components/Comment';
import Greeting from './components/Greeting';
import Weather from './components/Weather';
import Clock from './components/Clock';

function App() {
  const myName = 'Sam';
  const comment = {
      date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
const greeting = {
  name: 'Sam',
}
  return (
    <div className="App">
     

      <MyComponent />
      <PropsDisplayer test="hello" name={myName} drinks={['water','juice','coke']} number1= "4" number2= "5" />

      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      /> 
      <Greeting 
        name={greeting.name}
      />

      <Weather />
      <hr></hr>

      <Clock />


 
    </div>
    
  );
}

export default App;
