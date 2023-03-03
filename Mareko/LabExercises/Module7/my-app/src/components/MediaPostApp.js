import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NewPost from './NewPost';

function MediaPostApp() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(data => setPosts(data));
    }, [])

    console.log(posts)

    return(
        <div>
            <h1>Message Board</h1>
            <NewPost posts={posts} setPosts={setPosts}/>

            <ul>
                {posts.slice(0, 3).map(post => (
                    <Card key={post.id} sx={{ my: 3 }}>
                        <CardContent>
                            <Box>
                                <h2>{post.title}</h2>
                            </Box>
                            <Box>
                                <p>{post.body}</p>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </ul>
        </div>
    );
}

export default MediaPostApp;