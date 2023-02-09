import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, Button, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function StudentCard(props) {

    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345, margin: 10 }} elevation={5}>
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
                <Button size="small" color="primary" onClick={() => navigate(props.id)}>
                    Read More
                </Button>
            </CardActions>            
        </Card>
    )
}

export default StudentCard;