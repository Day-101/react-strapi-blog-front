import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Box } from '@material-ui/core';

const PostsContentLoader = () => {
  return (
    <Box>
      <Skeleton variant='rect' width={210} height={118} />
      <Skeleton width='60%' />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Box>
  );
};

export default PostsContentLoader;