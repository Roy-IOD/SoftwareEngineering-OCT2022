import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent'
import PropsDisplayer from './components/PropsDisplayer';
import Comment from './components/Comment';
import Greeting from './components/Greeting';
import Weather from './components/Weather';
import ClockDisplay from './components/Clock';
import Login from './components/Login';
import PlayerList from './components/PlayerList';
import Reservation from './components/Reservation';
import Breweries from './components/Breweries';

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
      <Breweries />
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

      <ClockDisplay />
      <hr></hr>
      <Login />
      <hr></hr>
      <PlayerList />
      <hr></hr>
      <Reservation />


 
    </div>
    
  );
}

export default App;
