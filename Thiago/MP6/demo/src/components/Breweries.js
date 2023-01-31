import React, { Component } from 'react';

import Pagination from './Pagination';

//lazy loaded component which reads data from an API and therefore may cause delay when rendering
class Breweries extends Component {
@@ -10,27 +10,31 @@ class Breweries extends Component {
        //by default the list of breweries is empty and we're showing page 1
        this.state = {
            breweries: [],
            currentPage: 1
            currentPage: 1,
            filterType: ''
        }
    }

    //gets the list of breweries for the given page, then updates both the current list of breweries and the current page
    getBreweries = (page) => {
        fetch('https://api.openbrewerydb.org/breweries?per_page=50&page='+page)
    getBreweries = (page, filterType) => {
        const filterParam = filterType === '' ? '' : '&by_type='+filterType;

        console.log('getting '+filterType+' breweries on page number '+page)

        fetch('https://api.openbrewerydb.org/breweries?per_page=50&page='+page+filterParam)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({breweries: jsonData, currentPage: page})
            this.setState({breweries: jsonData, currentPage: page, filterType: filterType})
        })        
    }

    //once the component is definitely being rendered on screen, load in the API data
    componentDidMount() {
        this.getBreweries(this.state.currentPage)
        this.getBreweries(this.state.currentPage, this.state.filterType)
    }

    handleChangePage = (newPage) => {
        console.log('getting breweries on page number '+newPage)
        this.getBreweries(newPage)
        this.getBreweries(newPage, this.state.filterType)
    }

    render() {
@@ -39,6 +43,7 @@ class Breweries extends Component {
                <h2>Breweries</h2>

                {/* how could we add a new component to filter the list by brewery type, or state? see https://www.openbrewerydb.org/documentation */}
                <TypeFilter selectedFilter={this.state.filterType} currentPage={this.state.currentPage} filterBreweryHandler={this.getBreweries}/>

                <ul className="hideBullets">
                    {this.state.breweries.map(brewery => //try also moving the below out into a separate Brewery component
@@ -47,25 +52,29 @@ class Breweries extends Component {
                    )}
                </ul>
                {/* just reloads the list of breweries with the next page number */}
                <button onClick={() => this.getBreweries(this.state.currentPage + 1)}>Next Page</button>
                {/* <button onClick={() => this.getBreweries(this.state.currentPage + 1)}>Next Page</button> */}

                {/* how could we move the paging into its own component? */}
                {/* <Pagination currentPage={this.state.currentPage} changePageHandler={this.handleChangePage} /> */}
                <Pagination currentPage={this.state.currentPage} changePageHandler={this.handleChangePage} />
            </div>
        );
    }
}

// function Pagination(props) {
//     const prevPage = props.currentPage === 1 ? null : <button onClick={() => props.changePageHandler(props.currentPage - 1)}>Previous Page</button>;

//     return (
//         <div className="Pagination">
//             {prevPage}
//             <span className="current"> {props.currentPage} </span>
//             <button onClick={() => props.changePageHandler(props.currentPage + 1)}>Next Page</button>
//         </div>
//     )
// }
function TypeFilter(props) {

    //try adding the full list of brewery types from https://www.openbrewerydb.org/documentation here as an array and using .map() to fill the select options

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