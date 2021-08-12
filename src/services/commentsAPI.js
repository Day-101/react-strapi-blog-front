import { API_URL_COMMENTS } from "../config";
import Cookies from "js-cookie";

const create = async (comment) => {

  const authToken = Cookies.get('authToken');

  const response = await fetch(API_URL_COMMENTS,
    {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
  return await response.json();
};

  
const findAll = async () => {
  const response = await fetch(API_URL_COMMENTS,
    {
      method: "GET",
      headers: {
        'Accept': 'Application/JSON'
      }
    });
  return await response.json();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  create,
  findAll
};