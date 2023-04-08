const getFullPhotoPath = (photoPath: string) => {
    const baseURL = 'https://image.tmdb.org/t/p'
    const photoSize = 'w45'

    return `${baseURL}/${photoSize}/${photoPath}`
}

export { getFullPhotoPath }
