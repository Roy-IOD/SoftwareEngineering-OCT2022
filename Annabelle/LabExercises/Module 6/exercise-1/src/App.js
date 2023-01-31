import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting'
import SpecificGreeting from './components/SpecificGreeting'
import Button from './components/Button'
import ClockDisplay from './components/Clock'
function App() {
  return (
    <div>
      <SpecificGreeting name="Annabelle" />
    </div>,
    
    <div>
      <Clock className='FormattedDate'/>
    </div>,

    <div>
    <Button greet='Hello' name="Annabelle" />
    </div>
  );
}

export default App;
