import React from "react";
import Emoji from "../components/Emoji"; 

const moods = {
    happy: '😀',
    sad: '😭'   
}

export const EmojiContext = React.createContext(moods.happy);

export const EmojiProvider = ({children}) => {
    const {emoji, setEmoji} = React.useState(moods.happy);

    return (
        <EmojiContext.Provider value={{emoji, setEmoji}}>
            {children}
        </EmojiContext.Provider>
    );
}

