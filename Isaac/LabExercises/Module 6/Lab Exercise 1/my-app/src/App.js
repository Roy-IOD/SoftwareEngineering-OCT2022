import './App.css';
import MyComponent from './components/helloComponent';

function App() {
  const hello = {
    name: 'Isaac',
  }
  return ( 
    <div className="App">
      <MyComponent name={hello.name}/>
    </div>
  );
}

export default App;
