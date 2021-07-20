import { API_URL_POSTS } from '../config';

const authToken = localStorage.getItem('authToken');

const findAll = async () => {
  const response = await fetch(API_URL_POSTS,
    {
      method: "GET",
      headers: {
        'Accept': 'Application/JSON'
      }
    });
  return await response.json();
};

const findOne = async (id) => {
  const response = await fetch(`${API_URL_POSTS}/${id}`,
    {
      method: "GET",
      headers: {
        'Accept': 'Application/JSON'
      }
    });
  return await response.json();
};

const getComments = async (id) => {
  const response = await fetch(`${API_URL_POSTS}/${id}/comments`,
  {
    method: "GET",
    headers: {
      'Accept': 'Application/JSON'
    }
  });
  return await response.json();
};

const deletePost = (id) => {
  return fetch(`${API_URL_POSTS}/${id}`,
  {
    method: 'DELETE',
    headers: { 
      'Authorization': `Bearer ${authToken}`,
    }
  });
};

const create = async (post) => {
  const response = await fetch(API_URL_POSTS,
    {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
  return await response.json();
};
  
const upload = async (image) => { //revoir ça
  const response = await fetch(API_URL_POSTS,
    {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(image)
    })
  return await response.json();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  findAll,
  findOne,
  getComments,
  create,
  upload,
  deletePost
};
