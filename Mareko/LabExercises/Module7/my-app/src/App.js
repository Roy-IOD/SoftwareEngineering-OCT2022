import './App.css';
import ClockDisplay from './components/Clock';
import GreetingsButton from './components/GreetingsButton';

function App() {
  return (
    <div className="App">
      <GreetingsButton />
      <ClockDisplay />
    </div>
  );
}

export default App;
