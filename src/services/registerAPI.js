import {API_URL_REGISTER} from '../config';
import axios from 'axios';
// import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie'

const register = (crendentials) => {
  return axios.post(API_URL_REGISTER, crendentials)
  .then(response => response.data)
  .then(data => {
    console.log(data)
    // console.log("User ID ",data.user.id)
    Cookies.set("authToken", data.jwt);
    Cookies.set("username", data.user.username);
  })
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
};