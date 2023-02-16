import generatePosterPath from "../helpers/generatePosterPath";
const Movie = ({movie, openModal}) => {
    return (
        <div onClick={()=>{openModal(movie)}} className="movie">
          <img src= {generatePosterPath(movie?.poster_path)}></img>
          <div className="text">{movie.original_title}</div>
          </div>
          )
}

export default Movie;
