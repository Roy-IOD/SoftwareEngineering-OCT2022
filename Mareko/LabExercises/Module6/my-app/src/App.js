import './App.css';

import Greetings from './components/Greetings';
import GreetingsButton from './components/GreetingsButton';

function App() {
  return (
    <div className="App">

      <Greetings name="Mareko"/>
      <GreetingsButton />

    </div>
  );
}

export default App;
