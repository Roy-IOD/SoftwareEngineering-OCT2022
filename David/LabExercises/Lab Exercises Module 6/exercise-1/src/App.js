import './App.css';
import Greeting from './components/Greeting';
import Emoji from './components/Emoji';

function App() {
  const myName = "David"
  
  return (
    
    <div className="App">
      
      <Greeting name = {myName}/>
      <Emoji />
      {/* <Greeting /> */}
    </div>
  );
}

export default App;
