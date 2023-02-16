//import logo from './logo.svg';
import "./App.css";

import Login from "./components/Login";
import Hello from "./components/Greetings";
import ClockDisplay from "./components/Clock";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserProvider";
import NavBar from "./components/NavBar";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <div className="App darkMode">
      <ThemeProvider>
        <UserProvider>
          <NavBar />
          {/* <Login />
          <Hello /> */}
          <AppRoutes />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
