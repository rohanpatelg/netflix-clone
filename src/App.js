import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
function App() {

  
  return (
    <div className="App">
     <Banner />
     <Row fetchURL={requests.fetchTrending} title="TRENDING"/>
     <Row fetchURL={requests.fetchNetflixOriginals} title="NETFLIX ORIGINALS"/>
     <Row fetchURL={requests.fetchUpcomingMovies} title="UPCOMING MOVIES"/>
     <Row fetchURL={requests.fetchTopRatedTvShows} title="TOP RATED SHOWS"/>
     
    </div>
  );
}

export default App;
