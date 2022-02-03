import axiosOriginal from 'axios';
import { config } from '../config';

const axios = axiosOriginal.create({
  // baseURL: 'http://localhost:3000',
});
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    // 未登录时自动发起登录
    if (err.response.data.statusCode === 403) {
      window.location.href = `${config.serverOrigin}/login/github/init?returnTo=${window.location.href}`;
    }
  }
);

export { axios };
