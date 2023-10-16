import Movie from "./Movie"
import "./PopularMovies.css"

function PopularMovies() {
  return (
    <section className="popular-movies-container">
       <div className="cluster-top">
       <h3 className="cluster-heading">Popular Downloads</h3>
        <h4 className="blue">more featured ...</h4>
       </div>
       <div className="movies">
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
       </div>
    </section>
  )
}

export default PopularMovies