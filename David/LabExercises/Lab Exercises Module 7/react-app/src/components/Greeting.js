import React, {useState} from "react";
//import { EmojiContext } from "../context/EmojiContext";

function Greeting(props) {
  const [greeting, setGreeting] = useState('World')
  //console.log(greeting)
  //const { emoji } = React.useContext(EmojiContext);

  const changeGreeting = () => {
    let newGreeting = greeting === "World" ? "David" : "World";
    setGreeting(newGreeting);
    //console.log(newGreeting)
  };
  
    return (
      <div className="Greeting componentBox">
        <h1>Greeting with name prop:</h1> <h2>Hello {props.name ? props.name : "World"}</h2>
        <h1>Greeting change on button click:</h1> <h2>Hello {greeting}</h2>
        <button onClick={changeGreeting}>Change Greeting</button>
        {/* {emoji} */}
        
      </div>
      
    );
    }

export default Greeting;
