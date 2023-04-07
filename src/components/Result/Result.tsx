import { Movie } from "../../App"

type ResultProps = {
    commonMovies: Movie[]
}

const Result: React.FC<ResultProps> = ({ commonMovies }) => {
    const latestMovie = commonMovies.sort((a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate))[0]

    return (
        <div>
            These actors have {commonMovies.length} movies in common! Their latest movie together was {latestMovie.title} which came out on {latestMovie.releaseDate}
        </div>
    )
}

export { Result }