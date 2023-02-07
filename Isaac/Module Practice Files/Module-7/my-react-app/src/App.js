import Article from './components/Article';
import Login from './components/Login';
import Counter from './components/Counter';
import RandomQuote from './components/RandomQuote';
import Bike from './components/Bike';
import ClockDisplay from './components/Clock';
import WindowResizer from './components/WindowResizer';
import OnlineChat from './components/OnlineChat';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import NavBar from './components/NavBar';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <div className="App darkMode">

      <ThemeProvider> 
        <UserProvider> 

          <NavBar />

          <AppRoutes />

          <Counter/>

          <ClockDisplay />

        </UserProvider>
      </ThemeProvider>

    </div>
  );
}

export default App;