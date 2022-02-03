import {axios} from './axios'

export async function getUserById(id: string) {
  if(!id) {
    throw new Error('需要传入 id')
  }
  return axios.get('/api/v1/users/' + id);
}