import './App.css';
import Greeting from './components/Greeting';
import Clock from './components/Clock';
import Emoji from './components/Emoji';
import { EmojiProvider } from './context/EmojiContext';
import { AppRoutes } from './routes/AppRoutes';
import NavBar from './components/NavBar';

function App() {
  const myName = "David"
  
  return (
    
    <div className="App">
      <NavBar />
      <AppRoutes />
      
      <EmojiProvider>
      <Greeting name = {myName}/>
      <Clock />
      <Emoji />
      </EmojiProvider>
    </div>
  );
}

export default App;
