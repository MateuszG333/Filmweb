import { useEffect, useState } from "react";

export function Movies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3005/api/movies")
        .then(res => {
            return res.json();
        })
        .then(data => {setMovies(data);})
    }, [])

    return (
        <>
            <h1>Movies List</h1>

            {movies.map(movie => 
                (<h2>{movie.title}</h2>)
            )}
        </>
    )
}
export default Movies;  