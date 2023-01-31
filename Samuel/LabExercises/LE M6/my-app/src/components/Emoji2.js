import React from 'react'

class Emoji2 extends React.Component{

    emojis = ['⚽','🏀','🏈','🏉','🏎️','⚾']
    constructor(props){
        super(props);

        this.state = {emoji: '⚽'}

    }

    changeEmoji = () => {

        // const currentEmojiIndex = this.emojis.indexOf(this.state.emoji);

        // const nextEmoji = currentEmojiIndex === this.emojis.length - 1 ? 0 : currentEmojiIndex + 1;

        const randomEmoji  = Math.floor(Math.random()*this.emojis.length)
        console.log(randomEmoji)



        this.setState({emoji: this.emojis[randomEmoji]});
    }

    render(){
        return (
            <div>
                <div className="currentEmoji">
                    Random Sport Selector<br></br>
                    <p class="Emoji">
                    {this.state.emoji}
                    </p>
                </div>
                <button onClick={this.changeEmoji}> Random Sport </button>
            </div>    
        )
    }
}

export default Emoji2;