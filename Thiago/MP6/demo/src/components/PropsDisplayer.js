import React from 'react'

class PropsDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props); //changes the props object into a string
        console.log(this.props)

        return (
            <div>
                <h1>CHECK OUT MY PROPS OBJECT {this.props.name}</h1>
                <h2>{stringProps}</h2>

                <div>Drinks: {this.props.drinks.join()}</div> {/* joins all the elements of the drinks array into a comma separated string */}
                <div>{this.props.number1} + {this.props.number2} = {this.props.number1 + this.props.number2}</div> {/* the JS in these curly brackets will be evaluated */}
            </div>
        );
    }
}

export default PropsDisplayer