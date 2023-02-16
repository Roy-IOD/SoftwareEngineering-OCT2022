import logo from './logo.svg';
import './App.css';
import Bike from './components/Bike';
import Login from './components/Login';
import Reservation from './components/Reservation';
import ChatRecipientPicker from './components/ChatRecipientPicker';
import OnlineChat from './components/OnlineChat';
import RandomQuote from './components/RandomQuote';
import NavBar from './components/NavBar';
import {AppRoutes} from './routes/AppRoutes';


function App() {
  return (
    <div className="App">
     

     <NavBar />

     <AppRoutes /> 


 
    </div>
    
  );
}

export default App;