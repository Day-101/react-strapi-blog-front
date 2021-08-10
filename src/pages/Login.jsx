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
  const {setIsLogged} = useContext(AuthContext);

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
      await authAPI.login(credentials);
      setIsLogged(true);
      history.replace("");
    }catch(error){
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField 
        id="identifier"
        label="Email ou Pseudo"
        type="text"
        name="identifier"
        onChange={handleChange}
        />
      </div>
      <div>
        <TextField 
        id="password"
        label="Mot de passe"
        type="text"
        name="password"
        onChange={handleChange}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          S'identifier
        </Button>
      </div>
    </form>
  );
};

export default Login;