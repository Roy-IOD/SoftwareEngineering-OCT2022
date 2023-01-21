import './App.css';

import MyComponent from './components/MyComponent';
import PropsDisplayer from './components/PropsDisplayer';
import Comment from './components/Comment';
import ClockDisplay from './components/Clock';
import StudentList from './components/StudentList';

function App() {

  const myName = 'Mareko Petero';
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

      <PropsDisplayer fullName={myName} footballTeams={['Manchester United', 'Liverpool', 'Manchester City']} num1={99} num2={27} string='This is me playing around'/>

      <Comment className="componentBox" author={comment.author} date={comment.date} text={comment.text} />

      <ClockDisplay />

      <StudentList />

    </div>
  );
}

export default App;
