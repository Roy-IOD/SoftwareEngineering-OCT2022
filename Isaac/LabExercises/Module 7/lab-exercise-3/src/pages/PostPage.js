import React, {useState} from 'react';
import BlogPosts from '../components/Posts';
import AddPost from '../components/AddPost';
import { blogPosts } from '../components/Posts';

function Posts(){

    const [arr, setArr] = useState(blogPosts)

    return(
        <div>
            <h1> Add a Post</h1>
            <AddPost updatePosts={setArr} currentPosts={arr}/>
            <h1> Current Posts </h1>
            <BlogPosts currentPosts={arr}/>
        </div>
        )
    }
    
    export default Posts