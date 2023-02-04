import React, { useState } from 'react';
import {EmojiContext} from '../context/EmojiContext';

function Hello(props) {
      const {emoji} = React.useContext(EmojiContext)
      const [name, setName] = useState('World')
      const changeName = () => {
            let newName = name === 'World' ? 'Isaac' : 'World';
            setName(newName)
      }

      return (
      <div className="Hello componentBox">
            Hello {name}
            <button onClick={changeName}>Name</button>
            {emoji}
      </div>
      )
}

export default Hello;