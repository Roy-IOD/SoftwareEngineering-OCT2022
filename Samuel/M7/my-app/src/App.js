import logo from './logo.svg';
import './App.css';
import Bike from './components/Bike';
import Login from './components/Login';
import Reservation from './components/Reservation';
import ChatRecipientPicker from './components/ChatRecipientPicker';
import OnlineChat from './components/OnlineChat';
import RandomQuote from './components/RandomQuote';

function App() {
  return (
    <div className="App">
     

     <Bike />
     <Login />
     <Reservation />
     <ChatRecipientPicker />
     <OnlineChat />
     <RandomQuote />


 
    </div>
    
  );
}

export default App;