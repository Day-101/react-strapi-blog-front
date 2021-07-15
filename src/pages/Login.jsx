import React, {useState, useContext} from 'react';
import {TextField, Button} from '@material-ui/core';
import authAPI from '../services/authAPI';
import AuthContext from '../contexts/authContext';
import {useHistory} from 'react-router-dom';

const Login = () => {
  const history = useHistory()
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: ""
  });
  const {setIsAuthenticated} = useContext(AuthContext); 

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
      await authAPI.authenticate(credentials);
      setIsAuthenticated(true);
      history.replace("admin");
    }catch(error){
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField 
        id="identifier"
        label="Username"
        type="text"
        name="identifier"
        onChange={handleChange}
        />
      </div>
      <div>
        <TextField 
        id="password"
        label="password"
        type="text"
        name="password"
        onChange={handleChange}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;