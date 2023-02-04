import React, { useState, useEffect } from 'react';
import ChatAPI from '../apis/ChatAPI'

function FriendStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    //this can now all be replaced with our custom hook useFriendStatus
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        // Specify how to clean up after this effect:
        return function cleanup() {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus