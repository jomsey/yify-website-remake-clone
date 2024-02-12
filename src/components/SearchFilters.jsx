import React from 'react'
import "./SearchFilters.css"
import Selector from './Selector'
import { FiltersContext } from '../context'

export default function SearchFilters() {
        
  const sortRef = React.useRef(null)
   const queryRef = React.useRef(null)
   const qualityRef=React.useRef(null)
   const genreRef = React.useRef(null)
   const ratingRef = React.useRef(null)
   const yearRef = React.useRef(null)
   const languageRef = React.useRef(null)
   const {setFilters} = React.useContext(FiltersContext)

   const filters =[
        {
          title:"Quality",
          items:["All","480p","720p","1080p","3d"],
          ref:qualityRef
        },

        {
          title:"Genre",
          items:["All","Action","Adventure","Animation","Biography","Crime","Documentary",
                "Drama","Comedy","Family","Fantasy","Film-Noir","Game Show","History","Musical",
                "Music","Mystery","News","Realty-TV","Romance","Sci-Fi",
                "Sports","Talk-Show","Thriller","War","Western"
              ],
          ref:genreRef
        },

        {
          title:"Rating",
          items: ["All","9+","8+","7+","6+","5+","4+","3+","2+","1+"],
          ref:ratingRef
        },

        {title:"Year",
        items:["All","2023","2022","2021","2020","2019"],
        ref:yearRef
        },

        {
          title:"Language",
          items:["All","English"],
          ref:languageRef},
          
        {
          title:"Order By",
          items:[],
          ref:sortRef
        }
]

   const handleSubmit = (e)=>{
     e.preventDefault()
     setFilters({
      quality:qualityRef.current.value,
      genre:genreRef.current.value,
      language:languageRef.current.value,
      order:sortRef.current.value,
      year:yearRef.current.value,
      rate:ratingRef.current.value
     })
     
      
   }

   
  return (

    <div className='movie-filters'>
       <form onSubmit={handleSubmit}>
       <div className="form-group">
       <div className="input-group">
            <label htmlFor="q">Search Term:</label>
            <input type="text" name='q' ref={queryRef} />
        </div>
        <div className="input-group selectors">
          {filters.map(f=>
             <Selector 
                key={f.title}
                title={f.title}
                listItems={f.items}
                refname={f.ref}
                />
          )}
        </div>
       </div>
       <button type='submit'>Search</button>
       </form>
  
    </div>
  )
}
