import './App.css';
import NavBar from './components/NavBar';
import { AppRoutes } from './routes/AppRoutes';
import { EmojiProvider } from './context/emojiContext';

function App() {
  return (
    <div className="App">

      <EmojiProvider>

        <NavBar />
        <AppRoutes />

      </EmojiProvider>
      
    
    </div>
  );
}

export default App;
