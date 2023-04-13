/* eslint-disable prefer-destructuring */

export const API_KEY = import.meta.env.VITE_API_KEY;
export const URL = import.meta.env.VITE_TMDB_URL;
export const TYPE = {
  search: import.meta.env.VITE_SEARCH,
  movie: {
    popular: import.meta.env.VITE_POPULAR,
    topRated: import.meta.env.VITE_TOPRATED,
  },
  discovery: import.meta.env.VITE_CATEGORY,
};
