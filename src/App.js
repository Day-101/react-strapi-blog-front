import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AuthContext from './contexts/authContext';
import PrimarySearchAppBar from './components/AppBar/PrimarySearchAppBar';
import PrivateRoute from './components/PrivateRoute';
import Index from './pages/Index';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import authAPI from './services/authAPI';

function App() {
  const [isLogged, setIsLogged] = useState(authAPI.isLogged);

  useEffect(() => {
    authAPI.isLogged();
  })

  return (
    <AuthContext.Provider
    value={{
      isLogged,
      setIsLogged
    }}
    >
      <Router>
        <PrimarySearchAppBar />
        <Route path="/" exact component={Index}></Route>
        <Route path="/post/:id" component={Post}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <PrivateRoute path="/admin" component={CreatePost} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
