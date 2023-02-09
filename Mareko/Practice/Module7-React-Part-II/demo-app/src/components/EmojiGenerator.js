import React, { useState } from 'react';
import { EmojiContext } from '../context/emojiContext';

const EmojiGenerator = () => {

    const { weather, setWeather } = React.useContext(EmojiContext);
    const [weatherName, setWeatherName] = useState('Sunny');

    const weatherTypes = ['☀', '🌧', '💨', '☁', '⛈', '❄'];
    const weatherNames = ['Sunny', 'Rainy', 'Windy', 'Cloudy', 'Stormy', 'Snowy'];

    const changeWeather = () => {
        const currentWeatherIndex = weatherTypes.indexOf(weather);
        const nextWeatherIndex = currentWeatherIndex === weatherTypes.length-1 ? 0 : currentWeatherIndex + 1;

        setWeather(weatherTypes[nextWeatherIndex]);
        setWeatherName(weatherNames[nextWeatherIndex]);
    };

    return(
        <div>
            <h2>Today's Weather: {weather} {weatherName}</h2>
            <button onClick={changeWeather}>Change</button>
        </div>
    );

};

export default EmojiGenerator;
