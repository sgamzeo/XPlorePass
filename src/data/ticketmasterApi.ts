import {API_KEY, API_BASE_URL} from './config.ts';

// export const nowPlayingMovies: string = `${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}`;
// export const upcomingMovies: string = `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
// export const popularMovies: string = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`;

// export const searchMovie = (keyword: string) =>
//   `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`;

export const eventDetails = (id: number) =>
  //   `${API_BASE_URL}/events/${id}.json?apikey=${API_KEY}`;
  `${API_BASE_URL}/events/27.json?apikey=${API_KEY}`;

// export const movieCastDetails = (id: number) =>
//   `${API_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;

