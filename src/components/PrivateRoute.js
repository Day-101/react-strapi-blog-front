import React, {useContext} from 'react';
import AuthContext from '../contexts/authContext';
import {useHistory, Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({path, component}) => {
  const {isLogged} = useContext(AuthContext); 
  const {location} = useHistory();

  if(isLogged){
    return <Route path={path} component={component} />
  }else if(!isLogged && location.pathname === "/login"){
    return <Redirect to="/login" />
  }else {
    return <Redirect to="/" />
  }
};

export default PrivateRoute;