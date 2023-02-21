import Counter from './components/Counter';
import ClockDisplay from './components/Clock';
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