import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://github.com/MyIgnite/watch-me',
});