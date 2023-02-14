import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export function SimpleDialog(props) {
    const { onClose, open } = props;


    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} autoFocus>Close</Button>
            </DialogActions>            
        </Dialog>
    );
}


export default function SimpleDialogDemo() {

    const [open, setOpen] = React.useState(false);

    return (
        <div>

            <Button variant="outlined" onClick={() => setOpen(true)}>
                Open simple dialog
            </Button>

            <SimpleDialog
                open={open}
                onClose={() => setOpen(false)}
                title="My Simple Dialog"
                content="Message text shows here to inform the user what their options are"
                />
        </div>
    );
}