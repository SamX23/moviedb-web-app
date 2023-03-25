const requests = {
  fetchSearch: import.meta.env.VITE_SEARCH,
  fetchPopular: import.meta.env.VITE_POPULAR,
  fetchTrending: import.meta.env.VITE_TRENDING,
  fetchTopRated: import.meta.env.VITE_TOPRATED,
  fetchAction: import.meta.env.VITE_ACTION,
  fetchComedy: import.meta.env.VITE_COMEDY,
  fetchHorror: import.meta.env.VITE_HORROR,
  fetchRomance: import.meta.env.VITE_ROMANCE,
  fetchMystery: import.meta.env.VITE_MYSTERY,
  fetchSciFi: import.meta.env.VITE_SCIFI,
  fetchWestern: import.meta.env.VITE_WESTERN,
  fetchAnimation: import.meta.env.VITE_ANIMATION,
  fetchTV: import.meta.env.VITE_TV,
};
export default requests;
