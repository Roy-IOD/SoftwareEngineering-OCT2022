import Login from "../components/Login";
import Reservation from "../components/Reservation";
import ChatRecipientPicker from "../components/ChatRecipientPicker";
import OnlineChat from "../components/OnlineChat";
import RandomQuote from "../components/RandomQuote";

function Dashboard() {

    return (
    <div>
        <Login />
        <Reservation />
        <ChatRecipientPicker />
        <OnlineChat />
        <RandomQuote />
     </div>
    )
}

export default Dashboard