import axios from 'axios';


import { Loading } from 'element-ui';

const AUTH_PREFIX = 'Bearer ';

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

if (
  localStorage.getItem('current_user_token') == null ||
  localStorage.getItem('current_user_token') == ''
) {
  axios.defaults.headers.common['Authorization'] = '';
} else {
  axios.defaults.headers.common['Authorization'] =
    AUTH_PREFIX + localStorage.getItem('current_user_token');
}

let loadingInstance;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (!config.noLoading) {
    loadingInstance = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
  }

  return config;
}, function (error) {
  // Do something with request error
  loadingInstance.close();
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    loadingInstance.close();
    return response;
  },
  function (error) {
    // Do something with response error
    loadingInstance.close();

    return Promise.reject(error);
  }
);

export default axios;
