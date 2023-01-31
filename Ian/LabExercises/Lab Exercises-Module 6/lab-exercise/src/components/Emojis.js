import React from 'react';

const Emojis = () => {
    const [emoji, setEmoji] = React.useState('😞');

    const handleChange = (event) => {
        if(emoji === '😞') {
            setEmoji('😃');
        } else {
            setEmoji('😞');
        }
    };

    return (
        <div>
        <span>{emoji}</span>
        <button onClick={handleChange}>Switch Emoji</button>
        </div>
    );
}

// class Emojis extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {emoji: '😃'};
//         }
    
//      render() {
//         return (
//             <div>
//         <span>Emojis!</span>
//         </div>
//         )
//     }
// }

// class EmojiDisplay extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { showEmoji: true }
//     }

//         switchEmoji = () => {
//         let showHide = this.state.showEmoji === true ? false : true;
//         this.setState({ showEmoji : showHide})
//     }

//     render() {
//         return (
//             <div className="EmojiDisplay componentBox">
//                 {this.state.showEmoji ? <Emojis /> : null}
//                 <button onClick={this.switchEmoji}>{this.state.showEmoji ? 'Hide' : 'Show'} Emoji</button> 
//             </div>
//         )
//     }
// }

export default Emojis;