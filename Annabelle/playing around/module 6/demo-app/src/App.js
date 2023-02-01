import logo from './logo.svg';
import './App.css';

import MyComponent from './components/MyComponent'
import Weather from './components/Weather'
import PropsDisplayer from './components/PropsDisplayer'
import Comment from './components/Comment'
import Emoji from './components/Emoji'
import ExplodingBomb from './components/ExplodingBomb'

function App() {

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
      <MyComponent/>
      <PropsDisplayer test={"hello"}/>
      <Comment author={comment.author} date={comment.date} text={comment.text}/>
    </div>
  );
}

export default App;
