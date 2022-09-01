const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://62f9492f3eab3503d1e324fd.mockapi.io/',
});

export const serverData = async () => {
  const response = await instance.get('/products');
  const data = await response.data;
  console.log('🚀 ~ data', data);
  return data;
};
