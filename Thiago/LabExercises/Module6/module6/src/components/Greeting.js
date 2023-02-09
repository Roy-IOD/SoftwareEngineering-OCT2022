// import React from "react";

// class Greeting extends React.Component {
//   render() {

//     return (
//       <div>
//         <h1>Hello World</h1>
//         <h1>Hello {this.props.name}</h1>
//       </div>
//     );
//   }
// }

// export default Greeting;

import React from 'react';

class MyComponent extends React.Component {
     constructor(props) {
      super(props);
      this.state = {name: 'World'};
      this.myName = this.myName.bind(this);
      }
      myName = () => {
            this.setState({name: 'Thiago'})
      }
      changeName = () => {
            let newName = this.state.name === 'World' ? 'Thiago' : 'World';
            this.setState({name: newName})
      }

      render() {

      return (
      <div>
            <div className="HelloUser">Hello {this.state.name}</div>
            <button onClick={this.changeName}>Change</button>
      </div>
      )
}};

export default MyComponent