import React from 'react'
import Movie from './Movie'
import './MoviesCollection.css'


export default function MoviesCollection({title,actionLink,onActionLinkClick,extraClasses,movies}) {
  return (
        <section className={`movies-collection-container ${extraClasses}`}>
          <div className="cluster-top">
       <h4 className="cluster-heading">{title}</h4>
        <span onClick={onActionLinkClick}>{actionLink}</span>
       </div>

       <div className="movies">
            {
             movies!==undefined && movies.map(m=><Movie 
                key={m.id} 
                title={m.title}
                poster={m.medium_cover_image}
                rating={m.rating}
                genre={m.genres[0]}
                year={m.year}   />
              )
            }
       </div>
       </section>
  )
}
