import React from 'react'
import Movie from './Movie'
import './MoviesCollection.css'


export default function MoviesCollection({title,actionLink,onActionLinkClick,extraClasses,movies}) {
  return (
        <section className={`movies-collection-container ${extraClasses}`}>
          <div className="cluster-top">
       <h2 className="cluster-heading">{title}</h2>
        <span onClick={onActionLinkClick}>{actionLink}</span>
       </div>

       <div className="movies">
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
