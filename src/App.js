import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AuthContext from './contexts/authContext';
import PrimarySearchAppBar from './components/AppBar/PrimarySearchAppBar';
import PrivateRoute from './components/PrivateRoute';
import Index from './pages/Index';
import Post from './pages/Post';
import Login from './pages/Login';
import AdminPosts from './pages/AdminPosts';
import authAPI from './services/authAPI';

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
      <Router>
        <PrimarySearchAppBar />
        <Route path="/" exact component={Index}></Route>
        <Route path="/post/:id" component={Post}></Route>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute path="/admin" component={AdminPosts} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
