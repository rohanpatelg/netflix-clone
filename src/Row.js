import React,{useState, useEffect} from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';

const baseimgURL = 'http://image.tmdb.org/t/p/original/';
function Row({fetchURL,title}) {
    const [movie,setMovie] = useState([]);
    const [show,setShow] = useState(false);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovie(request.data.results);
            console.log(request.data.results);
        }
        fetchData();
    },[fetchURL]);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    function showTrailer(movie){
        if(!show){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }
    return (
        <div className="row">
            <h2 style={{color:'white'}}>{title}</h2>
            <div className="row_content">
                {movie && movie.map(movie=>{
                    
                      return <img key={movie.id} className="row_poster" src={`${baseimgURL}${movie.poster_path}`} alt={movie.name} onClick={()=>showTrailer(movie)} ></img>
                })
                }  
            </div>
            {show && < YouTube videoId="2g811Eo7K8U" opts={opts} />};
        </div>
    )
}

export default Row;
