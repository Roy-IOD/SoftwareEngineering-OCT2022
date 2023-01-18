import React from 'react';

class MyComponent extends React.Component {
      render() {
      return (
      <div className="HelloUser">
            Hello {this.props.name}</div>
      )
}};

export default MyComponent