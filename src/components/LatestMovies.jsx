import MoviesCollection from "./MoviesCollection"
import React from "react"
import axios from 'axios'

export default function LatestMovies(){
    const [moviesList,setMoviesList] = React.useState([])
    const moviesListAPIEndPoint = `https://yts.mx/api/v2/list_movies.json?sort_by=date_added`


    const   getMovies =async ()=>{
        try {
            const response = await axios.get(moviesListAPIEndPoint)
            const {movies} = response.data.data
            const some_movies = movies.splice(0,8)
            setMoviesList(some_movies);
        } catch (error) {
            console.log(error);
        }
    }
    
  
    React.useEffect(()=>{
         getMovies()
    },[])

    return <MoviesCollection title="Latest Yify Movies" actionLink="Browse all" movies={moviesList}/>;
    
}