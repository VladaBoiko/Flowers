const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://server-flower.herokuapp.com/',
});

export const APIGetData = {
  async getData() {
    const response = await instance.get(`/flowers/all`);
    const data = await response.data;
    return data.result;
  },

  async getDataByID(id, page = 1, limit = 20, sorting = 'rating,1') {
    const response = await instance.get(`/flowers/`, {
      params: {
        page,
        limit,
        id,
        sorting,
      },
    });

    const data = await response.data;
    return data.result;
  },

  async getDataBySection(section, page = 1, limit = 8) {
    const response = await instance.get(`/flowers/`, {
      params: {
        section,
        page,
        limit,
      },
    });

    const data = await response.data;
    return data.result;
  },

  async getDataByFilter(filter, page = 1, limit = 9, sorting = 'rating,1') {
    const response = await instance.get(`/flowers/`, {
      params: {
        ...filter,
        page,
        limit,
        sorting,
      },
    });

    const data = await response.data;
    return data;
  },
};
