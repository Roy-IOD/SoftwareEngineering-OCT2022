import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, Button, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function PlayerCard(props) {

    const navigate = useNavigate();

    //see https://mui.com/material-ui/react-card/#basic-card
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }} elevation={5}> {/* try changing the sx values */}
            <CardMedia
                component="img"
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
            </CardContent>
            <CardActions>
                {/* <Button size="small" color="primary" onClick={() => navigate('/students/'+props.id)}>
                    Read More
                </Button> */}

                {/* how could we change this button to open a modal dialog instead? */}
             
                <Button size="small" color="primary" onClick={props.buttonHandler}>
                    Read More
                </Button>             
            </CardActions>            
        </Card>
    )
}

export default PlayerCard;