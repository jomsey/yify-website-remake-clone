import React, { useState } from 'react'
import axios from  "axios"
import "./BrowseMovies.css"
import Movie from '../components/Movie'
import SearchFilters from '../components/SearchFilters'
import Pagination from './../components/Pagination';
import { FiltersContext } from '../context'

export default function BrowseMovies() {
  const pageSize = 20
  const [moviePage,setMovePage] = React.useState(1)
  const [numberPages,setNumberPages]=React.useState(0)
  const [moviesList,setMoviesList] = React.useState([])
  const [filters,setFilters] = React.useState({})
  const {year,genre,language,rate,quality} =filters
  const moviesListAPIEndPoint = `https://yts.mx/api/v2/list_movies.json?page=${moviePage}`
  console.log(filters);
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
    <FiltersContext.Provider value={{setFilters,setMoviesList}}>
          <SearchFilters/>
          <div className="movies-list-container">
              <h2>{`${year && year !== "All"?year:""} ${rate && rate !== "All"?`Rated ${rate}`:""} 
                    Yify ${language && language !== "All"?language:""} 
                    ${genre && genre !== "All"?genre:""}
                    Movies  ${numberPages>1 ? `page - ${moviePage}`:"" }`
                  }
                </h2>

              <Pagination 
                  currentPage={moviePage}
                  onPageClick={page=>setMovePage(page)}
                  totalPages={numberPages} 
                  onNextClick={()=>setMovePage((page)=>page+1)}
                  onPreviousClick={()=>setMovePage((page)=>page-1)}
              />

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
                  onPreviousClick={()=>setMovePage((page)=>page-1)}
              />
        </div>
    
    </FiltersContext.Provider>
  )
}

