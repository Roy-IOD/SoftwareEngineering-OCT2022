import ChatAPI from "../apis/ChatAPI"
import FriendListItem from "./FriendListItem"
import ChatRecipientPicker from './ChatRecipientPicker';

function OnlineChat() {

    return (
        <div className="OnlineChat componentBox">
            <div className="row">
                <div className="friends">
                    All Friends:
                    {ChatAPI.friends.map(friend => (
                        <FriendListItem key={friend.id} friend={friend} />
                    ))}
                </div>
                <div className="picker">
                    <ChatRecipientPicker />
                </div>
            </div>
            <div className="row">
                <button onClick={() => ChatAPI.startAPI()}>Start Chat API</button>
                <button onClick={() => ChatAPI.stopAPI()}>Stop Chat API</button>
            </div>
        </div>
    )
}

export default OnlineChat