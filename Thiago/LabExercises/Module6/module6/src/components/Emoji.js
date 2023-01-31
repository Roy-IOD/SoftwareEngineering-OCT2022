import React from 'react';

const emoji1 = <p>&#128512;</p>
const emoji2 = <p>&#128533;</p>
class emojiComponent extends React.Component {
     constructor(props) {
      super(props);
      this.state = {emoji: emoji1};
      this.myEmoji = this.myEmoji.bind(this);
      }
      myEmoji = () => {
            this.setState({emoji: emoji2})
      }
      changeEmoji = () => {
            let newEmoji = this.state.emoji === emoji1 ? emoji2 : emoji1;
            this.setState({emoji: newEmoji})
      }

      render() {
      return (
      <div>
            <div className="Emoji">{this.state.emoji}</div>
            <button onClick={this.changeEmoji}>Change</button>
      </div>
      )
}};

export default emojiComponent