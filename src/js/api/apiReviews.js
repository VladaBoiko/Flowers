import axios from 'axios';

const URL = 'https://server-flower.herokuapp.com';
// const URL = 'http://localhost:3000';

export const getAll = async () => {
  const data = await axios.get(`${URL}/reviews`);
  return data;
};

export const add = async newReviews => {
  const data = await axios.post(`${URL}/reviews`, newReviews);
  return data;
};
