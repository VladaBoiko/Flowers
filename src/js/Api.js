console.log('api.js');
const axios = require('axios').default;

// https://parceljs.org/features/development/#hot-reloading
if (module.hot) {
  module.hot.accept();
}

axios.defaults.baseURL = 'https://62efe9458d7bc7c2eb8243b2.mockapi.io';

export async function methodName(...arg) {
  body;
}

export const serverData = async () => {
  const response = await axios.get('/12');
  const data = await response.data;
  console.log('🚀 ~ data', data);
  return data;
};
