const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://62f9492f3eab3503d1e324fd.mockapi.io/',
});

export const APIGetData = {
  async getData(params) {
    const response = await instance.get(`/products/?${params}`);
    const data = await response.data;
    return data;
  },
};
