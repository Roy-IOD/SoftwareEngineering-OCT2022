import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { AppRoutes } from './routes/AppRoutes';
// import Emoji2 from './components/Emoji2';
// import Calculator from './components/Calculator';

function App() {
  // const greeting = {
  //   name: 'Sam',
  // } 

  return (
    <div className="App">

      <NavBar />

      <AppRoutes />

      
    </div>
  );
}

export default App;
