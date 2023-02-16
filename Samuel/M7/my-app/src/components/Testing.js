import React from 'react'
import {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Testing() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    return(
        <div class="componentBox">
            <h1>Testing MUI </h1>
            <Card sx={{ maxWidth: 345 }} m="auto">
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://e0.365dm.com/23/01/768x432/skysports-arsenal-jorginho_6042362.jpg?20230131190315"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Arsenal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Arsenal made three transfer signings in the January transfer window.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium">Share</Button>
                <Button onClick={handleClickOpen('paper')} size="medium">Learn More</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">Arsenal January Transfers</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {[...new Array(1)]
                        .map(
                            () => `Arsenal have completed their January business with three signings; 
                            Leandro Trossard, Jakub Kiwior and Jorginho arrived for a combined total of £59m; 
                            the Gunners were interested in Mykhailo Mudryk and Moises Caicedo but the moves failed; 
                            do Arsenal have enough to win the league?`,
                        )
                        }
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </CardActions>
            </Card>
        </div>
    )
}

export default Testing

