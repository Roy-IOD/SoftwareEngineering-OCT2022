import ClockDisplay from '../components/Clock';
import EmojiGenerator from '../components/EmojiGenerator';

function TodaysWeather() {

    return(
        <div>
            <h1>Today's Weather</h1>

            <EmojiGenerator />

            <p>Today will be Sunny with a chance of Rain, gusts of winds and heavy clouds that may transition into storms, with an overnight fall of snow</p>

            <ClockDisplay />
            
        </div>
    )

};

export default TodaysWeather;
