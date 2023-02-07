import React, {useState} from 'react';
import { EmojiContext } from '../context/EmojiContext';

function Emoji() {
    //const [emoji, setEmoji] = useState ("😀")
    const { emoji, setEmoji } = React.useContext(EmojiContext);
  
  const changeEmoji = () => {
    let newEmoji = emoji === "😀" ? "😂" : "😀";
    setEmoji(newEmoji);
  }

  
    return (
      <div className='Emoji componentBox'>
      <h1>{emoji}</h1>
      <button onClick={changeEmoji}>{emoji === "😀" ? "Make it Laugh" : "Make it Smile"}</button>
      </div>
    )
  
    }

export default Emoji