import axios, { AxiosInstance } from 'axios';

const axiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      accept: 'application/json',
    },
  });
};

export default axiosInstance;
