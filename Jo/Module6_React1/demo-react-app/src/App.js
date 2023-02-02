//import logo from './logo.svg';
import './App.css';

import React, {Suspense} from 'react'
import MyComponent from './components/MyComponent';
import PropsDisplayer from './components/PropsDisplayer'
import Comment from './components/Comment';
import Weather from './components/Weather';
import Bike from './components/Bike';
import ClockDisplay from './components/Clock';
import Login from './components/Login';
import StudentList from './components/StudentList';
import SignUpDialog from './components/SignupDialog';
import Reservation from './components/Reservation';
import ExplodingBomb from './components/ExplodingBomb';

//import Breweries from './components/Breweries';
//const Breweries = React.lazy(() => import('./components/Breweries'))

// check https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52/ and https://reactjs.org/docs/code-splitting.html for more info
const Breweries = React.lazy(() => { 
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
    () => import('./components/Breweries'))});

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
      <Suspense fallback={<div className="Breweries componentBox">Loading breweries ...</div>}><Breweries /></Suspense>

      <MyComponent />

      {/* <Breweries /> */}

      <PropsDisplayer test="hello" name={myName} drinks={['water', 'juice', 'coke', 'rum']} number1={4} number2={88}/>

      <Comment author={comment.author} date={comment.date} text={comment.text}/>

      <Weather />

      <Bike />

      <ClockDisplay />

      <Login />

      <StudentList />

      <SignUpDialog />

      <Reservation />

      <ExplodingBomb/>

    </div>
  );
}

export default App;
