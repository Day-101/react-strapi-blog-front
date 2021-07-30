import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { API_URL } from '../../config';
import { Grid } from '@material-ui/core';
import Cookies from 'js-cookie'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CardFile = ({file}) => {
  // console.log(file)
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(file);
    Cookies.set("fileSelected", JSON.stringify(file));
    // Envoyer la donnée file dans AdminPosts
  }
  
  const classes = useStyles();
  
  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={file !== null ? API_URL + file.url : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
            // Revoir la concatenation juste au dessus
            onClick={handleClick}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CardFile;
