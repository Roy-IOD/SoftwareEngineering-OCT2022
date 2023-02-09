import ClockDisplay from '../components/Clock';
import EmojiGenerator from '../components/EmojiGenerator';
import GreetingsButton from '../components/GreetingsButton';
import { EmojiProvider } from '../context/emojiContext';

function Home() {
    return(
        <div>
            <GreetingsButton />

            <EmojiProvider>

            <ClockDisplay />
            <EmojiGenerator />

            </EmojiProvider>
        </div>
    )
};

export default Home;