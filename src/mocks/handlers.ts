import { rest } from 'msw'
import { personSearchResponse } from './mocks'

const baseURL = process.env.REACT_APP_BASE_URL

export const handlers = [
    rest.get(`${baseURL}/search/person`, (req, res, ctx) => {
        return res(ctx.json(personSearchResponse))
    }),
]