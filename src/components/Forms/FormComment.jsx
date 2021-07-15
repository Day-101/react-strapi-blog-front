import React,{ useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import CommentsAPI from '../../services/commentsAPI';

const FormComment = (props) => {

  const [comment, setComment] = useState({});


  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const data = CommentsAPI.create(comment);
      console.log(data);
      setComment("");
      props.fetchComments();
    } catch (error) {
      console.log(error)
    }
  };

  const handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setComment({
      ...comment,
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
          value={comment.pseudo || ""}
          />
      </div>
      <div>
      <TextField
        name="content"
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        variant="outlined"
        onChange={handleChange}
        value={comment.content || ""}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          <span>Send</span>
        </Button>
      </div>
    </form>
  );
};

export default FormComment;
