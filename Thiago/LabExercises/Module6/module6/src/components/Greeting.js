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

import React from 'react'

class Greeting extends React.Component{
  constructor(props){
      super(props);
      this.state = {name: 'World'};
      this.yourName = this.yourName.bind(this);
  }

  yourName = () => {
      this.setState({name: this.props.name})
  }
  
  render(){
  return (
  <div>
      <div className="Hello">
      Hello {this.state.name}
      </div>
      <button onClick={this.yourName}>Change World</button>
  </div>
  )
}
}

export default Greeting;