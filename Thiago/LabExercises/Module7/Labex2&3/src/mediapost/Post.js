import React from "react";
import PostItem from "./PostItem";
import Grid from '@mui/material/Grid';

export const blogPosts = [
    {
      id: 1,
      body: `JavaScript is the world most popular 
      lightweight, interpreted compiled programming 
      language. It is also known as scripting 
      language for web pages. It is well-known for 
      the development of web pages, many non-browser 
      environments also use it. JavaScript can be 
      used for Client-side developments as well as 
      Server-side developments`,
    },
    {
      id: 2,
      body: `There are many real-life examples of 
      a stack. Consider an example of plates stacked 
      over one another in the canteen. The plate 
      which is at the top is the first one to be 
      removed, i.e. the plate which has been placed 
      at the bottommost position remains in the 
      stack for the longest period of time. So, it 
      can be simply seen to follow LIFO(Last In 
      First Out)/FILO(First In Last Out) order.`,
    },
    {
      id: 3,
      body: `The word Algorithm means “a process 
      or set of rules to be followed in calculations 
      or other problem-solving operations”. Therefore 
      Algorithm refers to a set of rules/instructions 
      that step-by-step define how a work is to be 
      executed upon in order to get the expected 
      results. `,
    },
    {
      id: 4,
      body: `An interconnection of multiple devices, 
      also known as hosts, that are connected using 
      multiple paths for the purpose of sending/
      receiving data media. Computer networks can 
      also include multiple devices/mediums which 
      help in the communication between two different 
      devices; these are known as Network devices
      and include things such as routers, switches,
      hubs, and bridges. `, 
    },
  ];

  
  function BlogPosts(props) {   

      return (
      <div className="componentBox">
                  <Grid container spacing={2} >
                        {
                              props.currentPosts.map((post) => 

                                    <Grid item xs={6} md={3} lg={2} key={post.id}>
                                          <PostItem body={post.body} />
                                    </Grid>
                              )
                        }
                  </Grid>
      </div>
      );
};


export default BlogPosts;