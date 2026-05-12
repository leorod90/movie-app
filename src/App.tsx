import { useEffect, useState } from "react"
import MovieCard from "./components/MovieCard"
import type { Movie } from "./types/movie"
// importing from .env
const API_KEY = import.meta.env.VITE_API_KEY

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]); // movies is an array of Movie

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    )
      .then((res) => res.json()) // turn into usable code
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      }) // store in state
  }, [])

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}