import React from 'react';
import { useState } from 'react';
import { TextField } from '@mui/material';

function SearchCosmetics(props) {
      const [searchText, setSearchText] = useState('')
      const handleChange = (e) => {
            setSearchText(e.target.value)
            console.log(e.target.value)
            let updatedCosmetics=[...props.currentCosmetics]
            updatedCosmetics = props.fullListCosmetics.current.filter((item) => {
                  return item.name.toLowerCase().includes(e.target.value.toLowerCase());
            });
            props.setCosmetics(updatedCosmetics)
      };
    
      return (
            <div>
                  <TextField variant='outlined' placeholder='Search Here...' onChange={handleChange} value={searchText}/>
            </div>
      )
}

  export default SearchCosmetics