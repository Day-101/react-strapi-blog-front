import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import postsAPI from '../services/postsAPI';
import usersAPI from '../services/usersAPI';
import {TextField, Button} from '@material-ui/core';
import FileUpload from 'components/FileUpload';
import AllFiles from 'components/AllFiles';
import Cookies from 'js-cookie'

const CreatePost = () => {
  const history = useHistory()

  const [credentials, setCredentials] = useState({
    title: "",
    image: null,
    content: "",
    users_permissions_user: null
  });
  console.log(credentials)
  
  const fetchAllMe = async () => {
    const data = await usersAPI.fetchUsersMe();
    setCredentials({
      ...credentials,
      users_permissions_user: data
    })
  };
  
  useEffect(() => {
    fetchAllMe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const handleChange = ({currentTarget}) => {
    const {value, name} = currentTarget;
    const test = Cookies.get("fileSelected")
    setCredentials({
      ...credentials,
      [name]: value,
      image: JSON.parse(test)
    })
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const data = await postsAPI.create(credentials);
      history.replace(`/post/${data.id}`);
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

export default CreatePost;
