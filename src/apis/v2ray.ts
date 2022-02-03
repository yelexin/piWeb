import {axios} from './axios'

export async function getServers() {
  return axios.get('/api/v1/v2ray/servers');
}

export async function updateSubscription() {
  return axios.post('/api/v1/v2ray/updateSubscription');
}