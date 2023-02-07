import "./App.css";

import Login from "./components/Login";
import WindowResizer from "./components/WindowResizer";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import NavBar from "./components/NavBar";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider> 
          <NavBar />

          <AppRoutes />

        
        
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;