import React from 'react'
import Movie from '../components/Movie'
import "./TrendingMovies.css"

function TrendingMovies() {
  return (
    <section className='trending-movies-container'>
        <h1>24h YIFY Trending Movies</h1>
        <div className="movies">
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
        </div>
    </section>
  )
}

export default TrendingMovies