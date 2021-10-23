const API_KEY="d7ec0da55281f512b2a2751fee182f37";

const requests={
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchUpcomingMovies : `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedTvShows : `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchLatestTVShows : `/tv/latest?api_key=${API_KEY}&language=en-US`
}
export default requests;
