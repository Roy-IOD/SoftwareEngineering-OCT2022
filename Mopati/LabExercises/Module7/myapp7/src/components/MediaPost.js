import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MediaPostForm from "./MediaPostForm";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

function MediaPostApp() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        let jsonPosts = response.data;
        setPosts(jsonPosts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleButton = (post) => {
    setNewPost(post);
    setOpen(true);
  };

  return (
    <div className="MediaPostApp componentBox">
      <h2>Fake Placeholder Data </h2>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={6} md={3} lg={2} key={post.id}>
            <StudentListItem post={post} handleButton={handleButton} />
          </Grid>
        ))}
      </Grid>
      <MediaPostForm postLists={posts} handleNewPost={setPosts} />
      {/* <SimpleDialog
        open={open}
        onClose={() => setOpen(false)}
        title={newPost.title}
        content={"Quote reads " + newPost.body}
      /> */}
    </div>
  );
}

function StudentListItem(props) {
  const post = props.post;

  return (
    <li>
      <div className="avatar">
        <Link to={`/posts/${post.id}`}>
          <StudentAvatar name={post.title} set="set5" />
        </Link>
      </div>
      <div className="details">
        <strong>{post.title}</strong>{" "}
        <span className="location">body: {post.body}</span>
        <Button onClick={() => props.handleButton(post)}>Quote</Button>
      </div>
    </li>
  );
}

function StudentAvatar(props) {
  const avatarSize = props.size ? props.size + "x" + props.size : "50x50";
  const roboset = props.set ? props.set : "set1";

  return (
    <img
      src={`https://robohash.org/${props.name}?size=${avatarSize}&set=${roboset}`}
      alt={props.name}
    />
  );
}

export default MediaPostApp;
