import React, { Component } from 'react';
import Pagination from './Pagination';

//lazy loaded component which reads data from an API and therefore may cause delay when rendering
class Breweries extends Component {

    constructor(props) {
        super(props);

        //by default the list of breweries is empty and we're showing page 1
        this.state = {
            breweries: [],
            currentPage: 1,
            filterType: ''
        }
    }

    //gets the list of breweries for the given page, then updates both the current list of breweries and the current page
    getBreweries = (page, filterType) => {
        const filterParam = filterType === '' ? '' : '&by_type='+filterType;

        console.log('getting '+filterType+' breweries on page number '+page)

        fetch('https://api.openbrewerydb.org/breweries?per_page=50&page='+page+filterParam)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({breweries: jsonData, currentPage: page, filterType: filterType})
        })        
    }

    //once the component is definitely being rendered on screen, load in the API data
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

    let typeList = ["Micro", "nano", "regional", "brewpub", "large", "planning", "bar", "contract", "proprietor", "closed" ]

    return (
        <div className="TypeFilter">
            <select name="filterType" value={props.selectedFilter} onChange={(e) => props.filterBreweryHandler(props.currentPage, e.target.value)}>
                <option value="">Choose an option</option>
                <option value="micro">Micro</option>
                <option value="nano">Nano</option>
                <option value="regional">Regional</option>
            </select>
        </div>
    )
}

export default Breweries;