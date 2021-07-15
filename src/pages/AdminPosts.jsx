import React,{useState} from 'react';
import postsAPI from '../services/postsAPI';
import {TextField, Button} from '@material-ui/core';

const AdminPosts = () => {
  
  const [credentials, setCredentials] = useState({
    title: "",
    image: "",
    content: ""
  });

  const handleChange = ({currentTarget}) => {
    const {value, name} = currentTarget;
    setCredentials({
      ...credentials,
      [name]: value
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await postsAPI.create(credentials);
    }catch(error){
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          id="title"
          label="title"
          type="text"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          id="image"
          label="image"
          type="text"
          name="image"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          name="content"
          id="content"
          label="Multiline"
          multiline
          rows={4}
          variant="outlined"
          onChange={handleChange}
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

export default AdminPosts;