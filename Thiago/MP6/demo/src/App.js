//import logo from './logo.svg';
import './App.css';

//import { Hello, HelloClass } from './components/Hello'; //to import multiple components from one file, use curly brackets like this
//import Weather from './components/Weather'
import MyComponent from './components/MyComponent';
import PropsDisplayer from './components/PropsDisplayer'
import Comment from './components/Comment'
import ClockDisplay from './components/Clock';
import Login from './components/Login';
import StudentList from './components/StudentList';
import Reservation from './components/Reservation';

function App() {

  const myName = "Thiago Taujiro"
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

      <ClockDisplay />

      <Login />

      <StudentList />

      <Reservation />

      {/* <Hello />
      <Hello name="React developer"/>
      <HelloClass name={myName}/>
      <Weather/> */}
    </div>
  );
}

export default App;