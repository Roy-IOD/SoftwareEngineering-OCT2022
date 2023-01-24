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
      const filterParam = filterType === '' ? '' : '&by_name='+filterType;
                  console.log('getting '+filterType+' breweries on page number '+page)
        fetch('https://api.openbrewerydb.org/breweries?per_page=50&page='+page+filterParam)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData)
            this.setState({breweries: jsonData, currentPage: page, filterType: filterType})
        })        
    }

    componentDidMount() {
        this.getBreweries(this.state.currentPage, this.state.filterType)
    }

    handleChangePage = (newPage) => {
        console.log('getting breweries on page number '+newPage)
        this.getBreweries(newPage, this.state.filterType)
    }

    render() {
        return (
            <div className="Breweries componentBox">
                <h2>Breweries</h2>
                        <SearchBar selectedFilter={this.state.filterType} filterBreweryHandler={this.getBreweries} currentpage={this.state.currentPage}/>
                <ul className="hideBullets">
                    {this.state.breweries.map(brewery => 
                        <li key={brewery.id}><a target="_blank" href={`https://api.openbrewerydb.org/breweries/${brewery.id}`}>{brewery.name}</a> is 
                         a {brewery.brewery_type} brewery in {brewery.state}, {brewery.country}</li>
                    )}
                </ul>
                  <Pagination currentPage={this.state.currentPage} changePageHandler={this.handleChangePage} />
            </div>
        );
    }
}

/* 
function TypeFilter(props) {
      return (
            <div className='TypeFilter'>
                  <select name='filterType' onChange={(e) => props.filterBreweryHandler(props.currentpage, e.target.value)}>
                        <option value="micro">Micro</option>
                        <option value="nano">Nano</option>
                        <option value="regional">Regional</option>
                  </select>
            </div>

      )
}
*/

function SearchBar(props) {
      return (
            <div className='searchBar'>
                  <input type='text' placeholder='Search...' onChange={(e) => props.filterBreweryHandler(props.currentpage, e.target.value)}>
                  </input>
            </div>

      )
}


export default Breweries;