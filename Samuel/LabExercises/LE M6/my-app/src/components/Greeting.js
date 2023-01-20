import React from 'react'

// class Greeting extends React.Component{
//     render(){
//      
//     return (
//         <div className="Hello">
//         Hello {this.props.name ? this.props.name : 'World'}
//     </div>)
//     )
// }
// }

// as a function
// function Greeting(props){

//     return (
//         <div className="Hello">
//             Hello {props.name}
//         </div>
//     )
// }


class Greeting extends React.Component{
    constructor(props){
        super(props);

        this.state = {name: 'World'};

        this.yourName = this.yourName.bind(this);
    }

    yourName = () => {
        // const currentName = this.state.name;
        // const nextName = 'World'

        // const nextName = this.props.name ? currentName : this.props.name;
        this.setState({name: this.props.name})
        // this.props.name ? this.state.name : this.setState({name: nextName})
    }

    render(){
    return (
    <div>
        <div className="Hello">
        Hello {this.state.name}
        </div>
        <button onClick={this.yourName}>Your Name</button>
    </div>
    )
}
}

export default Greeting;