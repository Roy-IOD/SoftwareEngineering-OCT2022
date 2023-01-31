import React from 'react'

class Emoji extends React.Component{
    constructor(props){
        super(props);

        this.state = {emoji: '⚽'}

        this.currentEmoji = this.currentEmoji.bind(this)
    }

    currentEmoji = () => {
        this.setState({emoji: '🏀'})
    }

    changeEmoji = () => {
        let newEmoji = this.state.emoji === '⚽' ? '🏀' : '⚽';

        this.setState({emoji: newEmoji});
    }

    render(){
        return (
            <div>
                <div className="currentEmoji">
                    Your Emoji: <br></br>
                    <p class="Emoji">
                    {this.state.emoji}
                    </p>
                </div>
                <button onClick={this.changeEmoji}> Change Sport </button>
            </div>    
        )
    }
}

export default Emoji;