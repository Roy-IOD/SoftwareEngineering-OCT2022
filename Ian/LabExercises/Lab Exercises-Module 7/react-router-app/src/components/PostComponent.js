import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Grid, useRadioGroup } from '@mui/material';
import axios from 'axios';
import PostCard from './PostCard';
import PostForm from './PostForm';

function SocialPost() {

    const [posts, setPosts] = useState([])
    // const [updated, setUpdated] = useState(false) //do I need this part?
    const [newPost, setNewPost] = useState({title: '', body: ''});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            let postArray = response.data;
            console.log(postArray)
            setPosts(postArray)
        })
        .catch(e => {
            setPosts({text: e.message, author:'Server Request Failed'})
        })
    }, [])

        
    return (
        <div className='socialPost componentBox'>
            <h2>Display Posts from the Backend</h2>
            <PostForm postArray={posts} postUpdater={setPosts}/>
            <Grid container spacing={2}>
                {
                    posts.map((posts) =>
                    <Grid item xs={6} md={3} lg={2} key={posts.id} >
                       <PostCard 
                            id={posts.id}
                            title={posts.title}
                            body={posts.body} />
                    </Grid>
                ) 
            }
            <blockquote className='postTitle'>{posts.title}</blockquote>
            <blockquote><cite>{posts.userId}</cite>: {posts.text}</blockquote>
            </Grid>
            
            </div>
    )
}

export default SocialPost