import logo from './logo.svg';
import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
          <NavBar />
          <AppRoutes/>
    </div>
  );
}

export default App;
