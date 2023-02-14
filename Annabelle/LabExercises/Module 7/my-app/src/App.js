import './App.css';
import Greeting from './components/Greeting'
import Clock from './components/Clock'
import Emoji from './components/Emoji'
import { AppRoutes } from './routes/AppRoutes';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Greeting name = 'John'/>
      <Clock/>
      <Emoji/>
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
