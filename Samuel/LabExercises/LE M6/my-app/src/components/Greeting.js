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

//WORKING NOT USING PROPS
// class Greeting extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {name: 'World'};

//         this.yourName = this.yourName.bind(this);
//     }

//     yourName = () => {
        
//         this.setState({name: 'Sam'});
        
//     }

//     changeName = () => {

//         let newName = this.state.name === 'World' ? 'Sam' : 'World';

//         this.setState({name: newName});
//     }

//     render(){
//     return (
//     <div>
//         <div className="Hello">
//         Hello {this.state.name}
//         </div>
//         <button onClick={this.changeName}> Your Name </button>
//     </div>
//     )
// }
// }

//USING PROPS
class Greeting extends React.Component{
    constructor(props){
        super(props);

        this.state = {name: 'World'};

        this.yourName = this.yourName.bind(this);
    }

    yourName = () => {
        
        this.setState({name: this.props.name});
        
    }

    changeName = () => {

        let newName = this.state.name === 'World' ? this.props.name : 'World';

        this.setState({name: newName});
    }

    render(){
    return (
    <div>
        <div className="Hello">
        Hello {this.state.name}
        </div>
        <button onClick={this.changeName}> Your Name </button>
    </div>
    )
}
}

export default Greeting;