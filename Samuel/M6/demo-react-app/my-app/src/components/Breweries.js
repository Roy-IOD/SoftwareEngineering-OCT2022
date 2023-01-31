import React, { Component } from 'react';
import Pagination from './Pagination';

class Breweries extends Component {

    constructor(props) {
        super(props);

        this.state = {
            breweries: [],
            currentPage: 1,
            filterType: ''
        }
    }

    getBreweries = (page, filterType) => {
        const filterParam = filterType === '' ? '' : '&by_state='+filterType;

        console.log('getting '+filterType+' breweries on page number '+page)

        fetch('https://api.openbrewerydb.org/breweries?per_page=50&page='+page+filterParam)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({breweries: jsonData, currentPage: page, filterType: filterType})
        })        
    }

    componentDidMount() {
        this.getBreweries(this.state.currentPage, this.state.filterType)
    }

    handleChangePage = (newPage) => {
        this.getBreweries(newPage, this.state.filterType)
    }

    render() {
        return (
            <div className="Breweries componentBox">
                <h2>Breweries</h2>

                {/* how could we add a new component to filter the list by brewery type, or state? see https://www.openbrewerydb.org/documentation */}
                <TypeFilter selectedFilter={this.state.filterType} currentPage={this.state.currentPage} filterBreweryHandler={this.getBreweries}/>

                <ul className="hideBullets">
                    {this.state.breweries.map(brewery => //try also moving the below out into a separate Brewery component
                        <li key={brewery.id}><a target="_blank" href={`https://api.openbrewerydb.org/breweries/${brewery.id}`}>{brewery.name}</a> is 
                         a {brewery.brewery_type} brewery in {brewery.state}, {brewery.country}</li>
                    )}
                </ul>
                {/* just reloads the list of breweries with the next page number */}
                {/* <button onClick={() => this.getBreweries(this.state.currentPage + 1)}>Next Page</button> */}

                {/* how could we move the paging into its own component? */}
                <Pagination currentPage={this.state.currentPage} changePageHandler={this.handleChangePage} />
            </div>
        );
    }
}

function TypeFilter(props) {

    //try adding the full list of brewery types from https://www.openbrewerydb.org/documentation here as an array and using .map() to fill the select options

    return (
        <div className="TypeFilter">
            <select name="filterType" value={props.selectedFilter} onChange={(e) => props.filterBreweryHandler(props.currentPage, e.target.value)}>
                <option value="">Choose an option</option>
                <option value="new york">New York</option>
                <option value="cincinnati">California</option>
                <option value="ohio">Ohio</option>
                <option value="indiana">Indiana</option>
                <option value="texas">Texas</option>
                <option value="oklahoma">Oklahoma</option>
            </select>
        </div>
    )
}

export default Breweries;