import React from 'react'
import MoviesCollection from './MoviesCollection'
import axios from  "axios"


export default function UpcomingMovies() {
  const [moviesList,setMoviesList] = React.useState([])
    const moviesListAPIEndPoint = `https://yts.mx/api/v2/list_upcoming.json`

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
  return (
    <MoviesCollection title="Upcoming Movies" actionLink="submit movie request" movies={moviesList}/>
  )
}
