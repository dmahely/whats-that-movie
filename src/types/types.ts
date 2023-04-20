export type Movie = {
    id: number
    posterPath: string
    title: string
    releaseDate: string
}

export type Actor = {
    id: number
    name: string
    photo: string
}

export type ActorWithMovies = {
    id: number
    actor: Actor
    movies: Movie[]
}

export enum AppState {
    INITIAL,
    RESULT,
}
