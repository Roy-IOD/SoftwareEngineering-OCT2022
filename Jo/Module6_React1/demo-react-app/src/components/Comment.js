//From slides 31-33 - separating out a large complex component into several smaller re-usable ones
//also check https://codepen.io/institute-of-data/pen/LYORVMq

function Comment(props) {

    return (
        <div className="Comment componentBox"> {/* using class names that match the component name is a handy convention for tracking components in the front end */}
            <UserInfo user={props.author} /> {/* here we pass the author prop down to the UserInfo component and rename it to user */}
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date.toLocaleString()}
            </div>
        </div>
    );

}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/> {/* here again we pass the original author object, now renamed to user, down to the Avatar component */}
            <div className="UserInfo-name">{props.user.name}</div>
        </div>        
    )
}

function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />        
    )
}

//here we're only exporting the parent Comment component, so it's the only one we can import and render from App.js
export default Comment;