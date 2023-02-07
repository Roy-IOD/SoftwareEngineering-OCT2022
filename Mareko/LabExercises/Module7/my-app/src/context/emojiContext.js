import React from 'react';

const weatherTypes = ['☀', '🌧', '💨', '☁', '⛈', '❄'];

export const EmojiContext = React.createContext();

export const EmojiProvider = ({children}) => {
    const [weather, setWeather] = React.useState(weatherTypes[0]);

    return (
        <EmojiContext.Provider value={{weather, setWeather}}>
            {children}
        </EmojiContext.Provider>
    );
}

