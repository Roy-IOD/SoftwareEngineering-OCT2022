import React, { Component } from 'react';

class Breweries extends Component {

    constructor(props) {
        super(props);

        this.state = {
            breweries: [],
            currentPage: 1
        }
    }

    getBreweries = (page) => {
        fetch('https://api.openbrewerydb.org/breweries?per_page=50&page='+page)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({breweries: jsonData, currentPage: page})
        })        
    }

    componentDidMount() {
        this.getBreweries(this.state.currentPage)
    }

    render() {
        return (
            <div className="Breweries componentBox">
                <h2>Breweries</h2>
                <ul className="hideBullets">
                    {this.state.breweries.map(brewery =>
                        <li key={brewery.id}><a target="_blank" href={`https://api.openbrewerydb.org/breweries/${brewery.id}`}>{brewery.name}</a> is 
                         a {brewery.brewery_type} brewery in {brewery.state}, {brewery.country}</li>
                    )}
                </ul>
                <button onClick={() => this.getBreweries(this.state.currentPage + 1)}>Next Page</button>
            </div>
        );
    }
}

export default Breweries;