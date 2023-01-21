import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Emoji from './components/Emoji';
import Emoji2 from './components/Emoji2';

function App() {
  // const greeting = {
  //   name: 'Sam',
  // } 

  return (
    <div className="App">
      {/* <Greeting 
      name={greeting.name}/> */}
      <Emoji />
      <Emoji2 />
    </div>
  );
}

export default App;
