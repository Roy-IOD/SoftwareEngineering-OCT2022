import React from 'react'

// class Greeting extends React.Component{
//     render(){
//      
//     return (
//         <div className="Hello">
//         Hello {props.name} world
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

    yourName() {
        this.setState({name: this.props.name})
    }
    render(){
    return (
        <div className="Hello">
        Hello {this.props.name ? this.props.name : 'World'}
    </div>)
}
}

export default Greeting;