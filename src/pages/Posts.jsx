import React, { useEffect, useState } from 'react';
import CardPost from '../components/Card/CardPost';
import PostsContentLoader from '../components/Loaders/PostsContentLoader'
import PostsAPI from '../services/postsAPI';
import { Grid } from '@material-ui/core';

import FileUpload from '../components/FileUpload';

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetchAllPosts();
  },[]);

  const fetchAllPosts = async () => {
    const posts = await PostsAPI.findAll();
    setPosts(posts);
    setIsLoading(false);
  };

  return (
    <>
      <div className="file-upload-container">
        <div className="V-Center">
          <FileUpload />
        </div>
      </div>
      <div className="posts">
        <h1>List Posts</h1>
        <Grid container spacing={3}>
          {isLoading ? (
            <PostsContentLoader />
            ) : posts.map(post => <CardPost post={post} key={post.id} />)}
        </Grid>
      </div>
    </>
  );
};

export default Posts;