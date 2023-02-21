import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


function CosmeticCard(props) {
      return (  
            <Card sx={{ maxWidth: 300, height: 250, margin: 3, boxShadow: 10 }} elevation={5} style={{backgroundColor: 'white'}}>
                        <CardContent>
                              <Box component="img" src={props.image} sx={{width: '50%'}} />

                              <Typography variant="body1" color="text.primary">
                                    {props.title}
                              </Typography>
                              <Typography variant="body3" color="text.secondary">
                                    {props.description}
                              </Typography>

                        </CardContent>
            </Card>
      );
};
  
export default CosmeticCard;
