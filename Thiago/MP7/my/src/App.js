//import logo from './logo.svg';
import './App.css';

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

      <ThemeProvider> {/* allow all child components to use the Theme context */}
        <UserProvider> {/* allow all child components to use the User context */}

          <NavBar />

          {/* see https://blog.webdevsimplified.com/2022-07/react-router/ for more tips on routing */}
          <AppRoutes />

          {/* any components listed here will show on all routes, as they don't depend on matching a specific URL in the browser */}

          <Counter/>

          <ClockDisplay />

        </UserProvider>
      </ThemeProvider>

    </div>
  );
}

export default App;
