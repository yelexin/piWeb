import axiosOriginal from 'axios';
import { config } from '../config';

const axios = axiosOriginal.create({
  baseURL: config.serverOrigin,
});

export { axios };
