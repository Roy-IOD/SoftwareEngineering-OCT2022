import React from 'react'

class PropsDisplayer extends React.Component {
      render() {
            const stringProps = JSON.stringify(this.props);
            console.log(this.props)
      return (
            <div>
            <h1>CHECK OUT MY PROPS OBJECT</h1>
            <h2>{stringProps}</h2>
            </div>
            );
      }
}

export default PropsDisplayer
     