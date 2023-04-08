import { ActorWithMovies } from '../App'

const findCommonMovies = (actorsWithMovies: ActorWithMovies[]) => {
    const allMoviesArr = actorsWithMovies.flatMap((actor) => {
        return actor.movies.map((movie) => movie)
    })

    const movieIdsSet = new Set(allMoviesArr.map((movie) => movie.id))
    if (movieIdsSet.size === allMoviesArr.length) {
        return []
    }

    const commonMovieIds = allMoviesArr
        .map((movie) => movie.id)
        .filter((id) => {
            if (movieIdsSet.has(id)) {
                movieIdsSet.delete(id)
            } else {
                return id
            }
        })

    const commonMovies = allMoviesArr.filter((movie) =>
        commonMovieIds.includes(movie.id)
    )

    return commonMovies
}

export { findCommonMovies }
