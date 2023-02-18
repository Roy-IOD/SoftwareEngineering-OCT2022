import React from 'react';

import BasicCard from './BasicCard'
import Grid from '@mui/material/Grid';


function GetCosmetics(props) {
      return (
            <div>
                  <Grid container spacing={2} >
                        {props.currentCosmetics.map((cosmetic) => 
                        <Grid item xs={6} md={3} lg={2} key={cosmetic.id}>
                              <BasicCard title={cosmetic.name} description={cosmetic.description} image={cosmetic.images.icon}/>
                        </Grid>)}
                  </Grid>
            </div>
      )
  }

export default GetCosmetics