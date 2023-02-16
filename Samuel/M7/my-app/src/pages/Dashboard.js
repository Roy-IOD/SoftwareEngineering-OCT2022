import Login from "../components/Login";
import Reservation from "../components/Reservation";
import ChatRecipientPicker from "../components/ChatRecipientPicker";
import OnlineChat from "../components/OnlineChat";
import RandomQuote from "../components/RandomQuote";
import Testing from "../components/Testing";

function Dashboard() {

    return (
    <div>
        <Testing />
        <Login />
        <Reservation />
        <ChatRecipientPicker />
        <OnlineChat />
        <RandomQuote />
     </div>
    )
}

export default Dashboard