import { ActorWithMovies, Movie } from "../App"

const findCommonMovies = (actorsWithMovies: ActorWithMovies[]) => {
    console.log(actorsWithMovies)
    const allMovieTitles = actorsWithMovies.flatMap((actor) => {
        return actor.movies.map((movie) => movie.title)
    })
    console.log(allMovieTitles)

    const moviesSet = new Set(allMovieTitles)
    if (moviesSet.size === allMovieTitles.length) {
        return []
    }

    const commonMovies = allMovieTitles.filter(title => {
        if (moviesSet.has(title)) {
            moviesSet.delete(title);
        } else {
            return title;
        }
    });
    console.log(commonMovies)

    return commonMovies
}

export { findCommonMovies }