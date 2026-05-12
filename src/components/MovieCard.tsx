import type { Movie } from "../types/movie"

const IMAGE_URL = import.meta.env.VITE_IMAGE_BASE_URL

type Props = {
  movie: Movie
}

export default function MovieCard({ movie }: Props) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img
        src={`${IMAGE_URL}/w200${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  )
}
