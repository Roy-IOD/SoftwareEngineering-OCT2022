import React from 'react';

import CosmeticCard from './CosmeticCard'
import Grid from '@mui/material/Grid';


function GetCosmetics(props) {
      return (
            <div>
                  <Grid wrap='wrap' container spacing={2} >
                        {props.currentCosmetics.slice(0, 12).map((cosmetic) => 
                        <Grid item xs={6} md={3} lg={2} key={cosmetic.id}>
                              <CosmeticCard title={cosmetic.name} description={cosmetic.description} image={cosmetic.images.icon}/>
                        </Grid>)}
                  </Grid>
            </div>
      )
  }

export default GetCosmetics