import './App.css';
import Greeting from './components/Greeting';

function App() {
  const myName = "David"
  
  return (
    
    <div className="App">
      <Greeting name = {myName}/>
    
    </div>
  );
}

export default App;
