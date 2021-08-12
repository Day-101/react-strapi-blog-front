import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';
// import { Grid } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '15px auto',
  },
  media: {
    height: 140,
  },
});

const CardPost = ({post}) => {
  
  const classes = useStyles();
  // console.log(post)
  return (
    // <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={`/post/${post.id}`}>
            <CardMedia
              className={classes.media}
              image={post.image !== null ? API_URL + post.image.url : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
              // Revoir la concatenation juste au dessus
              title="Contemplative Reptile"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to={`/post/${post.id}`}>
                {post.title}
              </Link>
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {post.content && post.content.substring(0,100)}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {post.users_permissions_user && post.users_permissions_user.username} | {post.published_at && post.published_at}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/post/${post.id}`}>
            <Button size="small" color="primary">
              Lire la suite
            </Button>
          </Link>
        </CardActions>
      </Card>
    // </Grid>
  );
};

export default CardPost;
