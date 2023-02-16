import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {

const [showMore, setShowMore] = useState(false)
const onClick = () => setShowMore(true)

const More = () => <div>Red spans genres and departs from Swift's previous country-pop sound; 
                        it incorporates eclectic elements of styles such as dance-pop, dubstep, 
                        Britrock, arena rock, and hip hop.The album's first half consists of country 
                        and pop songs intertwined with each other; three tracks—"22", "I Knew You Were 
                        Trouble", and "We Are Never Ever Getting Back Together"—embrace a pure pop 
                        production, electronic vocal processing, and hip-hop-influenced bass drums. </div>

  return (
    
<>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}

        image="https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Taylor Swift - Red Album
        </Typography>

        <Typography variant="body2" color="text.secondary">
        Red is the fourth studio album by American singer-songwriter Taylor Swift. 
        It was released on October 22, 2012, by Big Machine Records. 
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={onClick} size="small">Read More</Button>
      </CardActions>
    </Card>
    {showMore ? <More/> : null};
    </>
  );

  
}


