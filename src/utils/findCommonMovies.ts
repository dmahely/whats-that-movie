import { ActorWithMovies, Movie } from '../App'

const findCommonMovies = (actorsWithMovies: ActorWithMovies[]) => {
    const allMoviesArr = actorsWithMovies.flatMap((actor) => actor.movies)
    const movieIdsSet = new Set(allMoviesArr.map((movie) => movie.id))

    const commonMovieIds: number[] = []
    for (const movie of allMoviesArr) {
        if (movieIdsSet.has(movie.id)) {
            movieIdsSet.delete(movie.id)
        } else {
            commonMovieIds.push(movie.id)
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
