import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import "../fonts/Burbank-Big-Condensed-Black.ttf"
import { Button } from '@mui/material';
import ReactCardFlip from 'react-card-flip';


function NewsCard(props) {
      const [cardFlip, setCardFlip] = useState(false)
   
      return (  
            <ReactCardFlip isFlipped={cardFlip} flipDirection='horizontal'>
                  <Card sx={{ width: 400, height: 350, boxShadow: 10 }} elevation={5} style={{backgroundColor: 'white'}}>
                        <CardContent>
                                    <Typography variant="h4" style={{ color: 'black', fontFamily: 'Fortnite',  letterSpacing: '.1rem',}}>
                                          {props.title}
                                    </Typography>
                                    <br></br>
                                    <Box component="img" src={props.image} sx={{width: '100%', height: '75%'}} />
                                    <Button size="large" color="primary" onClick={() => {setCardFlip(true)}} style={{ color: 'blue', fontFamily: 'Fortnite',  letterSpacing: '.1rem',}}>
                                    Read More
                                    </Button> 
                        </CardContent>  
                  </Card>
            
                  <Card sx={{ width: 400, height: 350, boxShadow: 10 }} elevation={5} style={{backgroundColor: 'white'}}>
                        <CardContent >
                              <Typography variant="body1" color="text.secondary">
                                    {props.body}
                              </Typography>
                              <br></br>
                              <Button size="large" color="primary"  onClick={() => {setCardFlip(false)}} style={{ color: 'blue', fontFamily: 'Fortnite',  letterSpacing: '.1rem',}}>
                              Go Back
                              </Button> 
                        </CardContent>  
                  </Card>
            </ReactCardFlip>
      );
};
  
export default NewsCard;