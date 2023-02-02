import React from 'react';

class Emoji extends React.Component {
  constructor(props) {
  super(props)
  this.state = {emoji: "🐑"}
  }
  
  differentEmoji = () => {
    let changeEmoji = this.state.emoji === "😂" ? "🐑" : "👽";
    this.setState({emoji: changeEmoji});
  }

  render(){
  return (
    <div className='Emoji componentBox'>
      <h1>{this.state.emoji}</h1>
      <button onClick={this.differentEmoji}>{this.state.emoji === "😂" ? "sheep" : "alien"}</button>
   </div>
    )
  }
}
export default Emoji