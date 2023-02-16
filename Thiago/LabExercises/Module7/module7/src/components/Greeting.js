import React, { useState } from 'react';

function Hello(){
  const[name, setName] = useState ('World')
  const changeName = () => {
            let newName = name === 'World' ? 'Thiago' : 'World';
           setName(newName)
               }
return (
  <div>
        <div className="HelloUser">Hello {name}</div>
        <button onClick={changeName}>Change</button>
  </div>
  )
};

// class MyComponent extends React.Component {
//      constructor(props) {
//       super(props);
//       this.state = {name: 'World'};
//       this.myName = this.myName.bind(this);
//       }
//       myName = () => {
//             this.setState({name: 'Thiago'})
//       }
//       changeName = () => {
//             let newName = this.state.name === 'World' ? 'Thiago' : 'World';
//             this.setState({name: newName})
//       }

//       render() {

//       return (
//       <div>
//             <div className="HelloUser">Hello {this.state.name}</div>
//             <button onClick={this.changeName}>Change</button>
//       </div>
//       )
// }

export default Hello