import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'aa64369a7a4c070f2ae72e49aca3d158';

export const fetchDayPopularFilm = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};
