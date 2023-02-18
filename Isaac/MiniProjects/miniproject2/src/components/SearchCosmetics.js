import React from 'react';
import { TextField } from '@mui/material';

function SearchCosmetics(props) {
      const handleChange = (e) => {
            e.preventDefault();
            let updatedCosmetics=[...props.currentCosmetics]
            updatedCosmetics = updatedCosmetics.filter((item) => {
                  return item.toString().includes(e.target.value);
            });
            props.setCosmetics(updatedCosmetics)
      };
    
      return (
            <div>
                  <TextField variant='outlined' placeholder='Search Here...' onChange={handleChange}/>

            </div>
      )
}

  export default SearchCosmetics