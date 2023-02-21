import {useState, useEffect} from 'react'
import axios from 'axios'
import BasicCard from './BasicCard'
import Grid from '@mui/material/Grid';

function DataList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('/posts') 
            .then(response => {
                let post = response.data;
                console.log(post)
                setPosts(post)
            })
    }
    )

    return (
        <div>
          <Grid container spacing={2}>
            {
              posts.map((post) => 
              
              
              <Grid item xs={6} md={3} lg={2}>
             
              <BasicCard
              title={post.title}
              body={post.body}/>
              </Grid>
              
              )
            }
            </Grid>
        </div>
    )
}

//form 
//button - triggers capturing form values, add to existings post and calling setPosts 

export default DataList