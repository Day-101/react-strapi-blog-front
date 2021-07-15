import {API_URL_LOGIN} from '../config';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const authenticate = (crendentials) => {
  return axios.post(API_URL_LOGIN, crendentials)
  .then(response => response.data)
  .then(data => {
    window.localStorage.setItem("authToken", data.jwt);
    window.localStorage.setItem("username", data.user.username);
    axios.defaults.headers["Authaurization"] = "Bearer " + data.jwt;
  })
};

const isAuthenticated = () => {
  const token = window.localStorage.getItem("authToken");

  if(token){
    const {exp} = jwtDecode(token);
    if(exp * 1000 > new Date().getTime()){
      return true
    }
    return false
  }
  return false
};

const logout = () => {
  window.localStorage.removeItem('authToken');
  window.localStorage.removeItem('username');
  delete axios.defaults.headers["Authorization"];
};

const setup = () => {
  const token = window.localStorage.getItem("authToken");
  if(token){
    const {exp} = jwtDecode(token);
    if(exp * 1000 > new Date().getTime()){
      axios.defaults.headers["Authaurization"] = "Bearer " + token;
    }
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  authenticate,
  isAuthenticated,
  logout,
  setup,
};