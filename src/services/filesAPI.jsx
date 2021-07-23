import { API_URL_UPLOAD_FILES } from '../config';

const findAll = async () => {
  const response = await fetch(API_URL_UPLOAD_FILES,
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
  findAll
};
