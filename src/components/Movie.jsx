import { useNavigate } from "react-router-dom"
import "./Movie.css"
import { FaStar} from "react-icons/fa"
export default function Movie({title,rating,poster,genre,year,id}) {
  const navigate = useNavigate()
  return (
    <div className="movie-container"  onClick={()=>navigate(`/movies/${id}`)}>
        <div className="movie-card">
            <img src={poster || "/mv-sample.jpg"} alt="" />
            <div className="movie-card-overlay">
            </div>
            <div className="content">
                <FaStar className="star-icon"/>
                <span className="rating">{rating || 5.4}/10</span>
                <span className="genre">{genre||'Horror'}</span>
                <button>View Details</button>
            </div>
        </div>
        <div className="movie-container-footer">
        <span className="movie-name">{title}</span>
        <br />
        <span className="year">{year || 2020}</span>
        </div>

    </div>
  )
}
