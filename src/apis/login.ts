import {axios} from './axiosNoInterceptor'

export async function checkSession() {
  return axios.get('/login/checkSession');
}
