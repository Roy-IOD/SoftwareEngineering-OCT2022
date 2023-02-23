import React from 'react';
import { useEffect, useState } from 'react';
import {EmojiContext} from '../context/EmojiContext';

function Clock() {
      const [date, setDate] = useState(new Date().toLocaleString())
      useEffect( () => {
            setInterval(() => setDate(new Date().toLocaleString())
            , 1000
            )
            return  () => {
            clearInterval(date)
            }
      })
      return (
            <div className="Clock">
                  <h1>{date}</h1>
            </div>
      );

}

function ClockDisplay() {
      const {emoji} = React.useContext(EmojiContext)
      const [clock, setClock]  = useState(false)
      const toggleClock = () => {
      setClock(!clock)      
      }
      
      let buttonText = clock ? 'Hide' : 'Show'     

      return (
            <div className="Clock componentBox">
                  {clock ? <Clock /> : null}
                  <button onClick={toggleClock}>{buttonText}</button>
                  {emoji}
            </div>
      )
}

export default ClockDisplay;