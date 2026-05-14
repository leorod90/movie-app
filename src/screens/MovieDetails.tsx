import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieDetails } from "../api/tmdb"
import type { Movie } from "../types/movie"

export default function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState<Movie>(null)

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return

      const data = await getMovieDetails(id)
      setMovie(data)
    }

    fetchMovie()
  }, [id])

  if (!movie) return <div>Loading...</div>

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  )
}