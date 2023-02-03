import {useState} from 'react'
import useFriendStatus from "../hooks/useFriendStatus";
import ChatAPI from "../apis/ChatAPI";

function Circle(props) {
    return <span className="Circle" style={{backgroundColor: props.color}}></span>
}

function ChatRecipientPicker() {
    const [recipientID, setRecipientID] = useState(1);
    const isRecipientOnline = useFriendStatus(recipientID);
  
    return (
      <div className="ChatRecipientPicker">
        <Circle color={isRecipientOnline ? 'green' : 'red'} />
        <select
          value={recipientID}
          onChange={e => setRecipientID(Number(e.target.value))}
        >
          {ChatAPI.friends.map(friend => (
            <option key={friend.id} value={friend.id}>
              {friend.name}
            </option>
          ))}
        </select>
      </div>
    );
}

export default ChatRecipientPicker