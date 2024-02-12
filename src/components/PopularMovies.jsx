import React from "react"
import axios from 'axios'
import "./PopularMovies.css"
import MoviesCollection from "./MoviesCollection"

function PopularMovies() {
    const [moviesList,setMoviesList] = React.useState([])
    const moviesListAPIEndPoint = `https://yts.mx/api/v2/list_movies.json?sort_by=dowload_count,seeds,like_count&limit=4`

    const   getMovies =async ()=>{
        try {
            const response = await axios.get(moviesListAPIEndPoint)
            const {movies} = response.data.data
            setMoviesList(movies);
        } catch (error) {
            console.log(error);
        }
    }
    
    React.useEffect(()=>{
         getMovies()
    },[])

   return <MoviesCollection 
              title="Popular Downloads" 
              actionLink="more featured ..." 
              movies={moviesList} 
              extraClasses="popular-movies-container"
          />

  
}

export default PopularMovies