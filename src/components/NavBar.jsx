import React, {useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import AuthContext from '../contexts/authContext';
import authAPI from '../services/authAPI';

const NavBar = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  const history = useHistory();

  const handleDisconnect = () => {
    authAPI.logout();
    setIsAuthenticated(false);
    history.replace('/')
  };

  return (
    <nav>
      <Link to='/'>Home</Link>
      {isAuthenticated && <Link to='/admin'>Admin</Link>}
      {!isAuthenticated && <Link to='/login'>Connect</Link>}
      {isAuthenticated && <span onClick={handleDisconnect}>Disconnect</span>}
    </nav>
  );
};

export default NavBar;