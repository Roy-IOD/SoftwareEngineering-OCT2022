import Navbar from './components/Navbar';
import { AppRoutes } from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div style={{fontFamily:'Montserrat'}}>
      <Navbar />
      <br/>

      <AppRoutes />
    </div>
  );
}

export default App;
