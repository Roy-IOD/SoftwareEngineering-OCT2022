import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import "../fonts/Burbank-Big-Condensed-Black.ttf"


function ShopCard(props) {
      return (  
            <Card sx={{ maxWidth: 300, height: 300, margin: 3, boxShadow: 10 }} elevation={5} style={{backgroundColor: '#D3D3D3'}}>
                        <CardContent>
                        <Box component="img" src={props.image} sx={{width: '50%'}} />
                              <Typography variant="h5" color="text.primary" style={{ fontFamily: 'Fortnite',  letterSpacing: '.2rem',}}>
                                    {props.name}
                              </Typography>
                              <Typography variant="h4" style={{ color: 'blue', fontFamily: 'Fortnite',  letterSpacing: '.1rem',}}>
                                    ${props.price}
                              </Typography>
                              <br></br>
                              <Typography variant="body 3" color="text.primary" style={{fontFamily: 'Fortnite',  letterSpacing: '.2rem',}}>
                                    {props.description}
                              </Typography>

                        </CardContent>
            </Card>
      );
};
  
export default ShopCard;