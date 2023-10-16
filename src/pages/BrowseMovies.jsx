import React from 'react'
import axios from  "axios"
import "./BrowseMovies.css"
import Movie from '../components/Movie'
import SearchFilters from '../components/SearchFilters'
import Pagination from './../components/Pagination';


export default function BrowseMovies() {
  const pageSize = 20
  const [moviePage,setMovePage] = React.useState(1)
  const [numberPages,setNumberPages]=React.useState(0)
  const [moviesList,setMoviesList] = React.useState([])
  const moviesListAPIEndPoint = `https://yts.mx/api/v2/list_movies.json?page=${moviePage}`
  
  const   getMovies =async ()=>{
      try {
          const response = await axios.get(moviesListAPIEndPoint)
          const {movies,movie_count} = response.data.data
          setMoviesList(movies);
          setNumberPages(Math.ceil(movie_count/pageSize))
      } catch (error) {
          console.log(error);
      }
  }

  React.useEffect(()=>{
       getMovies()
  },[moviePage])

  return (
    <><SearchFilters/>
    <div className="movies-list-container">
      <h2>Yify Movies  {moviePage>1 && `- page ${moviePage}`}</h2>

      <Pagination 
          currentPage={moviePage}
          onPageClick={page=>setMovePage(page)}
          totalPages={numberPages} 
          onNextClick={()=>setMovePage((page)=>page+1)}
          onPreviousClick={()=>setMovePage((page)=>page-1)}/>

      <div className="movies">
            {moviesList.map(m=><Movie 
              key={m.id} 
              title={m.title}
              poster={m.medium_cover_image}
              rating={m.rating}
              genre={m.genres[0]}
              year={m.year}   />)}
      </div>

      <Pagination 
          currentPage={moviePage}
          onPageClick={page=>setMovePage(page)}
          totalPages={numberPages} 
          onNextClick={()=>setMovePage((page)=>page+1)}
          onPreviousClick={()=>setMovePage((page)=>page-1)}/>
    </div>
    
    </>
  )
}

