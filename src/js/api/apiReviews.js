import axios from 'axios';
import { BASE_URL } from './base';

export const getAll = async () => {
  const data = await axios.get(`${BASE_URL}/reviews`);
  return data;
};

export const add = async newReviews => {
  const data = await axios.post(`${BASE_URL}/reviews`, newReviews);
  return data;
};

export const search = async string => {
  try {
    const { data } = await axios.get(`${BASE_URL}/flowers/search/${string}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
