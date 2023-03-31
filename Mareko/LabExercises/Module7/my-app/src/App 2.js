import './App.css';

import NavBar from './components/NavBar';
import { AppRoutes } from './routes/AppRoutes';
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <AppRoutes />
      </UserProvider>
      
    </div>
  );
}

export default App;
