import React from 'react'
import "./MovieDetails.css"
import Movie from '../components/Movie'
import Person from './person-card/Card';
import Review from './../components/review';

function MovieDetails({movie}) {
  return (
   <main className='movie-details-container'>
      <section className="hero-section-container">
        <div className="hero-section">
        <div>
            <Movie/>
            <div className="action-buttons">
                <button>Download</button>
                <button>watch Now</button>
            </div>
        </div>

        <div>
            <h1>Hancock</h1>  
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
                <Movie/>           
                <Movie/>
                {/* <Movie/>
                <Movie/> */}
            </div>
        </aside>
        </div>
      </section>

    
      <section className='meta'>
         <section className='movie-more-info'>
          <div className="summery">
              <h3>Plot Summery</h3>
              <div className='description'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe facilis rem nemo eveniet voluptate iusto sit, nam maxime iste harum, repudiandae est cum placeat repellendus praesentium eligendi quae quibusdam, ipsa autem. Omnis dolorem officia ullam at sit minus rem asperiores dicta. Maxime nihil rem illo iusto provident fugiat! In recusandae sed non explicabo, molestiae itaque accusamus reprehenderit id deserunt soluta suscipit dignissimos vitae laboriosam quibusdam sapiente tempore commodi maiores? Enim temporibus facere dolorum? Eligendi iusto dignissimos ullam exercitationem ipsum corrupti non aliquid culpa reprehenderit dolores deserunt incidunt fugiat aspernatur sunt rem, illum blanditiis ea aperiam eius quis. Aspernatur, quos!</p>
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