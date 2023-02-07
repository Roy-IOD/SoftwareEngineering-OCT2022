import React from 'react';

const emojis = {
      emoji1:'⚽',
      emoji2: '🏀'
  };

export const EmojiContext = React.createContext()
  
export const EmojiProvider = ({children}) => {
      const [emoji, setEmoji] = React.useState(emojis.emoji1);
  
      return (
          <EmojiContext.Provider value={{emoji, setEmoji}}>
              {children}
          </EmojiContext.Provider>
      );
  }