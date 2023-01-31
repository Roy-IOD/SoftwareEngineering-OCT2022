import './App.css';
import MyComponent from './components/MyComponent';
import PropsDisplayer from './components/PropsDisplayer';
import Comment from './components/Comment';
import ClockDisplay from './components/Clock';
import StudentList from './components/StudentList';
import Reservation from './components/Reservation';
import Breweries from './components/Breweries';

function App() {
  const myName = "Isaac Heslop"
  const comment = {
    date: new Date(),
    text: "React Learning",
    author: {
      name: 'Joel Embiid',
      avatarUrl: 'https://whyy.org/wp-content/uploads/2022/09/joel-embiid-ap-2022-09-29.jpg',
    },
  };

    return (
      <div className="App">

        <MyComponent/>
        <PropsDisplayer test="hello" name={myName} drinks={['water', 'juice', 'coke']} number1 = "5"/>

        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
          />
          <ClockDisplay />
          <StudentList />
          <Reservation />
          <Breweries />
        
      </div>
    );
}

export default App;
