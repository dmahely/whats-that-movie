const getFullPhotoPath = (path: string, size: string) => {
    const baseURL = 'https://image.tmdb.org/t/p'

    return `${baseURL}/${size}/${path}`
}

export { getFullPhotoPath }
