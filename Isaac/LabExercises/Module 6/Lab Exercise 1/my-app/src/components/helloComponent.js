import React from 'react';

class MyComponent extends React.Component {
     constructor(props) {
      super(props);
      this.state = {name: 'World'};
      this.myName = this.myName.bind(this);
      }
      myName = () => {
            this.setState({name: 'Isaac'})
      }
      changeName = () => {
            let newName = this.state.name === 'World' ? 'Isaac' : 'World';
            this.setState({name: newName})
      }

      render() {
      return (
      <div>
            <div className="HelloUser">Hello {this.state.name}</div>
            <button onClick={this.changeName}>Name</button>
      </div>
      )
}};

export default MyComponent