import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function NewPost(props) {

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(title, body);
        const addPost = {id: props.posts.length, title: title, body: body}
        props.setPosts([addPost, ...props.posts]) 
        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
      

    return (
        <div>
          
          <Button onClick={handleOpen}>New Post</Button>

          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2"> Posts: </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} sx={{ my: 3 }} fullWidth/>

                        <TextField label="Body" variant="outlined" value={body} onChange={(e) => setBody(e.target.value)} sx={{ my: 1 }} fullWidth multiline/>

                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
                    </form>
                </Box>
          </Modal>

        </div>
    );
};

export default NewPost