//import logo from './logo.svg';
import "./App.css";

import Login from "./components/Login";
import Hello from "./components/Greetings";
import ClockDisplay from "./components/Clock";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import NavBar from "./components/NavBar";
import { AppRoutes } from "./routes/AppRoutes";
import MediaPostApp from "./components/MediaPost";
import MediaPostForm from "./components/MediaPostForm";

function App() {
  return (
    <div className="App darkMode">
      <ThemeProvider>
        <UserProvider>
          <NavBar />
          <Login />
          {/* <Hello /> */}
          <AppRoutes />
          <MediaPostApp />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
