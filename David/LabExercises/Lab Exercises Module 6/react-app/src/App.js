import './App.css';
import Greeting from './components/Greeting';
import Emoji from './components/Emoji';
import Calculator from './components/Calculator';

function App() {
  const myName = "David"
  
  return (
    
    <div className="App">
      
      <Greeting name = {myName}/>
      <Emoji />
      <Calculator />
      {/* <Greeting /> */}
    </div>
  );
}

export default App;
