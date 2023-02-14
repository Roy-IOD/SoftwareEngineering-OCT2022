import React from 'react';
import CardButton from './Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function StudentCard(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                  {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
                  {props.job}
          </Typography>
          <CardButton location={props.location}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default StudentCard;