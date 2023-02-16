import { useState } from 'react';
import { Card, Button, CardActions } from '@mui/material';

function PostForm(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        const newPost = {userId: 9, id: props.postArray.length+1, title: title, body: body};
        console.log('before postUpdater');
        props.postUpdater([ newPost, ...props.postArray,]);
        console.log('after postupdater');
    }

    return (
        <form onSubmit={handleSubmit}>
            Title<input name='title' value={title} onChange={(e) =>
                    setTitle(e.target.value)}>
                </input>
            Body<input name='body' value={body} onChange={(e) =>
                    setBody(e.target.value)}>
                </input>
            <button>Save Post</button>
        </form>

        // <Box component="form" noValidate autoComplete="off" m='auto' sx={{backgroundColor: 'rgba(255,255,255,0.3)', padding: '1em', maxWidth: 600}}>            
        // <div className="formRow">
        //     {/* <label htmlFor="username">Username: </label> */}
        //     {/* every time the input changes, store the latest value into state */}
        //     {/* <input id="username" value={localUsername} name="username" onChange={ handleInputChange }/> */}
        //     <TextField name="username" label="Username" value={localUsername} onChange={ handleInputChange } variant="outlined" focused />
        // </div>

        // <div className="formRow">
        //     {/* <label htmlFor="password">Password: </label> */}
        //     {/* every time the input changes, store the latest value into state */}
        //     {/* <input type="password" id="password" name="password" value={password} onChange={ handleInputChange } /> */}
        //     <TextField name="password" type="password" label="Password" value={password} onChange={ handleInputChange } variant="outlined" />

        // </div>

        // <Button variant="outlined" onClick={handleLogin}>Login</Button>
        // </Box>

    )
}

export default PostForm