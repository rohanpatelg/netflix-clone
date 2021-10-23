import axios from './axios';
import React, { useState, useEffect } from 'react';
import requests from './requests';
import './Banner.css';
const baseimgURL = 'http://image.tmdb.org/t/p/original/';
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]);
            
        }
        fetchData();
    },[]);
    function trunc(str,n){
        return str?.length>n?str.substr(0,n-1)+'...':str;
    }
    return (
        <header className="Banner" style={{
            backgroundSize:"cover",
            backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition:"centre centre"
        }}>
            <div className="Banner_content">
                <h2 className="Banner_title">{movie.name}</h2>
                <div className="Banner_buttons">
                    <button className="button">CLick</button>
                    <button className="button">Go</button>
                </div>
            <h1 className="Banner_overview">{trunc(movie?.overview,120)}</h1>
            </div>
            <div class="fade"></div>
        </header>
        
        
    )
}

export default Banner;
