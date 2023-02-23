import React from 'react';
import Typography from '@mui/material/Typography';
import "../fonts/Burbank-Big-Condensed-Black.ttf"


function MapCard(props) {
      return (  
            <div>
                  <Typography variant="h5" color="text.primary" style={{ color: 'black', fontFamily: 'Fortnite',  letterSpacing: '.1rem',}} >
                        {props.name}
                  </Typography>      
            </div>
      );
};
  
export default MapCard;