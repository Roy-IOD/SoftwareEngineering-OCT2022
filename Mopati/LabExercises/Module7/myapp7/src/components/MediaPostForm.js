import React, { useState } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { Button, TextField, Box } from "@mui/material";

function MediaPostForm(props) {
  //   const { newPost, setNewPost } = React.useContext(UserContext);
  const { theme } = React.useContext(ThemeContext);

  const [postID, setPostID] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    props.handleNewPost([
      ...props.postLists,
      { id: postID, title: postTitle, body: postBody },
    ]);
    setPostID("");
    setPostTitle("");
    setPostBody("");
  };

  const handleInputChange = (event) => {
    const target = event.target;
    if (target.name === "postID") setPostID(target.value);
    if (target.name === "postTitle") setPostTitle(target.value);
    if (target.name === "postBody") setPostBody(target.value);
  };

  return (
    <div
      className="MediaPostForm componentBox"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        m="auto"
        sx={{
          backgroundColor: "rgba(255,255,255,0.3)",
          padding: "1em",
          maxWidth: 600,
        }}
      >
        <div className="formRow">
          <TextField
            name="postID"
            label="ID"
            value={postID}
            onChange={handleInputChange}
            variant="outlined"
            focused
          />
        </div>

        <div className="formRow">
          <TextField
            name="postTitle"
            label="Title"
            value={postTitle}
            onChange={handleInputChange}
            variant="outlined"
          />
        </div>

        <div className="formRow">
          <TextField
            name="postBody"
            label="Body"
            value={postBody}
            onChange={handleInputChange}
            variant="outlined"
            multiline
            rows={4}
          />
        </div>

        <Button variant="outlined" onClick={handlePost}>
          Add Post
        </Button>
      </Box>
    </div>
  );
}

export default MediaPostForm;
