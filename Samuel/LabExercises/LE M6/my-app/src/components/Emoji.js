import React from 'react'

class Emoji extends React.Component{
    constructor(props){
        super(props);

        this.state = {emoji: '&#129409;'}

        this.currentEmoji = this.currentEmoji.bind(this)
    }

    currentEmoji = () => {
        this.setState({emoji: '&#9917;'})
    }

    changeEmoji = () => {
        let newEmoji = this.state.emoji === '&#129409;' ? '&#9917;' : '&#129409;';

        this.setState({emoji: newEmoji});
    }

    render(){
        return (
            <div>
                <div className="Emoji">
                    Your Emoji: <br></br>
                    <p>
                    {this.state.emoji}
                    </p>
                </div>
                <button onClick={this.changeEmoji}> Change </button>
            </div>    
        )
    }
}

export default Emoji;