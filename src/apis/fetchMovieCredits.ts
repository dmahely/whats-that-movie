import { Movie } from '../types/types'

const fetchMovieCredits = async (actorId: number) => {
    const data = await (
        await fetch(
            `${process.env.REACT_APP_BASE_URL}/person/${actorId}/movie_credits?api_key=${process.env.REACT_APP_API_TOKEN}`
        )
    ).json()
    const rawMovies = data.cast

    const movies: Movie[] = rawMovies.map((movie: any) => {
        return {
            id: movie.id,
            posterPath: movie.poster_path,
            title: movie.title,
            releaseDate: movie.release_date,
        } as Movie
    })

    return movies
}

export { fetchMovieCredits }
