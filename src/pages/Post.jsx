import React, { useEffect, useState } from 'react';
import { useParams, Link,useHistory } from 'react-router-dom';
import { API_URL } from '../config';
import PostsAPI from '../services/postsAPI';
// import CommentsAPI from '../services/commentsAPI';

import FormComment from '../components/Forms/FormComment'

import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { AiFillCaretLeft } from 'react-icons/ai';

const Post = () => {
  const history = useHistory()
  const {id} = useParams();
  const [postState, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [comments, setComments] = useState([]);

  const fetchPost = async () => {
    const post = await PostsAPI.findOne(id);
    setPost(post);
    setIsLoading(true);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try{
      await PostsAPI.deletePost(id);
      history.replace("admin");
    }catch(error){
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const comment = await PostsAPI.getComments(id);
      setComments(comment);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
    console.log('Hello !')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] ); // fuite mémoire avec "comments" en deuxième argument

  return (
    <div>
      <nav>
        <Link to="/">
          <Button variant="contained" color="primary" disableElevation>
            <AiFillCaretLeft />
            <span>Back</span>
          </Button>
        </Link>
      </nav>
      <Grid container>
        <Grid item sm={6}>
          <div className="postImg">
            {isLoading ?
              (postState.image ?
                <img src={API_URL + postState.image.formats.small.url} alt={postState.image.alternativeText}  />
                : <img src='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' alt="empty" />
              ) : <Skeleton variant="rect" width="100%" height={400} />
            }
          </div>
        </Grid>
        <Grid item sm={6}>
          <h1>{isLoading ? postState.title : <Skeleton variant="text" width={300} height={80}/>}</h1>
          <p>
            {isLoading ? postState.content : (
              <>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </>
            )}
          </p>
          <Button variant="contained" onClick={handleDelete}>Supprimer</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <FormComment fetchComments={fetchComments} id={id}/>
        </Grid>
        <Grid item md={6}>
          <List>
            {console.log(comments)}
            {comments && comments.map(comment => (
              <ListItem alignItems="flex-start" key={comment.id}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={comment.pseudo}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                        >
                        {comment.content}
                      </Typography>
                    </>
                  }
                  />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Post;