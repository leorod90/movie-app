import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import type { Movie } from "../types/movie"
import { getPopularMovies } from "../api/tmdb"
import { searchMovies } from "../api/tmdb"

type HomeProps = {
  searchQuery: string
}

export default function Home({ searchQuery }: HomeProps) {
  const [movies, setMovies] = useState<Movie[]>([]); // movies is an array of Movie
  // const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchMovies = async () => {
      let data

      if (searchQuery.trim()) {
        data = await searchMovies(searchQuery)
      } else {
        data = await getPopularMovies()
      }

      setMovies(data)
    }

    fetchMovies()
  }, [searchQuery])

  return (
    <div className="movie-row">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}