import { useEffect, useState } from "react";
import Card from "../../Components/card/card";
import "./movie.css";

export function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/api/movies")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <>
      <h1>Movies List</h1>

      <div className="movies">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
export default Movies;