import React,{ useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import CommentsAPI from '../../services/commentsAPI';

const FormComment = (props) => {

  const [writeComment, setWriteComment] = useState({});


  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await CommentsAPI.create(writeComment);
      setWriteComment("");
      props.fetchComments();
    } catch (error) {
      console.log(error)
    }
  };

  const handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setWriteComment({
      ...writeComment,
      post: props.id,
      [name]: value,
    })
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          name="pseudo"
          label="Pseudo"
          type="text"
          onChange={handleChange}
          value={writeComment.pseudo || ""}
          />
      </div>
      <div>
      <TextField
        name="content"
        id="outlined-multiline-static"
        label="Écrivez un commentaire"
        multiline
        rows={4}
        variant="outlined"
        onChange={handleChange}
        value={writeComment.content || ""}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          <span>Commenter</span>
        </Button>
      </div>
    </form>
  );
};

export default FormComment;
