import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (url: string): AxiosInstance => {
  return axios.create({
    baseURL: url,
    headers: {
      accept: 'application/json',
    },
  });
}

export const loginInstance = createAxiosInstance('https://github.com/login/oauth');
export const githubInstance = createAxiosInstance('https://api.github.com');