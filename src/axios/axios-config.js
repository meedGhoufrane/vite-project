import axios from 'axios';

var instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',   
  timeout: 5000 
});

 
instance.interceptors.request.use((config) => {
  var token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;