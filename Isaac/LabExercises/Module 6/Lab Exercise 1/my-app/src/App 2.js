import './App.css';
import MyComponent from './components/helloComponent';
import EmojiList from './components/emojiComponent';
import Calculator from './components/Calculator';

function App() {
  
  return ( 
    <div className="App">
      <MyComponent />
      <EmojiList />
      <Calculator/>
    </div>
  );
}

export default App;
