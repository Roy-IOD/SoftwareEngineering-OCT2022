import React from 'react';

class Emoji extends React.Component {
  constructor(props) {
    super(props)
    this.state = {emoji: "😀"}
  }
  
  changeEmoji = () => {
    let newEmoji = this.state.emoji === "😀" ? "😂" : "😀";
    this.setState({emoji: newEmoji});
  }

  render(){
    return (
      <div className='Emoji componentBox'>
      <h1>{this.state.emoji}</h1>
      <button onClick={this.changeEmoji}>{this.state.emoji === "😀" ? "Laugh" : "Smile"}</button>
      {/* <button onClick={this.changeEmoji}>Change Emoji</button> */}
      </div>
    )
  }
}

export default Emoji