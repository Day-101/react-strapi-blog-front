import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AuthContext from './contexts/authContext';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Login from './pages/Login';
import AdminPosts from './pages/AdminPosts';
import authAPI from './services/authAPI';
import Container from '@material-ui/core/Container';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated);

  useEffect(() => {
    authAPI.setup();
    authAPI.isAuthenticated();
  })

  return (
    <AuthContext.Provider
    value={{
      isAuthenticated,
      setIsAuthenticated
    }}
    >
      <Container>
        <div className="App">
          <Router>
            <NavBar />
            <Route path="/" exact component={Posts}></Route>
            <Route path="/post/:id" component={Post}></Route>
            <Route path="/login" component={Login}></Route>
            <PrivateRoute path="/admin" component={AdminPosts} />
          </Router>
        </div>
      </Container>
    </AuthContext.Provider>
  );
}

export default App;
