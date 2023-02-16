import generatePosterPath from "../helpers/generatePosterPath";
const Movie = ({movie, openModal}) => {
    return (
        <div onClick={()=>{openModal(movie)}} className="movie">
          <div className="text">{movie.original_title}</div>
          <img src= {generatePosterPath(movie?.poster_path)}></img>
          </div>
          )
}

export default Movie;
