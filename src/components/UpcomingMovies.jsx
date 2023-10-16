import React from 'react'
import MoviesCollection from './MoviesCollection'
import axios from  "axios"


export default function UpcomingMovies() {
  return (
    <MoviesCollection title="Upcoming Movies" actionLink="submit movie request"/>
  )
}
