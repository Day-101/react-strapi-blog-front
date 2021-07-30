import {API_URL_LOGIN} from '../config';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie'

const authenticate = (crendentials) => {
  return axios.post(API_URL_LOGIN, crendentials)
  .then(response => response.data)
  .then(data => {
    console.log("User ID ",data.user.id)
    Cookies.set("authToken", data.jwt);
    Cookies.set("username", data.user.username);
    axios.defaults.headers["Authorization"] = "Bearer " + data.jwt;
  })
};

// const GetUserAuthId = (crendentials) => {
//   return axios.post(API_URL_LOGIN, crendentials)
//   .then(response => response.data)
//   .then(data => {
//     console.log(data)
//     Cookies.set("authToken", data.jwt);
//     Cookies.set("username", data.user.username);
//     axios.defaults.headers["Authorization"] = "Bearer " + data.jwt;
//   })
// };

const isAuthenticated = () => {
  const token = Cookies.get("authToken");

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
  Cookies.remove('authToken');
  Cookies.remove('username');
  delete axios.defaults.headers["Authorization"];
};

const setup = () => {
  const token = Cookies.get("authToken");
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