import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Movie from "./movie";
import "./App.css";
import generatePosterPath from "./helpers/generatePosterPath";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "400px",
    textAlign: "center",
    background: "rgb(2,0,36)",
background: "linear-gradient(90deg, rgba(9,88,121,1) 100%, rgba(0,82,255,0.7539390756302521) 100%, rgba(2,0,36,1) 0%",
  },
 
};
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [clickedMovie, setClickedMovie] = useState();
  function openModal(movie) {
    setModal(true);
    setClickedMovie(movie);
  }
  function closeModal() {
    setModal(false);
  }
  async function getMovies() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f28aa71682075a83b20e0e121c7582e3&language=en-US&page=1"
    );
    const data = await response.json();
    setMovies(data.results);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  useEffect(() => {
    getMovies();
    console.log(movies)
  }, []);
  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      <header>
        <h1>IDMovies</h1>
      </header>
      <div className="movies">
        {movies.map((movie) => (
          <Movie openModal={openModal} movie={movie} />
        ))}
      </div>
      <Modal
        isOpen={modal}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div class ="movie-info">
          <img className="modalimg" src={generatePosterPath(clickedMovie?.poster_path)}></img>
  <h2 className="modaltitle">{clickedMovie?.original_title}</h2>
  <p className="modalp">Release Date: {clickedMovie?.release_date}</p>
  <p className="modalp">{clickedMovie?.overview}</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;