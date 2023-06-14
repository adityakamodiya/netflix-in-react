import axios from 'axios'
import { useEffect, useState } from 'react'
// import instance from './instance'
const baseURL = "https://api.themoviedb.org/3";

function Row(props) {
    const path = "https://image.tmdb.org/t/p/original"
    const [movierow, setmovierow] = useState([])
    useEffect(() => {
        axios.get(baseURL+props.link)
            .then((response) => {
                // console.log(response.data.results)
                setmovierow(response.data.results)
                

            })
    }, []);

    return (
        <>
            <div className='rows'>
                <h2>{props.heading}</h2>
                <div className='movies'>
                    {
                        movierow ?
                    movierow.map((movie) =>
                        //  console.log("movie")
                        <div className='movie-box'>
                            <img src={path + movie.poster_path}></img>
                            {/* console.log(movie.backdrop_path) */}
                        </div>
                    ): ''}
                </div>
            </div>
        </>
    )
}


export default Row