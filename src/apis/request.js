import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
});

request.interceptors.response.use(
  (response) => {
    const status = response.status;
    if (status !== 200) {
      return Promise.reject(response.statusText);
    } else {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
