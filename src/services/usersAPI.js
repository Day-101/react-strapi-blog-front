import {API_URL_USERS_ME} from '../config';
import Cookies from 'js-cookie'

const authToken = Cookies.get('authToken');

const fetchUsersMe = async () => {
  const response = await fetch(API_URL_USERS_ME,
    {
      method: "GET",
      headers: {
        'Accept': 'Application/JSON',
        'Authorization': `Bearer ${authToken}`
      },
    });
    return await response.json();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchUsersMe
};
