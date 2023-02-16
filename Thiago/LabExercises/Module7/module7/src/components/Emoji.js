import React from 'react';
import { EmojiContext } from '../context/EmojiContext';

function Emoji() {
      
      const {emoji, setEmoji} = React.useContext(EmojiContext);
      
      const changeEmoji = () => {
            let newEmoji = emoji === '😍' ? '😬' : '😍';
            setEmoji(newEmoji)
      }
      return (
            <div className='Emoji componentbox'>
                  <h1>{emoji}</h1>
                  <button onClick={changeEmoji}>Change mood</button>
            </div>
      )
}

export default Emoji;