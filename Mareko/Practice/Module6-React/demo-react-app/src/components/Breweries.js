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
            filterType: '',
            filterState: '',
        }
    }

    //gets the list of breweries for the given page, then updates both the current list of breweries and the current page
    getBreweries = (page, filterType, filterState) => {
        const filterParam = filterType === '' ? '' : '&by_type='+filterType;
        const stateParam = filterState === '' ? '' : '&by_name='+filterState;

        console.log('getting '+filterType+' breweries on page number '+page)

        fetch('https://api.openbrewerydb.org/breweries?per_page=50&page='+page+filterParam+stateParam)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({breweries: jsonData, currentPage: page, filterType: filterType, filterState: filterState})
        })        
    }

    //once the component is definitely being rendered on screen, load in the API data
    componentDidMount() {
        this.getBreweries(this.state.currentPage, this.state.filterType, this.state.filterState)
    }

    handleChangePage = (newPage) => {
        this.getBreweries(newPage, this.state.filterType, this.state.filterState)
    }

    render() {
        return (
            <div className="Breweries componentBox">
                <h2>Breweries</h2>



                {/* how could we add a new component to filter the list by brewery type, or state? see https://www.openbrewerydb.org/documentation */}
                <TypeFilter selectedFilter={this.state.filterType} currentPage={this.state.currentPage} filterBreweryHandler={this.getBreweries}/>

                <StateFilter selectedFilters={this.state.filterState} currentPage={this.state.currentPage} filterStateHandler={this.getBreweries.filterState}/>

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
                <option value="micro">Micro</option>
                <option value="nano">Nano</option>
                <option value="regional">Regional</option>
            </select>
        </div>
    )
}

function StateFilter (props) {

    return (
        <div className="StateFilter">

            <form name="filterType" value={props.selectedFilters} onChange={(e) => props.filterStateHandler(props.currentPage, e.target.value)}>
                
                <h4>Filter by State...</h4>
                <input type="checkbox" id="state1" name="state1" value="new_york"/>
                <label for="vehicle1"> New York</label><br/>
                <input type="checkbox" id="state2" name="state2" value="california"/>
                <label for="vehicle2"> California </label><br/>
                <input type="checkbox" id="state3" name="state3" value="new_jeresey"/>
                <label for="vehicle3"> New Jersey </label>

            </form>


        </div>


    )


}


export default Breweries;