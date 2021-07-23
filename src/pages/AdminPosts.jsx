import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import postsAPI from '../services/postsAPI';
import {TextField, Button} from '@material-ui/core';
import FileUpload from 'components/FileUpload';
import AllFiles from 'components/AllFiles';

const AdminPosts = () => {
  const history = useHistory()

  const [credentials, setCredentials] = useState({
    title: "",
    image: null,
    content: ""
  });

  const handleChange = ({currentTarget}) => {
    const {value, name} = currentTarget;
    setCredentials({
      ...credentials,
      [name]: value,
    })
    // récupérer la donnée 'file' pour l'insérer dans credentials
    // console.log(credentials)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await postsAPI.create(credentials);
      history.replace("");
    }catch(error){
      console.log(error)
    }
  };

  return (
    <>
      <FileUpload />
      <AllFiles />
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
    </>
  );
};

export default AdminPosts;