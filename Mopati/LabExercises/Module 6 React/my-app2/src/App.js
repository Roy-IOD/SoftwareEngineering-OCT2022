import logo from "./logo.svg";
import "./App.css";
import MyGreeting from "./Components/MyGreeting";
import MyHello from "./Components/MyHello";
import ClockDisplay from "./Components/Clock";
import StudentList from "./Components/StudentList";
import Reservation from "./Components/Reservation";
import Emoji from "./Components/Emoji";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <div className="App">
      <MyGreeting />
      <MyHello />
      <ClockDisplay />
      <StudentList />
      <Reservation />
      <Emoji />
      <Calculator />
    </div>
  );
}

export default App;
