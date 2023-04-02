type Actor = {
    id: string,
    name: string,
}

const fetchActors = async (input: string) => {
    const data = await (await fetch(`${process.env.REACT_APP_BASE_URL}/search/person?api_key=${process.env.REACT_APP_API_TOKEN}&query=${input}`)).json()
    const results = data.results

    const actors = results.filter((person: any) => {
        return (person.known_for_department === "Acting" && !person.adult) as unknown as Actor
    })

    return actors
}

export { fetchActors }