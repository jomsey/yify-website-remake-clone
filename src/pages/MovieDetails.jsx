import React from 'react'
import "./MovieDetails.css"
import Movie from '../components/Movie'
import Person from './person-card/Card';
import Review from './../components/review';
import axios  from "axios"
import { useParams } from 'react-router-dom';


function MovieDetails() {
    const params = useParams()
    const movieId = parseInt(params.movie_id)
    const [movie,setMovie] = React.useState({})
    const [suggestedMovies,setSuggestedMovies] = React.useState([])
    const [movieComments,setMovieComments] = React.useState([])
    const [movieReviews,setMovieReviews] = React.useState([])


    


    const getMovie = async ()=>{
        try {
            const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`)
            setMovie(response.data.data.movie)
        } catch (error) {
            
        }

    }
    const getMovieSuggestions = async ()=>{
        try {
            const response = await axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`)
            setSuggestedMovies(response.data.data.movies)
        } catch (error) {
            
        }

    }
 
    const getMovieComments = async ()=>{
        try {
            const response = await axios.get(`https://yts.mx/api/v2/movie_comments.json?movie_id=${movieId}`)
            //setMovieComments(response.data.data.movies)
            console.log(response);
        } catch (error) {
            
        }

    }

    const getMovieReviews = async ()=>{
        try {
            const response = await axios.get(`https://yts.mx/api/v2/movie_reviews.json?movie_id=${movieId}`)
            //setMovieComments(response.data.data.movies)
            console.log(response);
        } catch (error) {
            
        }

    }
    
    React.useEffect(()=>{
        getMovie()
        getMovieSuggestions()
        getMovieComments()
        getMovieReviews()
    },[])
    console.log(suggestedMovies);
  return (
   <main className='movie-details-container'>
      <section className="hero-section-container" style={{backgroundImage:`url(${movie.background_image})`}}>
        <div className="hero-section">
        <div>
            <Movie poster={movie.large_cover_image
}/>
            <div className="action-buttons">
                <button>Download</button>
                <button>watch Now</button>
            </div>
        </div>

        <div>
            <h1>{movie.title}</h1>  
            <div className="summery">
                <span className='year'>2020</span>
                <span className="language">French</span>
                <span className="genre">Drama / Fantasy / Horror</span>
            </div>

            <div className="detail-cluster movie-qualities">
                Available in: <span className="quality">720p.BluRay</span>
                              <span className="quality">1080p.BluRay</span>
                              <span className="quality">2160p.BlueRay</span>
            </div>

            <div className="detail-cluster">
                 <button className="subtitle-download">Download Subtitles</button>
            </div>

            <div className="detail-cluster movie-keywords">
              Keywords: <span className="keyword">War</span>
                        <span className="keyword">SuperPower</span>
                        <span className="keyword">Blue</span>
              </div>
 
        </div>

        <aside className='similar-movies'>
            <h2>Similar Movies</h2>
            <div className="movies-sample">
                {
                    suggestedMovies.map(m=><Movie 
                        id = {m.id}
                        poster={m.medium_cover_image

                    }/>)
                }
            
            </div>
        </aside>
        </div>
      </section>

    
      <section className='meta'>
         <section className='movie-more-info'>
          <div className="summery">
              <h3>Plot Summery</h3>
              <div className='description'>
                <p>{movie.description_intro}</p>
              </div>
              
              <span className="uploader">Uploaded by : OTTO</span><br />
              <span className="publish-date">March 04, 2023 at 01:37 AM</span>
          </div>

          <div className="team">
             <div className="team-cluster">
                 <h3>Director</h3>
                 <div className='persons-container'>
                    <Person/>
                    <Person/>
                 </div>
             </div>

             <div className="team-cluster">
                 <h3>Top Cast</h3>
                 <div className='persons-container'>
                    <Person actingName="Jimmy"/>
                    <Person actingName="Bruce"/>
                    <Person actingName="Andy"/>
                    <Person/>
                 </div>
             </div>
         </div>
      </section>
    
      </section>
      <section className='feedback'>
         <div className="comments">
          <h3>10 Comments</h3>
          <div className='action-buttons'>
            <button>Be the first to leave a comment</button>
            <button>Login to leave a comment</button>

          </div>
         </div>
         <div className="reviews">
          <h3>Movie Reviews</h3>
          <div>
          <Review rate={7} name="Jim Carly"/>
          <Review rate={6} name="Kelly Nelson"/>
          <Review rate={3} name="Teddy Mars"/>
          <Review rate={4} name="Joe Bunny"/>
          </div>
          <a href="">Read more IMDb reviews</a>
         </div>
      </section>
   </main>
  )
}

export default MovieDetails