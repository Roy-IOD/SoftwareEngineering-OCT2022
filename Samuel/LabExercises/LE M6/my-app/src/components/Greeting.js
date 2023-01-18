import React from 'react'

// class Greeting extends React.Component{
//     render(){
//         if (this.props.name= '')
//     return (
//         <div className="Hello">
//         Hello world
//     </div>); else (
//         <div className="Hello">
//         Hello {this.props.name}
//     </div>
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
    render(){
    return (
        <div className="Hello">
        Hello {this.props.name ? this.props.name : 'World'}
    </div>)
}
}

export default Greeting;