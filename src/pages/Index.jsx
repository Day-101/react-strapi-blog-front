import React, { useEffect, useState } from 'react';
import CardPost from '../components/Card/CardPost';
import PostsContentLoader from '../components/Loaders/PostsContentLoader'
import PostsAPI from '../services/postsAPI';
import { Grid } from '@material-ui/core';
import SimpleAccordion from 'components/Accordion/SimpleAccordion';

const Index = () => {
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
    <div className="posts">
      <SimpleAccordion />
      <Grid>
        {isLoading ?
          <PostsContentLoader /> 
          : posts.map(post => <CardPost post={post} key={post.id} />
        )}
      </Grid>
    </div>
  );
};

export default Index;