import { ActorWithMovies, Movie } from '../types/types'

const findCommonMovies = (actorsWithMovies: ActorWithMovies[]) => {
    const allMoviesArr = actorsWithMovies.flatMap((actor) => actor.movies)
    const movieIdsSet = new Set(allMoviesArr.map((movie) => movie.id))

    const commonMovieIds: number[] = []
    for (const movieId of Array.from(movieIdsSet)) {
        if (movieIdsSet.has(movieId)) {
            movieIdsSet.delete(movieId)
        } else {
            commonMovieIds.push(movieId)
        }
    }

    const commonMovies: Movie[] = []
    const commonMovieIdsSet = new Set(commonMovieIds)

    actorsWithMovies.forEach((actor) => {
        actor.movies.forEach((movie) => {
            if (
                commonMovieIdsSet.has(movie.id) &&
                !commonMovies.includes(movie)
            ) {
                commonMovies.push(movie)
                commonMovieIdsSet.delete(movie.id)
            }
        })
    })

    return commonMovies
}

export { findCommonMovies }
