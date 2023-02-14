import React, { useState, useEffect } from 'react';

const WritePost = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, post]);
    setPost('');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(posts.slice(0, -1));
    }, 30000);
    return () => clearTimeout(timer);
  }, [posts]);

  return (
    <div>
        <h1>Write a Post:</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        <ul className='hideBullets'>
            {posts.map((p, i) => (
            <li key={i}>{p}</li>
            ))}
        </ul>
    </div>
  );
};

export default WritePost;
