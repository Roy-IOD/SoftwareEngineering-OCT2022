import React from "react";

const mood = {
    laugh: '😂',
    cry: '😭'
}

export const EmojiContext = React.createContext()

export const EmojiProvider = ({children}) => {
    const [emoji, setEmoji] = React.useState(mood.laugh)

    return (
        <EmojiContext.Provider value = {{emoji, setEmoji}}>
            {children}
        </EmojiContext.Provider>
    )
}

