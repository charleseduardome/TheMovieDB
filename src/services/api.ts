import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: { Authorization: `Bearer ac3406358c42270b1c158345d03cc06c` },
  params: { language: 'pt-BR' },
});

export default api;
