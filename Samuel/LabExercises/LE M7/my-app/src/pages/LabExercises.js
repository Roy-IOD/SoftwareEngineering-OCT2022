import Greeting from '../components/Greeting';
import ClockDisplay from '../components/Clock';
import Emoji from '../components/Emoji';
import { EmojiProvider } from '../context/EmojiContext';

function LabExercises() {
    return (
        <div class='App'>
            <EmojiProvider>
            <Greeting />
            <ClockDisplay />
            <Emoji />
            {/* <Emoji2 /> */}
            </EmojiProvider>
        </div>
    )
}

export default LabExercises;