import React from "react";

const mood = {
  smile: '😀',
  laugh: '😂'
}

export const EmojiContext = React.createContext()

export const EmojiProvider = ({children}) => {
  const [emoji, setEmoji] = React.useState(mood.smile)

  return (
    <EmojiContext.Provider value = {{emoji, setEmoji}}>
      {children}
    </EmojiContext.Provider>
  )
}