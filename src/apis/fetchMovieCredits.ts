import { Movie } from "../App"

const fetchMovieCredits = async (actorId: string) => {
    const data = await (await fetch(`${process.env.REACT_APP_BASE_URL}/person/${actorId}/movie_credit?api_key=${process.env.REACT_APP_API_TOKEN}`)).json()
    const rawMovies = data.results.cast

    const movies: Movie[] = rawMovies.map((movie: any) => {
        return { id: movie.id, posterPath: movie.poster_path, title: movie.title, releaseDate: movie.release_date } as Movie
    })

    return movies
}

export { fetchMovieCredits }